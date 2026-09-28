# Mifer Digital v1.6.1 note

v1.6.1 refines the homepage editorial composition, section-label system, Approach typography, About Mifer art direction, and the Work page opening identities while preserving the v1.6 transition model and all demo routes.

## v1.6 transition note

v1.6 deliberately restores a branded minimum ~1 second transition for meaningful internal and language route changes. Same-page anchors and small interactions remain immediate. This supersedes the v1.5 performance note below specifically for major route transitions.

# Mifer Digital 1.5.0

## Applied revisions

- Avelis: optical spacing in the existing hero; regular sans-serif journey heading; compact unnumbered information panels; deep navy contact chapter; immediately visible, lazy-loaded Google neighbourhood map and matching map disclosures.
- Veyra: new editorial chestnut-hair portrait with responsive WebP assets; more legible animated scroll cue on desktop and mobile; services and pricing numbers removed with grid spacing corrected; balanced location statement; integrated Instagram heading/link, preserving all six lower visual tiles.
- Kavren Yapı: consistent visible name and metadata; aligned top project plates; persistent localized project links including filtered states; unnumbered expertise/contact sections; controlled image and type reveals; once-per-visit viewport counters preserving final locale formatting and m² units; compact corporate footer with working project and company links.
- Mifer: slightly stronger, more frequent existing shader; smaller demo disclaimer; English Work terminology audited.
- Work: separate editorial exhibition with three distinct chapters, preview images, sticky chapter navigation and explicit project opening links. Mobile retains the chapter compositions and a horizontal chapter index. Homepage project teasers remain in their existing layout.

## Safe performance changes

Removed artificial route-overlay waiting (previously 1,180 ms for Work and 620 ms for language switches). Kept the existing Astro router, hover prefetch and progress feedback. Shader canvas measurements run on resize, not every animation frame; resources are released on navigation. Added responsive WebP variants for clinic and salon imagery. No framework or animation dependency added.

## Verification

Production Astro/TypeScript build and generated-page tests cover all 45 routes, local links/fragments, image and media references, bilingual demo return navigation, construction project metadata, exact counter targets, always-present map, requested numbering removal, and separate Work layouts.

Agent browser QA was attempted through the supported preview, but the browser returned ERR_BLOCKED_BY_CLIENT. Consequently, visual rendering, real-device measurements, map provider loading and live interaction behavior could not be verified in that browser. Responsive rules were inspected at desktop/tablet/mobile breakpoints; this is not a claim of screenshot or Core Web Vitals measurement.

## New visual asset

`public/demos/mifer-kuafor/editorial-portrait.webp` and its 640px variant were created with the built-in image generation tool, then encoded as WebP. Prompt: premium photorealistic chest-up editorial portrait of an adult woman with sculpted chestnut waves, black high-neck outfit, limestone backdrop, natural daylight and skin texture; 2:3 composition with space around the hair; no text, logo, pink hair or corporate-stock smile. Fictional concept imagery, not a real salon employee.

## Local development

Run `npm.cmd install`, then `npm.cmd run dev` from the extracted project folder. `BASLAT.cmd` provides the same Windows launch path. The legacy `mailtoLink` compatibility export is retained to prevent the previously reported Vite dependency-scanning error. Source and public assets are included; dependencies and generated build output are excluded from the archive.
