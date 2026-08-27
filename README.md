# ANA Landing Page — Desktop Exact + Responsive Mobile

Desktop is intentionally kept on the reference-exact section images and layout. Do not change the desktop CSS if the pixel composition must remain unchanged.

Mobile is a separate responsive DOM layout. Its artwork comes from the supplied source images and exact crops of those source images, so each visual remains replaceable independently.

## Replaceable mobile artwork
- `images/mobile-components/hero.png`
- `images/mobile-components/service-buzzer.png`
- `images/mobile-components/service-kol.png`
- `images/mobile-components/testimonials-buzzer.png`
- `images/mobile-components/testimonials-kol.png`
- `images/mobile-components/brand-*.png`
- `images/mobile-components/workflow-1.png` ... `workflow-5.png`
- `images/mobile-components/cta.png`

WhatsApp number is a placeholder: `6281234567890`.


## Latest mobile refinements
- Testimonials are split into 8 individual replaceable images and stacked one-by-one.
- Testimonial heading is rebuilt from the exact desktop source without the clipped lower labels.
- Brand logos are exact crops from `images/sections/04-brands.png`.
- Workflow steps are individually replaceable and displayed smaller with vertical arrows on mobile.
- Footer offer and social strip are separate replaceable images.
- Desktop section assets are provided at 2x resolution while preserving the original CSS dimensions for sharper text.
