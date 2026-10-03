/**
 * Centralized image configuration. Placeholder photos are sourced from Unsplash
 * (free license) and self-hosted as WebP under public/images so pages don't
 * depend on a third-party CDN or ship oversized originals.
 * Replace with real practice photos before launch.
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const IMAGES = {
  // Root-relative on purpose: Next resolves metadata URLs against metadataBase,
  // which already includes the GitHub Pages sub-path.
  ogImage: {
    src: "/og-image.jpg",
    alt: "Brightside Dental modern treatment room with natural light",
    width: 1200,
    height: 630,
  },

  team: {
    drChen: {
      src: `${BASE_PATH}/images/team/angela-chen.webp`,
      alt: "Dr. Angela Chen, Lead Dentist and Founder",
      width: 800,
      height: 533,
    },
    mariaReyes: {
      src: `${BASE_PATH}/images/team/maria-reyes.webp`,
      alt: "Maria Reyes, Lead Dental Hygienist",
      width: 800,
      height: 1200,
    },
    jordanTran: {
      src: `${BASE_PATH}/images/team/jordan-tran.webp`,
      alt: "Jordan Tran, Patient Care Coordinator",
      width: 800,
      height: 1200,
    },
  },

  // `src` is 1600px for full-bleed backgrounds; `thumb` is 800px for grid tiles.
  office: {
    reception: {
      src: `${BASE_PATH}/images/office/reception.webp`,
      thumb: `${BASE_PATH}/images/office/reception-thumb.webp`,
      alt: "Front desk coordinator greeting a patient at check-in",
      width: 1600,
      height: 1067,
    },
    treatmentRoom: {
      src: `${BASE_PATH}/images/office/treatment-room.webp`,
      thumb: `${BASE_PATH}/images/office/treatment-room-thumb.webp`,
      alt: "Clean and modern treatment room",
      width: 1600,
      height: 1070,
    },
    consultation: {
      src: `${BASE_PATH}/images/office/consultation.webp`,
      thumb: `${BASE_PATH}/images/office/consultation-thumb.webp`,
      alt: "Dentist reviewing a smile design on screen with a patient",
      width: 1600,
      height: 1067,
    },
    imaging: {
      src: `${BASE_PATH}/images/office/imaging.webp`,
      thumb: `${BASE_PATH}/images/office/imaging-thumb.webp`,
      alt: "Dentist walking a patient through a digital scan of her teeth",
      width: 1600,
      height: 1067,
    },
    equipment: {
      src: `${BASE_PATH}/images/office/equipment.webp`,
      thumb: `${BASE_PATH}/images/office/equipment-thumb.webp`,
      alt: "Modern treatment room with a dental chair and digital display",
      width: 1600,
      height: 1067,
    },
    waiting: {
      src: `${BASE_PATH}/images/office/waiting.webp`,
      thumb: `${BASE_PATH}/images/office/waiting-thumb.webp`,
      alt: "Bright patient lounge with an indoor tree and built-in seating",
      width: 1600,
      height: 1067,
    },
    smile1: {
      src: `${BASE_PATH}/images/office/smile-1.webp`,
      thumb: `${BASE_PATH}/images/office/smile-1-thumb.webp`,
      alt: "Woman laughing with a bright, natural smile",
      width: 1600,
      height: 1067,
    },
    smile2: {
      src: `${BASE_PATH}/images/office/smile-2.webp`,
      thumb: `${BASE_PATH}/images/office/smile-2-thumb.webp`,
      alt: "Dentist chatting with a relaxed patient before a checkup",
      width: 1600,
      height: 1067,
    },
  },

  // Self-hosted in public/images/services (sourced from Unsplash, free license).
  services: {
    general: {
      src: `${BASE_PATH}/images/services/general-dentistry.webp`,
      card: `${BASE_PATH}/images/services/general-dentistry-card.webp`,
      alt: "Hygienist examining a smiling patient's teeth during a routine checkup",
      width: 1600,
      height: 1067,
    },
    cosmetic: {
      src: `${BASE_PATH}/images/services/cosmetic-dentistry.webp`,
      card: `${BASE_PATH}/images/services/cosmetic-dentistry-card.webp`,
      alt: "Close-up of a bright, natural-looking smile after cosmetic treatment",
      width: 1600,
      height: 1280,
    },
    implants: {
      src: `${BASE_PATH}/images/services/dental-implants.webp`,
      card: `${BASE_PATH}/images/services/dental-implants-card.webp`,
      alt: "Gloved hand holding a titanium dental implant with a porcelain crown",
      width: 1600,
      height: 1200,
    },
    invisalign: {
      src: `${BASE_PATH}/images/services/invisalign.webp`,
      card: `${BASE_PATH}/images/services/invisalign-card.webp`,
      alt: "Woman fitting a clear aligner over her teeth",
      width: 1600,
      height: 1200,
    },
    emergency: {
      src: `${BASE_PATH}/images/services/emergency-dentistry.webp`,
      card: `${BASE_PATH}/images/services/emergency-dentistry-card.webp`,
      alt: "Woman holding a cold compress to her cheek for a toothache",
      width: 1600,
      height: 1067,
    },
  },

  // Real clinical cases from Wikimedia Commons, cropped into aligned 16:10
  // pairs (1200x750). CC BY and CC BY-SA require the credit to stay visible.
  // Replace with the practice's own consented patient photos before launch.
  beforeAfter: {
    "general-dentistry": {
      before: `${BASE_PATH}/images/before-after/general-dentistry-before.webp`,
      after: `${BASE_PATH}/images/before-after/general-dentistry-after.webp`,
      credit: {
        author: "Onetimeuseaccount",
        license: "CC0",
        href: "https://commons.wikimedia.org/wiki/File:Gingivitis-before-and-after-3.jpg",
      },
    },
    "cosmetic-dentistry": {
      before: `${BASE_PATH}/images/before-after/cosmetic-dentistry-before.webp`,
      after: `${BASE_PATH}/images/before-after/cosmetic-dentistry-after.webp`,
      credit: {
        author: "Yvul",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Faccette_estetiche_confronto_prima_e_dopo.jpg",
      },
    },
    "dental-implants": {
      before: `${BASE_PATH}/images/before-after/dental-implants-before.webp`,
      after: `${BASE_PATH}/images/before-after/dental-implants-after.webp`,
      credit: {
        author: "GrupoMedicodental",
        license: "CC BY 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Caso_real_implantes_dentales_jesus_palma_ortiz_1.jpg",
      },
    },
    invisalign: {
      before: `${BASE_PATH}/images/before-after/invisalign-before.webp`,
      after: `${BASE_PATH}/images/before-after/invisalign-after.webp`,
      credit: {
        license: "public domain",
        href: "https://commons.wikimedia.org/wiki/File:Dental_patient_pre-_and_post-alignment.jpg",
      },
    },
    "emergency-dentistry": {
      before: `${BASE_PATH}/images/before-after/emergency-dentistry-before.webp`,
      after: `${BASE_PATH}/images/before-after/emergency-dentistry-after.webp`,
      credit: {
        author: "Bin im Garten",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Zahnfraktur_Zahn_21_2017-11-05_02.JPG",
      },
    },
  } as Record<string, BeforeAfterPhotos>,
};

export interface BeforeAfterPhotos {
  before: string;
  after: string;
  credit: { author?: string; license: string; href: string };
}
