// Cropped Unsplash portrait headshots (96px, face-centered). Remote pattern is
// whitelisted in next.config.mjs. Reused across reviews since these are
// placeholder photos — replace with real patient photos (with consent) before launch.
const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80`;

const AVATAR_IDS = [
  "photo-1544005313-94ddf0286df2",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1438761681033-6461ffad8d80",
  "photo-1500648767791-00dcc994a43e",
  "photo-1534528741775-53994a69daeb",
  "photo-1472099645785-5658abf4ff4e",
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
  timeAgo: string;
  service: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I've been putting off dental work for years because of anxiety. Dr. Chen made the whole thing calm and judgment-free. I actually look forward to coming in now, which is something I never thought I'd say about a dentist.",
    name: "Sarah M.",
    location: "Lodi",
    rating: 5,
    timeAgo: "2 weeks ago",
    service: "general-dentistry",
    image: avatar(AVATAR_IDS[0]),
  },
  {
    quote: "Got a crown done in one visit with their CEREC machine. Walked in at noon, walked out at 2:30 with a permanent crown. That's just not something you expect from a dental office in Lodi.",
    name: "David R.",
    location: "Woodbridge",
    rating: 5,
    timeAgo: "1 month ago",
    service: "general-dentistry",
    image: avatar(AVATAR_IDS[1]),
  },
  {
    quote: "Switched to Brightside after my old dentist retired. Jordan in the front office went through my insurance line by line and found coverage I didn't know I had. Zero pressure to do anything.",
    name: "Marisol G.",
    location: "Lodi",
    rating: 5,
    timeAgo: "3 weeks ago",
    service: "general-dentistry",
    image: avatar(AVATAR_IDS[2]),
  },
  {
    quote: "Brought all three of my kids here and the team was incredible. My youngest is terrified of doctors but the hygienist had her laughing within five minutes. They never try to upsell you.",
    name: "Anthony P.",
    location: "Stockton",
    rating: 5,
    timeAgo: "1 month ago",
    service: "general-dentistry",
    image: avatar(AVATAR_IDS[3]),
  },
  {
    quote: "Chipped a front tooth the day before a wedding and they fit me in same-day. You honestly cannot tell anything ever happened. The whole team clearly takes pride in their work.",
    name: "Priya N.",
    location: "Lodi",
    rating: 5,
    timeAgo: "2 months ago",
    service: "emergency-dentistry",
    image: avatar(AVATAR_IDS[4]),
  },
  {
    quote: "Best dental experience I've had in 40 years. Honest about what I needed and what could wait. The office is spotless and runs exactly on time — I've never sat in the waiting room more than a couple minutes.",
    name: "Robert K.",
    location: "Galt",
    rating: 5,
    timeAgo: "1 week ago",
    service: "general-dentistry",
    image: avatar(AVATAR_IDS[5]),
  },
  {
    quote: "Got veneers done before my wedding and I was terrified they'd look fake. They showed me a digital mockup first so I knew exactly what I'd end up with. My husband didn't even realize I'd had work done — he just said I looked happy.",
    name: "Jenna T.",
    location: "Lodi",
    rating: 5,
    timeAgo: "3 months ago",
    service: "cosmetic-dentistry",
    image: avatar(AVATAR_IDS[0]),
  },
  {
    quote: "Chipped my front tooth on a beer bottle of all things. They fixed it with bonding in under an hour and it matches perfectly. Nobody has ever guessed which tooth it was.",
    name: "Marcus D.",
    location: "Stockton",
    rating: 5,
    timeAgo: "5 months ago",
    service: "cosmetic-dentistry",
    image: avatar(AVATAR_IDS[1]),
  },
  {
    quote: "Did a full smile makeover — whitening and bonding on a few teeth. The preview they showed me beforehand ended up looking almost identical to how it actually turned out. Not a single surprise.",
    name: "Lauren B.",
    location: "Galt",
    rating: 5,
    timeAgo: "6 weeks ago",
    service: "cosmetic-dentistry",
    image: avatar(AVATAR_IDS[2]),
  },
  {
    quote: "Lost a molar to an old root canal that finally failed. They walked me through the cone-beam scan on screen before doing anything, so I actually understood what an implant involves. A year later it just feels like my own tooth.",
    name: "Tom H.",
    location: "Woodbridge",
    rating: 5,
    timeAgo: "4 months ago",
    service: "dental-implants",
    image: avatar(AVATAR_IDS[3]),
  },
  {
    quote: "Needed two implants after years of gum issues and was dreading the cost. Jordan laid out a written estimate with financing before we scheduled anything, so there were no surprises halfway through.",
    name: "Carol S.",
    location: "Lodi",
    rating: 5,
    timeAgo: "2 months ago",
    service: "dental-implants",
    image: avatar(AVATAR_IDS[4]),
  },
  {
    quote: "Broke a tooth in a bike accident and needed an implant to replace it. Dr. Chen explained every step before it happened, including exactly how long healing would take. Zero surprises, and it looks completely natural.",
    name: "Frank M.",
    location: "Lockeford",
    rating: 5,
    timeAgo: "7 months ago",
    service: "dental-implants",
    image: avatar(AVATAR_IDS[5]),
  },
  {
    quote: "My daughter did Invisalign here as a teenager. They showed us a simulation of how her teeth would move before we committed to anything, and she finished a full month ahead of schedule.",
    name: "Emily R.",
    location: "Lodi",
    rating: 5,
    timeAgo: "8 months ago",
    service: "invisalign",
    image: avatar(AVATAR_IDS[0]),
  },
  {
    quote: "Did Invisalign as an adult for crowding I'd had since college. Nobody at work even noticed I was wearing them. The final result matched the simulation almost exactly, which I didn't expect.",
    name: "Nathan K.",
    location: "Victor",
    rating: 5,
    timeAgo: "3 weeks ago",
    service: "invisalign",
    image: avatar(AVATAR_IDS[1]),
  },
  {
    quote: "My teeth had shifted back after braces in high school. They gave me a realistic timeline upfront instead of overpromising, and it took almost exactly as long as they said it would.",
    name: "Sophia L.",
    location: "Acampo",
    rating: 5,
    timeAgo: "5 weeks ago",
    service: "invisalign",
    image: avatar(AVATAR_IDS[2]),
  },
  {
    quote: "Cracked a molar on a Friday night and was in real pain all weekend. They got me in first thing Monday and the pain was gone before I even left the chair.",
    name: "Diego P.",
    location: "Lodi",
    rating: 5,
    timeAgo: "1 month ago",
    service: "emergency-dentistry",
    image: avatar(AVATAR_IDS[3]),
  },
  {
    quote: "Lost a filling driving back from a trip and called in a bit of a panic. They saw me the same afternoon and had it repaired before I had to be back at work.",
    name: "Rachel N.",
    location: "Stockton",
    rating: 5,
    timeAgo: "2 months ago",
    service: "emergency-dentistry",
    image: avatar(AVATAR_IDS[4]),
  },
  {
    quote: "Broke a front tooth in a fall and was pretty shaken up about it. They stabilized it that same afternoon, then finished the permanent repair a few days later. Could not have made a stressful day easier.",
    name: "Bill O.",
    location: "Woodbridge",
    rating: 5,
    timeAgo: "10 months ago",
    service: "emergency-dentistry",
    image: avatar(AVATAR_IDS[5]),
  },
];
