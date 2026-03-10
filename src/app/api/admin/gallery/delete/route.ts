import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import fs from 'fs';
import path from 'path';

const GALLERY_BASE = path.join(process.cwd(), 'public', 'gallery');
const ROOMS = ['baby-room', 'toddler-room', 'preschool-room', 'garden'];

export async function DELETE(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { filename, room } = await req.json();

    if (!ROOMS.includes(room)) {
      return NextResponse.json({ error: 'Invalid room' }, { status: 400 });
    }

    const safeFilename = path.basename(filename);
    const filePath = path.join(GALLERY_BASE, room, safeFilename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
