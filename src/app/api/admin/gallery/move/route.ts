import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import fs from 'fs';
import path from 'path';

const GALLERY_BASE = path.join(process.cwd(), 'public', 'gallery');
const ROOMS = ['baby-room', 'toddler-room', 'preschool-room', 'garden'];

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { filename, fromRoom, toRoom } = await req.json();

    if (!ROOMS.includes(fromRoom) || !ROOMS.includes(toRoom)) {
      return NextResponse.json({ error: 'Invalid room' }, { status: 400 });
    }
    if (fromRoom === toRoom) {
      return NextResponse.json({ error: 'Source and destination are the same' }, { status: 400 });
    }

    // Sanitize filename to prevent path traversal
    const safeFilename = path.basename(filename);
    const srcPath = path.join(GALLERY_BASE, fromRoom, safeFilename);
    const destDir = path.join(GALLERY_BASE, toRoom);
    const destPath = path.join(destDir, safeFilename);

    if (!fs.existsSync(srcPath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    fs.renameSync(srcPath, destPath);

    return NextResponse.json({ success: true, url: `/gallery/${toRoom}/${safeFilename}` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
