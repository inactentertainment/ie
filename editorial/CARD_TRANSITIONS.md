# Wheel-card transitions — 13 October 2026

One shared 13 KB HTML/JS/CSS implementation, with no downloaded sound, video, or animation assets.

- Examine the Past: fixed 4.6-second time tunnel, descending synthesized pulses.
- Other silver card CTAs: alternate 3.8-second portal and 3.6-second silver sweep, synthesized soft whooshes.
- Popup social/shop links: 650 ms black handoff, no sound.
- Reduced motion: 180 ms black handoff, no sound or moving SVG.

External links retain their native new-tab clicks. The new tab opens a lightweight journey page, then replaces that temporary history entry with the destination. Internal links use an overlay and preserve their existing handlers, including the funding/contact flow. Back and Continue now are always available. Navigation uses timers rather than waiting for images, sound, or CSS animation events; an independent inline deadline covers failure to load the animation script. Page lifecycle cleanup prevents a delayed second navigation. Modified clicks retain direct native link behavior. Sound starts in the initiating click and is subject to browser audio settings.

Effects finish before the cross-domain handoff. Animation of a destination website's actual rendered screen requires an arrival effect on that website; no remote pages are put in an iframe.

## Perennial card correction

Pinterest https://pin.it/5lgbMVS4S, existing Etsy, and Redbubble https://www.redbubble.com/people/perennialhandg/shop render immediately from the loader's three-link fallback. Data requests bypass the browser cache; the homepage uses a new loader URL. The three required links survive a stale Etsy-only response or a failed fetch.

The current Perennial homepage was reviewed at https://perennialhomeandgardens.github.io/perennial-home-and-gardens/. Its card and About introduction now describe growing-zone, seasonal, mapping, calculator, companion, identifier, garden-record, library, and learning resources without preview wording.

## Checks

Run node editorial/check-card-transitions.cjs for native-click routing, link restoration, effect rotation, social handoff, modified clicks, funding callbacks, cancellation, navigation once, Back, and lifecycle cleanup. JavaScript syntax and whitespace checks pass. A loader simulation confirms three Perennial icons render immediately and persist after an Etsy-only response. No visual browser or audible device QA was available.
