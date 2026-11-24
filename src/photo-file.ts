import fs from 'node:fs';
import path from 'node:path';

// Returns the file name in public/photos/ for a photo slot, if one exists.
export function photoFile(name: string): string | undefined {
  const dir = path.join(process.cwd(), 'public', 'photos');
  return ['jpg', 'jpeg', 'webp', 'png'].map((ext) => `${name}.${ext}`).find((f) => fs.existsSync(path.join(dir, f)));
}
