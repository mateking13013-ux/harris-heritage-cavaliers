// ---------------------------------------------------------------------------
// Google Ads conversion tracking — Harris Heritage Cavaliers
// Account 391-529-1313 ("Move London")
//
// These actions are SEPARATE from the "TDC - *" actions used by
// thedachshundcottage.com, which lives in the same Google Ads account.
// Same Google tag, different conversion labels, so the two sites' leads
// never get mixed together.
//
// Created 2026-11-15 by scripts/create_heritage_hill_conversions.py
// ---------------------------------------------------------------------------

/** Google tag ID. Tracking is OFF until this is set. */
export const GOOGLE_ADS_ID = 'AW-18369471441';

/** send_to values — created 2026-11-15 in account 391-529-1313. */
export const CONVERSIONS = {
  /** id 7904256917 · Fires on /thank-you (main form) and in the puppy popup success. */
  formSubmit: 'AW-18369471441/jU2dCJXHhbkdENHHn7dE',
  /** id 7904256923 · Fires on any click of an sms: link. */
  smsClick: 'AW-18369471441/gv9SCJvHhbkdENHHn7dE',
  /** id 7904382424 · Fires on any click of a mailto: link. */
  emailClick: 'AW-18369471441/5CgVCNibjbkdENHHn7dE',
  /** id 7904382457 · Secondary — newsletter signup, not counted as a lead. */
  newsletter: 'AW-18369471441/KuZqCPmbjbkdENHHn7dE',
};

// ---------------------------------------------------------------------------
// Contact details — single source of truth
// ---------------------------------------------------------------------------

/** The live site texts this number. */
export const SMS_NUMBER = '+15126931451';

export const EMAIL = 'harrisheritagecavaliers@gmail.com';

/** Shown in ads and on the site. Required for Google advertiser verification. */
export const BUSINESS_LOCATION = ''; // e.g. 'Austin, Texas'
