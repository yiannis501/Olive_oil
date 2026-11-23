// Everything Yiannis may need to change lives in this one file.
// Replace each value marked TODO before the site goes live.

export const shop = {
  name: 'Diapontia',
  tagline: 'Extra virgin olive oil from our family grove in Corfu',
  email: 'hello@diapontia.co.uk', // TODO: a mailbox you check every day
  instagram: 'https://www.instagram.com/diapontia', // TODO: confirm the handle

  // Shown on every page footer. A UK Ltd must show these on its website.
  company: {
    legalName: 'Diapontia Ltd', // TODO: exact name from Companies House
    number: '00000000', // TODO: company number
    registeredOffice: 'Registered office address, Town, Postcode', // TODO
  },

  // Christmas pre-order window. Set `christmas.open` to false on the day
  // the Royal Mail last posting date passes.
  christmas: {
    open: true,
    dispatch: '15 to 17 December',
    lastOrder: '14 December',
  },
  normalDispatch: 'within 3 working days',
};

export const product = {
  name: 'Diapontia Extra Virgin Olive Oil',
  size: '750 ml',
  price: 35,
  harvest: '2026/27 harvest', // TODO: remove if the oil is not all from one harvest
};

// Stripe Payment Links. Create them in the Stripe dashboard
// (Payment Links, New) and paste the https://buy.stripe.com/... URLs here.
// See SETUP.md for the exact settings.
export const buy = {
  one: { label: '1 bottle', price: 35, url: 'https://buy.stripe.com/TODO_one_bottle' },
  two: { label: '2 bottles, gift pair', price: 70, url: 'https://buy.stripe.com/TODO_two_bottles' },
};

// Must match the shipping rates set on the Stripe Payment Links.
export const postage = [
  { what: '1 bottle, Royal Mail Tracked 48', price: 5.95 },
  { what: '2 bottles, Royal Mail Tracked 48', price: 7.95 },
];

// Optional: a Tally or Google form for the waitlist. Leave empty to hide it.
export const waitlistUrl = '';
