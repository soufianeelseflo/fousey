# FORM 01

A premium one-product DTC storefront study built to demonstrate the exact kind of work needed for a focused Shopify launch: strong art direction, mobile-first conversion UX, product storytelling, variant selection, cart behavior, and a clean checkout handoff.

> **Important:** FORM 01 is a fictional product and brand created as a technical/design proof piece. It is not presented as client work and is not affiliated with Fousey or any of his brands.

## Why this exists

A one-product store should not feel like a generic Shopify theme with a logo dropped into it. It should make one product feel worth paying attention to.

This build focuses on:

- premium art direction without stock-template clutter
- one clear product narrative from first screen to checkout
- responsive layout designed intentionally for mobile
- sticky mobile purchase controls
- product finish/variant selection
- quantity controls
- interactive cart drawer
- conversion-focused FAQ and objection handling
- reduced-motion accessibility support
- no framework or UI-library dependency for the proof build

## Review it

Open `index.html` directly in a browser, or run a simple local server.

### Easiest option

1. Click the green **Code** button on GitHub.
2. Click **Download ZIP**.
3. Extract the ZIP.
4. Open the extracted folder.
5. Double-click `index.html`.

No developer setup is required for the static proof.

## Shopify implementation map

The proof is intentionally structured so the visual system can be moved into a real Shopify store once the real product assets, copy, references, variants and product data are supplied.

| Proof behavior | Shopify implementation |
| --- | --- |
| Hero/product story | Custom Shopify sections |
| Product finish selector | Native product variants |
| Quantity control | Product form quantity |
| Add to bag | Shopify product form / Cart API |
| Cart drawer | Shopify AJAX Cart API |
| Checkout button | Native Shopify checkout |
| Reusable copy/media | Theme settings + section blocks |
| Mobile sticky CTA | Product-form state tied to selected variant |

## Files

- `index.html` - storefront structure and content
- `styles.css` - responsive art direction and layout system
- `script.js` - product selection, quantity, cart drawer and motion behavior
- `RUN_LOCALLY.md` - step-by-step instructions for nontechnical reviewers

## Build principles

1. **One product gets full attention.** No unnecessary catalog navigation or template filler.
2. **The product owns the first screen.** The visual system is designed around the object rather than around generic e-commerce components.
3. **Buying stays obvious.** Variant, quantity, price and purchase action stay together.
4. **Mobile is not an afterthought.** The mobile layout has its own hierarchy and a persistent buy action.
5. **Real assets should replace placeholders cleanly.** Product photography, UGC, video, founder content and brand fonts can be inserted without rebuilding the whole experience.

## Status

Public proof build. Ready to be adapted to a real one-product Shopify brief.
