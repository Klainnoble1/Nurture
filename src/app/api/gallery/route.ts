import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const GALLERY_BASE = path.join(process.cwd(), 'public', 'gallery');
const ROOMS = ['baby-room', 'toddler-room', 'preschool-room', 'garden'] as const;

type RoomId = (typeof ROOMS)[number];

function getImagesForRoom(room: RoomId) {
  const roomDir = path.join(GALLERY_BASE, room);
  if (!fs.existsSync(roomDir)) return [];

  return fs
    .readdirSync(roomDir)
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((f) => ({
      filename: f,
      room,
      url: `/gallery/${room}/${f}`,
      alt: `${room.replace('-', ' ')} photo`,
    }));
}

export async function GET() {
  const images: Record<RoomId, { filename: string; room: RoomId; url: string; alt: string }[]> = {
    'baby-room': [],
    'toddler-room': [],
    'preschool-room': [],
    garden: [],
  };

  for (const room of ROOMS) {
    images[room] = getImagesForRoom(room);
  }

  return NextResponse.json({ images }, { headers: { 'Cache-Control': 'no-store' } });
}

