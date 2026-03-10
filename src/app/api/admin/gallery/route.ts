import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import fs from 'fs';
import path from 'path';

const GALLERY_BASE = path.join(process.cwd(), 'public', 'gallery');
const ROOMS = ['baby-room', 'toddler-room', 'preschool-room', 'garden'];

function getImagesForRoom(room: string) {
  const roomDir = path.join(GALLERY_BASE, room);
  if (!fs.existsSync(roomDir)) return [];
  return fs
    .readdirSync(roomDir)
    .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .map(f => ({ filename: f, room, url: `/gallery/${room}/${f}` }));
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const images: Record<string, { filename: string; room: string; url: string }[]> = {};
  for (const room of ROOMS) {
    images[room] = getImagesForRoom(room);
  }

  return NextResponse.json({ images });
}

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const room = formData.get('room') as string;
    const file = formData.get('file') as File;

    if (!ROOMS.includes(room)) {
      return NextResponse.json({ error: 'Invalid room' }, { status: 400 });
    }
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const roomDir = path.join(GALLERY_BASE, room);
    if (!fs.existsSync(roomDir)) fs.mkdirSync(roomDir, { recursive: true });

    // Generate a unique filename
    const ext = path.extname(file.name) || '.jpg';
    const filename = `upload_${Date.now()}${ext}`;
    const destPath = path.join(roomDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(destPath, buffer);

    return NextResponse.json({ success: true, filename, url: `/gallery/${room}/${filename}` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
