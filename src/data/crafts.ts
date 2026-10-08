export interface Craft {
  slug: string
  name: string
  hindi: string
  image: string
  tagline: string
  description: string
  pieces: Array<string>
  idealFor: Array<string>
}

const crafts: Array<Craft> = [
  {
    slug: 'resin-art',
    name: 'Resin Art',
    hindi: 'रेज़िन',
    image: '/img/resin.png',
    tagline: 'Preserved petals, poured in glass-like calm.',
    description:
      'Glossy, gem-like pieces poured layer by layer, with gold leaf, pigment and real dried flowers set inside. Each pour cures for days, so no two pieces ever look the same.',
    pieces: [
      'Serving trays & platters',
      'Coasters & tea-light holders',
      'Wedding varmala & flower preservation',
      'Name plates & wall clocks',
      'Keychains, bookmarks & jewellery',
    ],
    idealFor: ['Weddings', 'Anniversaries', 'Home décor'],
  },
  {
    slug: 'mandala-art',
    name: 'Mandala Art',
    hindi: 'मंडला',
    image: '/img/mandala.png',
    tagline: 'Meditative dot by dot, line by line.',
    description:
      'Symmetrical mandalas drawn and painted by hand in fine dot work and gold detailing. They bring a quiet, balanced energy to a pooja room, an entrance or a study.',
    pieces: [
      'Round & square mandala canvases',
      'Mandala wall plates',
      'Hand-painted diyas & thalis',
      'Personalised mandala name boards',
      'Mandala journals & cards',
    ],
    idealFor: ['Pooja rooms', 'Housewarming', 'Festive gifting'],
  },
  {
    slug: 'lippan-art',
    name: 'Lippan Art',
    hindi: 'लिप्पन',
    image: '/img/lippan.png',
    tagline: 'The mirror-work heritage of Kutch, reimagined.',
    description:
      'Traditional Gujarati mud-and-mirror relief work, made in a softer, modern pastel palette. Little mirrors catch the light and make walls glow at every hour of the day.',
    pieces: [
      'Round lippan wall plates',
      'Lippan mirrors & jharokha frames',
      'Name plates for the entrance',
      'Large statement wall panels',
      'Lippan toran & festive décor',
    ],
    idealFor: ['Entrances', 'Living rooms', 'Diwali décor'],
  },
  {
    slug: 'texture-painting',
    name: 'Texture Painting',
    hindi: 'टेक्सचर',
    image: '/img/texture.png',
    tagline: 'Art you can feel beneath your fingertips.',
    description:
      'Sculpted with palette knives and textured mediums, these raised floral and abstract canvases add depth, shadow and soft drama to any modern interior.',
    pieces: [
      'Floral & lotus relief canvases',
      'Abstract neutral textures',
      'Gold-leaf accent pieces',
      'Diptych & triptych sets',
      'Custom sizes for feature walls',
    ],
    idealFor: ['Living rooms', 'Offices & cafés', 'Bedrooms'],
  },
  {
    slug: 'canvas-paintings',
    name: 'Canvas Paintings',
    hindi: 'कैनवास',
    image: '/img/canvas.png',
    tagline: 'Soft brushwork for spaces that tell a story.',
    description:
      'Original acrylic paintings, from lotus ponds and florals to Indian motifs and custom portraits of the places and moments you love.',
    pieces: [
      'Floral & botanical originals',
      'Indian motif & spiritual art',
      'Custom couple & family themes',
      'Landscape and pichwai-inspired works',
      'Mini canvases & gift sets',
    ],
    idealFor: ['Gifting', 'Home décor', 'Commissions'],
  },
  {
    slug: 'crochet',
    name: 'Crochet',
    hindi: 'क्रोशिया',
    image: '/img/crochet.png',
    tagline: 'Every stitch, looped with patience.',
    description:
      'Hand-crocheted keepsakes in soft, pastel yarns, from everlasting flower bouquets to small totes and table accents that never fade or wilt.',
    pieces: [
      'Forever flower bouquets',
      'Tote bags & pouches',
      'Coasters & table mats',
      'Hair accessories & bag charms',
      'Soft toys & baby keepsakes',
    ],
    idealFor: ["Valentine's & birthdays", 'Baby showers', 'Everyday gifting'],
  },
  {
    slug: 'gift-hampers',
    name: 'Gift Hampers',
    hindi: 'उपहार',
    image: '/img/hampers.png',
    tagline: 'Thoughtfully curated, beautifully wrapped.',
    description:
      'Curated hampers that bring Nazaakat’s handmade pieces together with candles, sweets and dry fruits, wrapped by hand for every celebration and in any quantity.',
    pieces: [
      'Diwali & Rakhi hampers',
      'Wedding & trousseau hampers',
      'Bridesmaid & return gifts',
      'Corporate gifting in bulk',
      'Birthday & baby-arrival boxes',
    ],
    idealFor: ['Festivals', 'Weddings', 'Corporate orders'],
  },
]

export default crafts

export const INSTAGRAM_HANDLE = 'nazaakatt_'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`

export function cdn(src: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=80`
}
