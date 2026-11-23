# Diapontia storefront: setup

The site is a static Astro site. Stripe Payment Links take the payments, so there is no server, database or secret key in this code. Hosting is free.

All the text and links you need to change are in `src/config.ts`. The look is described in `DESIGN.md`. Search the code for `TODO` to find the rest.

## 1. Stripe (about 20 minutes)

1. Sign up at stripe.com as the UK Ltd and add the business bank account.
2. Turn on Apple Pay and Google Pay (Settings, Payment methods). They are on by default for most accounts.
3. Create a product: **Diapontia Extra Virgin Olive Oil, 750 ml**, price **£35.00**, one-off.
4. Create two **shipping rates** (Products, Shipping rates):
   - `Royal Mail Tracked 48, 1 bottle`: £5.95
   - `Royal Mail Tracked 48, 2 bottles`: £7.95
5. Create **Payment Link 1** (Payment Links, New):
   - Product: the oil, quantity 1, customers cannot change the quantity.
   - Collect customer addresses: **shipping address**, allowed countries **United Kingdom** only.
   - Shipping rate: the 1-bottle rate.
   - Require a phone number (Royal Mail uses it for delivery updates).
   - Custom field: text, optional, label **Gift message (we will handwrite it)**.
   - Limit the number of payments: set it to the number of Christmas bottles you hold (for example 30), so you cannot oversell.
   - After payment: redirect to `https://YOUR-DOMAIN/thank-you/`.
   - Custom text near the button: "Christmas orders are dispatched 15 to 17 December."
6. Create **Payment Link 2** the same way, with quantity **2** and the 2-bottle shipping rate.
7. Paste both `https://buy.stripe.com/...` links into `src/config.ts` (`buy.one.url` and `buy.two.url`).
8. Before launch, run a test purchase with a real card and refund it.

## 2. Hosting (about 10 minutes)

1. Push this folder to a GitHub repository.
2. Sign up at Cloudflare Pages or Netlify (both free) and import the repository.
   - Build command: `npm run build`
   - Output folder: `dist`
3. Buy the domain (for example diapontia.co.uk, about £10 a year) and connect it in the hosting dashboard.
4. Add a link from diapontiaolives.gr to the UK shop.

Every change pushed to GitHub publishes the site again within a minute.

## 3. Royal Mail Click & Drop (orders twice a week)

1. In Stripe, open Payments, filter by date, and export as CSV (include shipping name, address and phone).
2. In Click & Drop, choose Import orders, upload the CSV and map the columns the first time (Click & Drop saves the mapping).
3. Pick **Tracked 48**, print labels, pack, and drop off or book a collection.
4. Paste each tracking number into a short email to the customer (or let Click & Drop send its tracking email).

At 100 bottles this takes about 10 minutes a batch. Automating it (for example with n8n) is worth it from the 500-bottle batch.

## 4. Before you publish

- [ ] Company name, number and registered office in `src/config.ts`
- [ ] Email address and Instagram handle
- [ ] Both Stripe links, tested
- [ ] Check the bottle render (`public/brand/bottle.webp`) and the label scene match the final printed label
- [ ] Optional: add real photos of the grove; see DESIGN.md for where they fit
- [ ] Family details in `src/pages/story.astro`
- [ ] Terms, returns and privacy checked
- [ ] Postage prices checked against your Click & Drop prices for a packed bottle

## Run it on your computer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes the site to dist/
```
