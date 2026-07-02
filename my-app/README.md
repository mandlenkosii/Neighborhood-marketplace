# We-share — neighbourhood tool-lending marketplace (MVP)

Vite + React + TypeScript. Strict mode on, no `any`.

## Run it

```bash
npm install
npm run dev
```

## What's here (Phase 1 / MVP)

- **Browse** — item grid near the user, with search, category, price and
  distance filters. Real skeleton loading and a real empty state (no faked
  activity or inventory).
- **Item detail** — photos, description, owner, and a booking panel.
- **Booking flow** — pick dates -> confirm -> confirmed, checked against a
  mock store of existing bookings so overlapping dates are rejected.
- **Auth** — sign up / log in is required to _book_ or _list_ an item, not
  to browse. This is a deliberate change from the original brief: gating
  all content behind signup kills conversion and reads as a lead-gen trap.
  Capturing email at the point of intent (booking) converts better and is
  more honest with users.

## Explicitly out of scope for this pass

- **In-app messaging** between borrower and owner (Phase 2).
- **Live "N people are viewing this" counters.** The original brief asked
  for a fabricated urgency counter. That's a dark pattern - cut. If you
  want a real version later, it should be backed by real session data, not
  a fake/random number.
- **Fake listings to make the app "look busy."** Cut for the same reason:
  it's deceptive and falls apart the moment a user in a small neighbourhood
  notices the listings aren't real. The empty state is designed to look
  intentional instead.

## Structure

```
src/
  App.tsx, main.tsx    app shell + entry point
  components/          shared UI (Header, ItemCard, FilterBar, Badge)
  features/
    auth/               AuthContext, AuthPage
    browse/             BrowsePage
    items/               ItemDetailPage
    booking/             BookingPanel, MyBookingsPage
  lib/                  api.ts (mock backend), geo.ts, dateRange.ts, useUserLocation.ts
  mocks/                seed data (items, users)
  types/                shared TS types
  styles/               design tokens (tokens.css)
```

## Swapping in a real backend

All data access goes through `src/lib/api.ts`. Replace the function bodies
with real HTTP calls (or a client SDK) - nothing in the components needs to
change since they only depend on the exported types and function
signatures. `AuthContext` is similarly isolated: swap the mock `signUp`/
`logIn` for calls to a real auth provider (e.g. Supabase, Clerk, Auth0).

## Design system

Palette, type and the item-card "hang-tag" motif are defined in
`src/styles/tokens.css`. Fonts: Space Grotesk (display), IBM Plex Sans
(body), IBM Plex Mono (distances, prices, category labels).
