// SAMPLE REVIEWS: replace these with real reviews (copied word for word from
// the practice's Google profile, with first name and last initial) before the
// site goes live. Portraits are self-hosted stock placeholders in
// public/images/reviews; swap in real reviewer photos (with consent) or remove.

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const portrait = (slug: string) => `${BASE_PATH}/images/reviews/${slug}.webp`;

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
    location: "Sacramento",
    rating: 5,
    timeAgo: "2 weeks ago",
    service: "general-dentistry",
    image: portrait("sarah-m"),
  },
  {
    quote: "Got a crown done in one visit with their CEREC machine. Walked in at noon, walked out at 2:30 with a permanent crown. That's just not something you expect from a dental office in Sacramento.",
    name: "David R.",
    location: "Folsom",
    rating: 5,
    timeAgo: "1 month ago",
    service: "general-dentistry",
    image: portrait("david-r"),
  },
  {
    quote: "Switched to Brightside after my old dentist retired. Jordan in the front office went through my insurance line by line and found coverage I didn't know I had. Never felt pushed into anything.",
    name: "Marisol G.",
    location: "Sacramento",
    rating: 5,
    timeAgo: "3 weeks ago",
    service: "general-dentistry",
    image: portrait("marisol-g"),
  },
  {
    quote: "Brought all three of my kids here and the team was incredible. My youngest is terrified of doctors but the hygienist had her laughing within five minutes. They never try to upsell you.",
    name: "Anthony P.",
    location: "Elk Grove",
    rating: 5,
    timeAgo: "1 month ago",
    service: "general-dentistry",
    image: portrait("anthony-p"),
  },
  {
    quote: "Chipped a front tooth the day before a wedding and they fit me in same-day. You honestly cannot tell anything ever happened. The whole team clearly takes pride in their work.",
    name: "Priya N.",
    location: "Sacramento",
    rating: 5,
    timeAgo: "2 months ago",
    service: "emergency-dentistry",
    image: portrait("priya-n"),
  },
  {
    quote: "Best dental experience I've had in 40 years. Honest about what I needed and what could wait. The office is spotless and runs exactly on time. I've never sat in the waiting room more than a couple minutes.",
    name: "Robert K.",
    location: "Roseville",
    rating: 5,
    timeAgo: "1 week ago",
    service: "general-dentistry",
    image: portrait("robert-k"),
  },
  {
    quote: "Got veneers done before my wedding and I was terrified they'd look fake. They showed me a digital mockup first so I knew exactly what I'd end up with. My husband didn't even realize I'd had work done. He just said I looked happy.",
    name: "Jenna T.",
    location: "Sacramento",
    rating: 5,
    timeAgo: "3 months ago",
    service: "cosmetic-dentistry",
    image: portrait("jenna-t"),
  },
  {
    quote: "Chipped my front tooth on a beer bottle of all things. They fixed it with bonding in under an hour and it matches perfectly. Nobody has ever guessed which tooth it was.",
    name: "Marcus D.",
    location: "Elk Grove",
    rating: 5,
    timeAgo: "5 months ago",
    service: "cosmetic-dentistry",
    image: portrait("marcus-d"),
  },
  {
    quote: "Did a full smile makeover (whitening and bonding on a few teeth). The preview they showed me beforehand ended up looking almost identical to how it actually turned out. Not a single surprise.",
    name: "Lauren B.",
    location: "Roseville",
    rating: 5,
    timeAgo: "6 weeks ago",
    service: "cosmetic-dentistry",
    image: portrait("lauren-b"),
  },
  {
    quote: "Lost a molar to an old root canal that finally failed. They walked me through the cone-beam scan on screen before doing anything, so I actually understood what an implant involves. A year later it just feels like my own tooth.",
    name: "Tom H.",
    location: "Folsom",
    rating: 5,
    timeAgo: "4 months ago",
    service: "dental-implants",
    image: portrait("tom-h"),
  },
  {
    quote: "Needed two implants after years of gum issues and was dreading the cost. Jordan laid out a written estimate with financing before we scheduled anything, so there were no surprises halfway through.",
    name: "Carol S.",
    location: "Sacramento",
    rating: 5,
    timeAgo: "2 months ago",
    service: "dental-implants",
    image: portrait("carol-s"),
  },
  {
    quote: "Broke a tooth in a bike accident and needed an implant to replace it. Dr. Chen explained every step before it happened, including exactly how long healing would take. Nothing caught me off guard, and it looks completely natural.",
    name: "Frank M.",
    location: "West Sacramento",
    rating: 5,
    timeAgo: "7 months ago",
    service: "dental-implants",
    image: portrait("frank-m"),
  },
  {
    quote: "My daughter did Invisalign here as a teenager. They showed us a simulation of how her teeth would move before we committed to anything, and she finished a full month ahead of schedule.",
    name: "Emily R.",
    location: "Sacramento",
    rating: 5,
    timeAgo: "8 months ago",
    service: "invisalign",
    image: portrait("emily-r"),
  },
  {
    quote: "Did Invisalign as an adult for crowding I'd had since college. Nobody at work even noticed I was wearing them. The final result matched the simulation almost exactly, which I didn't expect.",
    name: "Nathan K.",
    location: "Victor",
    rating: 5,
    timeAgo: "3 weeks ago",
    service: "invisalign",
    image: portrait("nathan-k"),
  },
  {
    quote: "My teeth had shifted back after braces in high school. They gave me a realistic timeline upfront instead of overpromising, and it took almost exactly as long as they said it would.",
    name: "Sophia L.",
    location: "Acampo",
    rating: 5,
    timeAgo: "5 weeks ago",
    service: "invisalign",
    image: portrait("sophia-l"),
  },
  {
    quote: "Cracked a molar on a Friday night and was in real pain all weekend. They got me in first thing Monday and the pain was gone before I even left the chair.",
    name: "Diego P.",
    location: "Sacramento",
    rating: 5,
    timeAgo: "1 month ago",
    service: "emergency-dentistry",
    image: portrait("diego-p"),
  },
  {
    quote: "Lost a filling driving back from a trip and called in a bit of a panic. They saw me the same afternoon and had it repaired before I had to be back at work.",
    name: "Rachel N.",
    location: "Elk Grove",
    rating: 5,
    timeAgo: "2 months ago",
    service: "emergency-dentistry",
    image: portrait("rachel-n"),
  },
  {
    quote: "Broke a front tooth in a fall and was pretty shaken up about it. They stabilized it that same afternoon, then finished the permanent repair a few days later. Could not have made a stressful day easier.",
    name: "Bill O.",
    location: "Folsom",
    rating: 5,
    timeAgo: "10 months ago",
    service: "emergency-dentistry",
    image: portrait("bill-o"),
  },
];
