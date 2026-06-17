import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

export async function GET() {
    try {
        const dir = path.join(process.cwd(), "public", "gallery");
        const files = await readdir(dir);
        const images = files.filter(f => IMAGE_EXT.test(f)).sort();
        return NextResponse.json({ images });
    } catch {
        return NextResponse.json({ images: [] });
    }
}
