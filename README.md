# GTM Integration App (Next.js + JavaScript)

This is a minimal Next.js app built in JavaScript to demonstrate how to:

- Inject the Google Tag Manager (GTM) script
- Push custom events using `dataLayer.push()`
- Track page views on route changes using the Next.js router

It fulfills the requirements of the GTM integration assessment — including the bonus route tracking feature.

---

## Features

- GTM script injected via `_document.js`
- Tracks `request_demo_click` on button click
- Tracks `page_view` events on route changes (SPA-compatible)
- Built with the traditional `pages/` router in plain JavaScript

---

## Getting Started

1. Install dependencies:

```bash
npm install
