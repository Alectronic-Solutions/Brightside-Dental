export interface ServiceStep {
  title: string;
  detail: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  intro: string;
  steps: ServiceStep[];
  forYou: string[];
  beforeLabel: string;
  afterLabel: string;
  faqs: ServiceFAQ[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "general-dentistry": {
    slug: "general-dentistry",
    intro:
      "Consistent, preventive care is the difference between catching a small cavity at a cleaning and needing a root canal a year later. Our general dentistry visits are unhurried, thorough, and built around keeping you out of the chair more than in it.",
    steps: [
      {
        title: "Comprehensive exam",
        detail:
          "We review your history, check each tooth and your gums, screen for oral cancer, and take digital X-rays only when clinically needed. Our sensors use about 90% less radiation than older film.",
      },
      {
        title: "Professional cleaning",
        detail:
          "A registered hygienist removes plaque and tartar above and below the gumline, polishes, and applies fluoride. We tailor depth and technique to sensitive teeth.",
      },
      {
        title: "Clear treatment plan",
        detail:
          "If we find anything, you will see it on screen and get a written estimate with your insurance applied before we schedule a single thing.",
      },
      {
        title: "Same-day care when possible",
        detail:
          "Need a filling or a crown? With CEREC same-day technology, many restorations are completed in the same visit. No temporary, no second trip.",
      },
    ],
    forYou: [
      "Families looking for one practice for every age",
      "Anyone overdue for a cleaning who wants a judgment-free reset",
      "Patients who want fillings, crowns, and exams under one roof",
      "People who value preventive care over emergency fixes",
    ],
    beforeLabel: "Before cleaning",
    afterLabel: "After cleaning and polish",
    faqs: [
      {
        q: "How often should I come in for a checkup?",
        a: "For most healthy adults, every six months. If you are managing gum disease, diabetes, or other risk factors, we may recommend every three to four months. We will set a cadence that fits your mouth, not a one-size-fits-all rule.",
      },
      {
        q: "Are dental X-rays safe?",
        a: "Yes. Our digital sensors use up to 90% less radiation than traditional film, and we use a thyroid collar and only take images when there is a clinical reason. A full set of digital X-rays exposes you to less radiation than a cross-country flight.",
      },
      {
        q: "What if I have not been to a dentist in years?",
        a: "You are exactly who we built this practice for. There is no lecture and no judgment. Just a fresh start. We will go at your pace and prioritize what matters most first.",
      },
      {
        q: "Do you treat children?",
        a: "Absolutely. We see patients of all ages and make first visits fun and low-pressure. We will also coach you on home care for little ones between visits.",
      },
    ],
  },
  "cosmetic-dentistry": {
    slug: "cosmetic-dentistry",
    intro:
      "A great cosmetic result does not look done. It looks like the best version of your own smile. We design every case around your face, your bite, and how you actually want to look when you laugh in a photo.",
    steps: [
      {
        title: "Smile consultation",
        detail:
          "We listen first. What bothers you, what you have always wanted, and what feels natural to you. Then we photograph and map your smile.",
      },
      {
        title: "Digital smile preview",
        detail:
          "Using digital mockups, you will see a preview of your new smile before any work begins, so there are no surprises on reveal day.",
      },
      {
        title: "Tailored treatment",
        detail:
          "Whitening, bonding, veneers, or a full makeover. We choose the least invasive path that gets you the result, and we color-match to your natural shade.",
      },
      {
        title: "Reveal and refine",
        detail:
          "We place and polish, then check the result in natural light and adjust until it feels right. Your comfort with the look is the finish line.",
      },
    ],
    forYou: [
      "Anyone hiding their smile in photos",
      "Patients with chips, gaps, or stained teeth",
      "Brides, grads, and anyone with a big day coming up",
      "People who want a natural result, not a fake-looking one",
    ],
    beforeLabel: "Before treatment",
    afterLabel: "After veneers and whitening",
    faqs: [
      {
        q: "Will veneers look fake?",
        a: "Not when they are done well. We use layered porcelain that mimics the translucency of natural enamel and shape each veneer to suit your face. The goal is a smile people notice without being able to say exactly why.",
      },
      {
        q: "How long does whitening last?",
        a: "In-office whitening typically lasts 1 to 3 years depending on your diet and habits. Coffee, tea, and red wine speed up staining. We send you home with custom trays so you can refresh the result whenever you like.",
      },
      {
        q: "Does cosmetic work damage my teeth?",
        a: "We always start with the most conservative option. Whitening and bonding are non-invasive; veneers require minimal enamel reduction. We will never remove more tooth structure than the result truly requires.",
      },
      {
        q: "Can I finance a smile makeover?",
        a: "Yes. Larger cosmetic cases qualify for CareCredit's 0% promotional financing and our in-house payment plans. We will give you the full written cost and monthly options up front.",
      },
    ],
  },
  "dental-implants": {
    slug: "dental-implants",
    intro:
      "A missing tooth is more than a gap. It changes how you chew, how the neighboring teeth drift, and how your jawbone holds its shape over time. Implants are the closest thing modern dentistry has to giving you the tooth back.",
    steps: [
      {
        title: "3D imaging and planning",
        detail:
          "A cone-beam CT scan lets us map bone, nerves, and sinuses in three dimensions, so we place each implant with millimeter precision.",
      },
      {
        title: "Implant placement",
        detail:
          "A small titanium post is placed in the jaw under local anesthetic. Most patients are surprised by how routine it feels. Sedation is available if you would prefer it.",
      },
      {
        title: "Healing and integration",
        detail:
          "Over a few months the implant fuses with your bone (osseointegration), creating a foundation as stable as a natural root. You will wear a temporary in the meantime.",
      },
      {
        title: "Final crown",
        detail:
          "We attach a custom crown color-matched to your other teeth. The result looks, feels, and functions like the tooth you lost, and is brushed and flossed exactly the same way.",
      },
    ],
    forYou: [
      "Anyone missing one or more teeth",
      "Denture wearers who want a stable, permanent option",
      "Patients told they have lost bone and need a long-term fix",
      "People who want to chew and speak without thinking about it",
    ],
    beforeLabel: "Before: missing tooth",
    afterLabel: "After: implant and crown",
    faqs: [
      {
        q: "How long do dental implants last?",
        a: "With good home care and regular checkups, the implant post can last a lifetime. The crown on top typically lasts 15 or more years before it may need replacement, much like any other restoration.",
      },
      {
        q: "Does getting an implant hurt?",
        a: "Most patients report less discomfort than a tooth extraction. The placement is done under local anesthetic, and post-op soreness is usually managed with over-the-counter pain relief for a day or two.",
      },
      {
        q: "Am I a candidate if I have lost bone?",
        a: "Often, yes. Bone grafting can rebuild a foundation strong enough to support an implant. Our 3D scan tells us exactly what is possible, and we will be honest if another option suits you better.",
      },
      {
        q: "How much do implants cost?",
        a: "Cost depends on whether grafting is needed and how many teeth you are replacing. We provide a complete written estimate after your scan, including any insurance contribution and financing options.",
      },
    ],
  },
  invisalign: {
    slug: "invisalign",
    intro:
      "Straightening your teeth should not mean a mouth full of metal for two years. Invisalign moves your teeth with a series of clear, custom aligners you can take out to eat, brush, and smile in photos.",
    steps: [
      {
        title: "Digital scan",
        detail:
          "A quick, gag-free digital scan replaces messy impressions and creates a precise 3D model of your teeth in minutes.",
      },
      {
        title: "See your future smile",
        detail:
          "Before you commit, we show you a simulation of how your teeth will move and what your final smile will look like.",
      },
      {
        title: "Wear your aligners",
        detail:
          "You will switch to a new set roughly every one to two weeks, wearing each for 20 to 22 hours a day. Most people only remove them to eat and brush.",
      },
      {
        title: "Retain your result",
        detail:
          "Once you are aligned, a custom retainer keeps everything in place. We make sure that hard-won straight smile stays straight.",
      },
    ],
    forYou: [
      "Adults who do not want metal braces at work",
      "Teens responsible enough to keep aligners in",
      "Anyone with crowding, gaps, or mild bite issues",
      "People who tried braces years ago and have shifted back",
    ],
    beforeLabel: "Before: crowding",
    afterLabel: "After: aligned smile",
    faqs: [
      {
        q: "How long does Invisalign take?",
        a: "Most cases take 6 to 18 months depending on how much movement is needed. Minor corrections can finish in as little as a few months. We will give you a realistic timeline after your scan.",
      },
      {
        q: "Is Invisalign more expensive than braces?",
        a: "It is often comparable. As an Invisalign Preferred Provider, our pricing is competitive, and many dental insurance plans contribute the same orthodontic benefit they would for braces. Financing is available either way.",
      },
      {
        q: "Will it affect my speech?",
        a: "There may be a slight lisp for the first day or two as your tongue adjusts, but it disappears quickly. Most people are speaking normally by the end of the first week.",
      },
      {
        q: "What happens if I lose an aligner?",
        a: "Do not panic. Call us. Depending on where you are in the series, we will often have you move to the next set early or order a quick replacement. We keep your full treatment plan on file.",
      },
    ],
  },
  "emergency-dentistry": {
    slug: "emergency-dentistry",
    intro:
      "Dental emergencies do not wait for a convenient time. A cracked tooth, a lost crown, or a throbbing toothache at 7 a.m. needs care today, not a callback next week. We hold time open every day for exactly this.",
    steps: [
      {
        title: "Call us right away",
        detail:
          "Phone the office and describe what is happening. We triage over the phone and, in most cases, get you in the same day.",
      },
      {
        title: "Get out of pain",
        detail:
          "Our first job is relief. We will numb the area, stop bleeding, and stabilize the situation before discussing anything long-term.",
      },
      {
        title: "Diagnose the cause",
        detail:
          "A focused exam and digital X-ray tell us exactly what is going on: a fracture, an infection, a lost filling. We treat the problem, not just the symptom.",
      },
      {
        title: "Treat and plan ahead",
        detail:
          "We complete what can be done today and map out any follow-up, with a clear, written estimate before you leave.",
      },
    ],
    forYou: [
      "Anyone in pain who cannot wait for a routine slot",
      "Knocked-out, cracked, or chipped teeth",
      "Lost fillings, crowns, or broken dentures",
      "Swelling, abscesses, or a tooth that is keeping you up at night",
    ],
    beforeLabel: "Before: cracked tooth",
    afterLabel: "After: repaired and restored",
    faqs: [
      {
        q: "What counts as a dental emergency?",
        a: "Severe toothache, a knocked-out or cracked tooth, a lost crown or filling, swelling or signs of infection, and uncontrolled bleeding after an extraction all qualify. When in doubt, call us.",
      },
      {
        q: "My tooth got knocked out. What do I do?",
        a: "Handle it by the crown, not the root. Gently rinse it, and if you can, place it back in the socket or keep it in milk. Then call us immediately. A tooth re-implanted within an hour has the best chance of being saved.",
      },
      {
        q: "Can you really see me the same day?",
        a: "In the vast majority of cases, yes. We intentionally hold open appointment time every weekday for emergencies. Call as early as you can and we will find you a spot.",
      },
      {
        q: "What if I do not have insurance?",
        a: "Emergencies happen to everyone. We offer CareCredit and in-house payment plans, and we will always give you the cost up front so you can make a decision without pressure.",
      },
    ],
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
