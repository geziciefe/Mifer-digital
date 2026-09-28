# Avelis Dental Care

Original bilingual clinic concept, rebuilt September 2026 and visually refined on 7 September. Routes remain `/tr/dis-klinigi-demo` and `/en/dental-clinic-demo` to preserve existing demo links.

## Visual refinement, 7 September 2026

The existing navy, warm neutral and mint direction is retained. Hero type now tops out at 84 px rather than 108.8 px; section headings at 64 px rather than 74–82 px. Italic emphasis is reserved for the hero. Main explanatory copy is 16–18 px, treatment summaries 16 px, and form labels 14 px. Mobile has its own type scale and spacing. The introduction and journal have shorter vertical spacing.

The Mifer return link sits in a reserved utility row above the sticky clinic header, with an additional return link inside the mobile menu and the existing footer credit. It no longer floats over page content. Location is more prominent in the hero. Appointment anchors rely on a single document scroll offset instead of adding an element offset on top.

The native department selector now shares the input underline, height and focus treatment, with a decorative non-interactive chevron. The doctor profile explains clinical focus and consultation approach; the expanded biography identifies the fictional profile and the verified education information required for a real clinic. No university, credential or certificate is invented.

## Components

- `DentalFrame.astro`: independent clinic document, navigation, footer, contact dialog and discreet Mifer return link. Does not load the former shared dental styles.
- `DentalDemo.astro`: homepage with eight treatment areas, prominent fictional dentist profile, clinic gallery, patient journey, editorial links and appointment demonstration.
- `DentalArticle.astro` and `DentalPolicy.astro`: localized treatment and legal information routes.
- `src/data/dental.ts`: clinic copy and treatment data.
- `src/scripts/dental-demo.ts`: dependency-free menu, accessible native dialog, local-only form and on-demand map.

## Demo boundaries and real clinic launch

Avelis and Dt. Defne Aral are fictional. Clinic and portrait imagery is AI-generated, not actual patient outcomes. Education and staff details must be replaced with verified information before a real clinic launch. The displayed neighbourhood and opening hours are illustrative. Exact address, telephone, parking/accessibility information and clinic registration details must be supplied by the clinic.

The form has no backend, network submission, tracking or persistence. Its success state explicitly explains that no real appointment was made. It clears the input values. The privacy acknowledgement is not marketing permission or health-data consent. Do not collect medical history in this initial form. Configure a secure, legally reviewed appointment integration and an actual controller-specific notice before accepting real requests.

Google Maps loads only after an explicit click and shows a neighbourhood, not a fictional clinic marker. Review third-party transfer and cookie requirements before real deployment. No analytics or advertising cookies are added by this demo code; hosting infrastructure has its own policies.

## Reference material

- Turkish Ministry of Health, 12 November 2025 regulation: https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html
- KVKK, separation of notice and explicit consent (2026/347): https://www.kvkk.gov.tr/Icerik/8710/veri-sorumlulari-tarafindan-acik-riza-ve-aydinlatma-metinlerinin-ayri-ayri-duzenlenmesi-gerektigi-hakkinda-kisisel-verileri-koruma-kurulunun-18-02-2026-tarihli-ve-2026-347-sayili-ilke-kararina-iliskin-kamuoyu-duyurusu
- Treatment pages link individually to NHS patient information. These short concept texts require an authorised dental professional's review before actual clinical publication. No blanket legal-compliance or medical-review certification is claimed.

## Validation

Astro type checks: zero errors/warnings. Production build: 37 routes. Static validation on 7 September: 843 local link and asset references with zero broken references, anchor targets, unique IDs, bilingual treatment links, dimensioned images and delayed map loading. Native form structure, no-JavaScript submission protection and both language return links checked. Existing non-dental demo source is unchanged by this refinement.

Cloud-browser preview was retried on 7 September and remains blocked by ERR_BLOCKED_BY_CLIENT. Post-change visual mobile/desktop and interactive browser validation therefore remains unverified. Performance targets are targets, not measured results. Hero is about 66 KB WebP; doctor portrait 38 KB; waiting-room image 132 KB; scanner detail 33 KB. Below-the-fold images are lazy-loaded, images reserve dimensions, fonts are local, and motion respects reduced-motion preferences. No dependencies were added for this refinement.

## New image

Built-in image generation: photorealistic editorial photograph of a fictional premium Istanbul clinic waiting room, ivory stone, oak joinery, midnight-blue lounge chairs, small side table, natural daylight; no people, logos or text. Optimized asset: `public/demos/mifer-smile/waiting-room.webp`.

7 September: generated a single photorealistic detail of an intraoral scanner in its cradle, light stone counter, oak cabinetry, navy accent and a softly focused assessment monitor. No people, patient outcome imagery, logos or readable text. Replaces the repeated treatment-room thumbnail. Optimized to 960 × 640 WebP at `public/demos/mifer-smile/digital-scanner.webp` (33,820 bytes).
