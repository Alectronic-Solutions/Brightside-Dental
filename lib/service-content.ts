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
      "Regular checkups are how a small cavity gets caught at a cleaning instead of turning into a root canal a year later. We take our time at these visits so problems are found while they are still small and inexpensive to fix.",
    steps: [
      {
        title: "Comprehensive exam",
        detail:
          "We review your history, check each tooth and your gums, screen for oral cancer, and take digital X-rays only when clinically needed. Our sensors use about 90% less radiation than older film.",
      },
      {
        title: "Professional cleaning",
        detail:
          "A registered hygienist removes plaque and tartar above and below the gumline, polishes, and applies fluoride. If your teeth are sensitive, tell us and we will adjust.",
      },
      {
        title: "Clear treatment plan",
        detail:
          "If we find anything, you will see it on screen and get a written estimate with your insurance applied before we schedule a single thing.",
      },
      {
        title: "Same-day care when possible",
        detail:
          "With CEREC, many crowns and fillings are finished in a single visit, so you skip the temporary crown and the second appointment.",
      },
    ],
    forYou: [
      "Families looking for one practice for every age",
      "Anyone who is overdue for a cleaning and a little embarrassed about it",
      "Patients who want exams, fillings, and crowns at the same office",
      "People who value preventive care over emergency fixes",
    ],
    beforeLabel: "Before: tartar buildup and inflamed gums",
    afterLabel: "After: professional cleaning, healthier gums",
    faqs: [
      {
        q: "How often should I come in for a checkup?",
        a: "For most healthy adults, every six months. If you are managing gum disease, diabetes, or other risk factors, we may recommend every three to four months. We will recommend a schedule based on what we see.",
      },
      {
        q: "Are dental X-rays safe?",
        a: "Yes. Our digital sensors use up to 90% less radiation than traditional film, and we use a thyroid collar and only take images when there is a clinical reason. A full set of digital X-rays exposes you to less radiation than a cross-country flight.",
      },
      {
        q: "What if I have not been to a dentist in years?",
        a: "That is very common, and you will not get a lecture. We start with an exam, tell you what we find, and take care of the most important things first at a pace you are comfortable with.",
      },
      {
        q: "Do you treat children?",
        a: "Yes. We see patients of all ages and keep first visits short and easy for kids. We can also show you how to help with brushing at home.",
      },
    ],
  },
  "cosmetic-dentistry": {
    slug: "cosmetic-dentistry",
    intro:
      "Good cosmetic work should not be obvious. We plan each case around your face and your bite, so the result still looks like you.",
    steps: [
      {
        title: "Smile consultation",
        detail:
          "We start by asking what bothers you about your smile and what you would like to change. Then we take photos and measurements.",
      },
      {
        title: "Digital smile preview",
        detail:
          "Using digital mockups, you will see a preview of your new smile before any work begins, so there are no surprises on reveal day.",
      },
      {
        title: "Treatment",
        detail:
          "Depending on your goals, that could be whitening, bonding, veneers, or a combination. We choose the least invasive option that gets the result and match the color to your natural teeth.",
      },
      {
        title: "Reveal and refine",
        detail:
          "We place and polish, then check the result in natural light and adjust until it feels right. It is not finished until you are happy with it.",
      },
    ],
    forYou: [
      "Anyone hiding their smile in photos",
      "Patients with chips, gaps, or stained teeth",
      "Brides, grads, and anyone with a big day coming up",
      "People who want results that look natural",
    ],
    beforeLabel: "Before: worn, chipped, and stained front teeth",
    afterLabel: "After: porcelain veneers",
    faqs: [
      {
        q: "Will veneers look fake?",
        a: "Not when they are done well. We use layered porcelain that mimics the translucency of natural enamel and shape each veneer to suit your face. Most people will not be able to tell you have them.",
      },
      {
        q: "How long does whitening last?",
        a: "In-office whitening typically lasts 1 to 3 years depending on your diet and habits. Coffee, tea, and red wine speed up staining. We send you home with custom trays so you can refresh the result whenever you like.",
      },
      {
        q: "Does cosmetic work damage my teeth?",
        a: "We always start with the most conservative option. Whitening and bonding are non-invasive; veneers require minimal enamel reduction. We will never remove more tooth structure than the result needs.",
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
      "A missing tooth affects how you chew, lets the neighboring teeth drift, and causes the jawbone to shrink over time. An implant replaces the root as well as the tooth, which is why it holds up better than a bridge or denture.",
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
          "We attach a custom crown color-matched to your other teeth. It matches your other teeth, and you brush and floss it the same way.",
      },
    ],
    forYou: [
      "Anyone missing one or more teeth",
      "Denture wearers who want a stable, permanent option",
      "Patients told they have lost bone and need a long-term fix",
      "People who want to chew and speak without thinking about it",
    ],
    beforeLabel: "Before: missing upper teeth",
    afterLabel: "After: implant-supported restoration",
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
      "Invisalign straightens teeth with a series of clear, custom aligners. You take them out to eat and brush, and most people will not notice you are wearing them.",
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
          "Once your teeth are where they should be, a custom retainer keeps them there.",
      },
    ],
    forYou: [
      "Adults who do not want metal braces at work",
      "Teens responsible enough to keep aligners in",
      "Anyone with crowding, gaps, or mild bite issues",
      "People who tried braces years ago and have shifted back",
    ],
    beforeLabel: "Before: crowded, overlapping teeth",
    afterLabel: "After: straightened, aligned smile",
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
        a: "Call us. Depending on where you are in the series, we will often have you move to the next set early or order a quick replacement. We keep your full treatment plan on file.",
      },
    ],
  },
  "emergency-dentistry": {
    slug: "emergency-dentistry",
    intro:
      "A cracked tooth, a lost crown, or a bad toothache needs to be seen quickly. We keep appointment time open every weekday for emergencies, so most patients are seen the same day they call.",
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
          "A focused exam and digital X-ray tell us exactly what is going on: a fracture, an infection, a lost filling.",
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
    beforeLabel: "Before: fractured front tooth",
    afterLabel: "After: tooth rebuilt with bonded composite",
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
        a: "Usually, yes. We intentionally hold open appointment time every weekday for emergencies. Call as early as you can and we will find you a spot.",
      },
      {
        q: "What if I do not have insurance?",
        a: "We offer CareCredit and in-house payment plans, and we will always give you the cost up front so you can make a decision without pressure.",
      },
    ],
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
