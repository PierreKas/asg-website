#!/usr/bin/env python3
"""One-off: derive the favicon / PWA / Apple-touch icon set from the real
ASG logo (src/assets/logo.png - a white-background PNG with the circular
mark on top and the "ASG" wordmark + tagline below).

Small sizes (<=64px) use just the circular mark (the full wordmark is
illegible that small); larger sizes use the full logo.

Requires Pillow.  Run:  python3 scripts/generate-icons.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "src/assets/logo.png"
PUBLIC = ROOT / "public"
PUBLIC.mkdir(exist_ok=True)


def pad_to_square(img, bg=(255, 255, 255)):
    w, h = img.size
    side = max(w, h)
    out = Image.new("RGB", (side, side), bg)
    out.paste(img, ((side - w) // 2, (side - h) // 2))
    return out


full = Image.open(LOGO).convert("RGB")

# circular mark only (content bbox measured once against the source: the
# ring+cross+leaf sits in the top ~56% of the 600x600 source, before the
# "ASG" wordmark begins) - crop with a little breathing room.
mark = pad_to_square(full.crop((124, 0, 476, 352)))
full_square = pad_to_square(full)

for s in (16, 32, 48, 64):
    mark.resize((s, s), Image.LANCZOS).save(PUBLIC / f"icon-{s}.png")
for s in (96, 180, 192, 512):
    full_square.resize((s, s), Image.LANCZOS).save(PUBLIC / f"icon-{s}.png")

mark.resize((96, 96), Image.LANCZOS).save(PUBLIC / "favicon-96x96.png")
full_square.resize((180, 180), Image.LANCZOS).save(PUBLIC / "apple-touch-icon.png")
full_square.resize((512, 512), Image.LANCZOS).save(PUBLIC / "icon-maskable-512.png")

mark.resize((48, 48), Image.LANCZOS).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

print("icons written to", PUBLIC)
