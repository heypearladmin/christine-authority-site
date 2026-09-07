#!/bin/bash
# Fails the build if any /public/*.webp source image is missing one of its
# required 640w/828w/1080w variants in /public/_responsive (used by
# lib/image-loader.ts). Variants are generated manually via
# scripts/generate-responsive-images.sh before committing — this check only
# validates that step was actually done, it does not generate anything.
set -e
cd "$(dirname "$0")/../public"
WIDTHS=(640 828 1080)
missing=0
checked=0
for img in *.webp; do
  [ -f "$img" ] || continue
  checked=$((checked+1))
  base="${img%.webp}"
  for w in "${WIDTHS[@]}"; do
    variant="_responsive/${base}-${w}w.webp"
    if [ ! -f "$variant" ]; then
      echo "MISSING RESPONSIVE VARIANT: public/${variant} (source: public/${img})"
      missing=$((missing+1))
    fi
  done
done

if [ "$missing" -gt 0 ]; then
  echo ""
  echo "$missing responsive image variant(s) missing out of $checked source images checked."
  echo "Run: bash scripts/generate-responsive-images.sh, then commit the new files in public/_responsive/."
  exit 1
fi

echo "OK: all $checked source images in public/ have their responsive variants."
