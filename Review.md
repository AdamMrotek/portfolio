I'vearead through the:whole thing.iHere's the brutally honest review, scored against Crawford's
  principles and split by your two audiences.

  Verdict up front
  
  It's a genuinely strong, well-built page — clean Apple-grade aesthetic (good halo effect), real photos
  and screenshots (no stock — you nailed that), a differentiated AI-product angle, and a single-page
  structure with no page sprawl. It works well for technical readers. It has real gaps for HR/recruiters.
  The two audiences want different things and right now the page is optimised for the engineer, not the
  screener.

  ---
  Where it's already winning
 
  - Halo effect / professionalism — looks high-quality, builds instant credibility. ✅
  - Real imagery — your face, actual product screenshots, real company logos. Exactly what Crawford
  preaches. ✅
  - Differentiation — "applied LLM product engineering + eval harness + architecture→systems-thinking" is a
  distinct story. You won't be treated as a commodity React dev. ✅
  - About page done right — it's a narrative (architecture → systems thinking), not a résumé dump. ✅
  - Load time — the 2.6 MB video only mounts on click (showDemo), not on load. Smart. ✅

  ---
  The real problems
  
  🔴 1. No CV/résumé download — biggest gap for HR

  Git history literally shows "CV removed". Recruiters need a PDF they can forward to the hiring manager. A
  contact form doesn't help them do their job. This is the single highest-priority fix for the HR
  audience. Add a "Download CV" button in the nav and/or hero.

  🔴 2. No direct email shown

  Contact is a form + GitHub + LinkedIn. Recruiters want to copy-paste an email. The form is a barrier for
  them, not a convenience. Show the email address (you can obfuscate it lightly against scrapers).

  🟠 3. Hero CTA assumes knowledge — "View VillageOS"
  
  An HR person has no idea what VillageOS is, so your primary button means nothing to half your audience.
  Crawford's clarity rule. Change it to "View my work" (let the section reveal it's VillageOS).

  🟠 4. Missing "what I'm looking for" / availability
  
  HR's first question is "is he open, and to what?". You state location/hybrid (good) but never the role
  you want or that you're available. This is the portfolio equivalent of Crawford's "don't hide pricing" —
  it filters for the right inbound.

  🟠 5. The positioning paragraph appears twice, nearly verbatim
  
  Hero paragraph ≈ the Experience positioning string. "Cut your copy, then cut it again." Differentiate
  them: hero = the hook, experience intro = one tighter line.

  🟡 6. "More projects" section is thin and slightly downgrades you
  
  A plural "Projects" section holding one older project (Broccoli, a Firebase demo) right after strong
  professional experience can lower perceived seniority for a tech lead. Either lead Broccoli with what it
  demonstrates, or fold it into the "More on GitHub" card and drop the half-empty grid.

  🟡 7. Experience bullets are output-heavy, light on results
  
  Crawford: sell results, not features. You have "3,000+ users" and "drove successful upsells" (good) — but
  most Croud bullets describe scope/ownership not outcome. Tech leads scan for impact metrics. Add a
  number or business result wherever you honestly can.

  🟡 8. Animation risk — verify, don't assume
  
  Scroll-reveals + the gradient timeline rail that fills on scroll + the floating responsive showcase. None
  is over-the-top, but Crawford's warning stands: test the timeline fill and reveals on a real mid-range 
  phone. If anything stutters, it reads as "frustrating," not "impressive."

  ⚪ 9. Minor

  - Screenshots are PNGs (~320 KB each); convert to WebP to stay safely under the 3-second rule on mobile
  data.
  - "Being a father taught me dedication" — sincere, but some hiring managers find it filler. Optional
  trim.
  
  ---
  Bottom line by audience

  ┌─────────────────┬────────────┬─────────────────────────────────────────────────────────────────────┐
  │                 │   Works?   │                                 Why                                 │
  ├─────────────────┼────────────┼─────────────────────────────────────────────────────────────────────┤
  │ Tech            │ Yes,       │ Real shipped AI product, eval harness, typed contracts, honest      │
  │ professionals   │ strongly   │ stack depth. This is your strength — lean in.                       │
  ├─────────────────┼────────────┼─────────────────────────────────────────────────────────────────────┤
  │                 │            │ Looks great and scans well, but no CV, no direct email, jargon CTA, │
  │ HR / recruiters │ Partially  │  and no stated availability create friction exactly where a         │
  │                 │            │ screener needs zero.                                                │
  └─────────────────┴────────────┴─────────────────────────────────────────────────────────────────────┘

  If you fix #1–#4 you close the HR gap without touching what already works for engineers.
  
  Want me to implement the high-priority fixes (CV button, direct email, hero CTA copy, availability line,
  de-dupe the positioning)? I can do them as small, isolated edits.