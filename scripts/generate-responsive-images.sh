#!/bin/bash
# Generates 640w/828w/1080w WebP variants for every image in /public into
# /public/_responsive, used by lib/image-loader.ts to restore responsive
# srcset behavior without depending on Vercel's paid image optimizer.
#
# Run this after adding any new image to /public. Safe to re-run — it
# regenerates all variants each time (fast, ImageMagick-only, no deps).
set -e
cd "$(dirname "$0")/../public"
mkdir -p _responsive
WIDTHS=(640 828 1080)
count=0
for img in *.webp; do
  [ -f "$img" ] || continue
  base="${img%.webp}"
  for w in "${WIDTHS[@]}"; do
    magick "$img" -resize "${w}x>" -quality 80 "_responsive/${base}-${w}w.webp"
  done
  count=$((count+1))
done
echo "Processed $count source images -> $((count*3)) variants in public/_responsive/"
