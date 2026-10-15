import donnaAurora from '../media/catalogo/donna/alexander-mass-4lL0v-ZwQfo-unsplash.webp'
import donnaAuroraThumb from '../media/catalogo/donna/thumbs/alexander-mass-4lL0v-ZwQfo-unsplash.webp'
import donnaCeleste from '../media/catalogo/donna/alexander-mass-IHqkx4SMTd0-unsplash.webp'
import donnaCelesteThumb from '../media/catalogo/donna/thumbs/alexander-mass-IHqkx4SMTd0-unsplash.webp'
import donnaIris from '../media/catalogo/donna/james-bold-35nWF_04Pgg-unsplash.webp'
import donnaIrisThumb from '../media/catalogo/donna/thumbs/james-bold-35nWF_04Pgg-unsplash.webp'
import donnaPerla from '../media/catalogo/donna/jennifer-kalenberg-jY-znfpA4ys-unsplash.webp'
import donnaPerlaThumb from '../media/catalogo/donna/thumbs/jennifer-kalenberg-jY-znfpA4ys-unsplash.webp'
import donnaMagnolia from '../media/catalogo/donna/jvn-mangyao-dyMPuDuyUrY-unsplash.webp'
import donnaMagnoliaThumb from '../media/catalogo/donna/thumbs/jvn-mangyao-dyMPuDuyUrY-unsplash.webp'
import donnaDalia from '../media/catalogo/donna/marina-abrosimova-S-T0FPEnGZM-unsplash.webp'
import donnaDaliaThumb from '../media/catalogo/donna/thumbs/marina-abrosimova-S-T0FPEnGZM-unsplash.webp'
import uomoVittorio from '../media/catalogo/uomo/samantha-gades-bFYoyKivbmg-unsplash.webp'
import uomoVittorioThumb from '../media/catalogo/uomo/thumbs/samantha-gades-bFYoyKivbmg-unsplash.webp'
import uomoLorenzo from '../media/catalogo/uomo/bundo-kim-ClvwtweQGB8-unsplash.webp'
import uomoLorenzoThumb from '../media/catalogo/uomo/thumbs/bundo-kim-ClvwtweQGB8-unsplash.webp'
import uomoMatteo from '../media/catalogo/uomo/jakob-owens-LtxutGEKy08-unsplash.webp'
import uomoMatteoThumb from '../media/catalogo/uomo/thumbs/jakob-owens-LtxutGEKy08-unsplash.webp'
import uomoLeonardo from '../media/catalogo/uomo/muhammad-numan-sT2gZWc0oMI-unsplash.webp'
import uomoLeonardoThumb from '../media/catalogo/uomo/thumbs/muhammad-numan-sT2gZWc0oMI-unsplash.webp'

export const catalogCategories = [
  { slug: 'donna', label: 'Donna' },
  { slug: 'uomo', label: 'Uomo' },
  { slug: 'bambino', label: 'Bambino' },
  { slug: 'accessori', label: 'Accessori' },
]

export const products = [
  {
    id: 1,
    slug: 'abito-aurora',
    name: 'Abito Aurora',
    category: 'donna',
    price: 1490,
    image: donnaAurora,
    thumbnail: donnaAuroraThumb,
    imagePosition: 'center',
    description: 'Abito lungo da cerimonia dalla linea morbida, con corpetto essenziale e gonna fluida.',
    sizes: ['38', '40', '42', '44', '46'],
    stock: 8,
  },
  {
    id: 2,
    slug: 'abito-celeste',
    name: 'Abito Celeste',
    category: 'donna',
    price: 1690,
    image: donnaCeleste,
    thumbnail: donnaCelesteThumb,
    imagePosition: 'center',
    description: 'Un modello elegante e leggero pensato per cerimonie diurne e ricevimenti estivi.',
    sizes: ['40', '42', '44', '46', '48'],
    stock: 5,
  },
  {
    id: 3,
    slug: 'abito-iris',
    name: 'Abito Iris',
    category: 'donna',
    price: 1850,
    image: donnaIris,
    thumbnail: donnaIrisThumb,
    imagePosition: 'center',
    description: 'Silhouette contemporanea con drappeggio delicato e dettagli luminosi tono su tono.',
    sizes: ['38', '40', '42', '44'],
    stock: 7,
  },
  {
    id: 4,
    slug: 'abito-perla',
    name: 'Abito Perla',
    category: 'donna',
    price: 1990,
    image: donnaPerla,
    thumbnail: donnaPerlaThumb,
    imagePosition: 'center',
    description: 'Abito da sera raffinato, costruito per valorizzare la figura con naturale eleganza.',
    sizes: ['40', '42', '44', '46'],
    stock: 4,
  },
  {
    id: 19,
    slug: 'abito-magnolia',
    name: 'Abito Magnolia',
    category: 'donna',
    price: 2290,
    image: donnaMagnolia,
    thumbnail: donnaMagnoliaThumb,
    imagePosition: 'center',
    description: 'Abito importante dalla linea ampia, impreziosito da ricami delicati e maniche eleganti.',
    sizes: ['38', '40', '42', '44', '46'],
    stock: 3,
  },
  {
    id: 20,
    slug: 'abito-dalia',
    name: 'Abito Dalia',
    category: 'donna',
    price: 2490,
    image: donnaDalia,
    thumbnail: donnaDaliaThumb,
    imagePosition: 'center',
    description: 'Una proposta scenografica con ricami luminosi e volumi morbidi, dedicata alle occasioni più speciali.',
    sizes: ['40', '42', '44', '46'],
    stock: 2,
  },
  {
    id: 5,
    slug: 'completo-vittorio',
    name: 'Completo Vittorio',
    category: 'uomo',
    price: 749,
    image: uomoVittorio,
    thumbnail: uomoVittorioThumb,
    imagePosition: '58% center',
    description: 'Completo sartoriale tre pezzi, dalla vestibilità moderna e adatto alle occasioni formali.',
    sizes: ['46', '48', '50', '52', '54'],
    stock: 6,
  },
  {
    id: 6,
    slug: 'completo-lorenzo',
    name: 'Completo Lorenzo',
    category: 'uomo',
    price: 690,
    image: uomoLorenzo,
    thumbnail: uomoLorenzoThumb,
    imagePosition: '62% center',
    description: 'Taglio asciutto, revers classico e tessuto confortevole per un’eleganza senza tempo.',
    sizes: ['46', '48', '50', '52', '54', '56'],
    stock: 9,
  },
  {
    id: 7,
    slug: 'smoking-matteo',
    name: 'Smoking Matteo',
    category: 'uomo',
    price: 890,
    image: uomoMatteo,
    thumbnail: uomoMatteoThumb,
    imagePosition: 'center',
    description: 'Smoking da cerimonia con dettagli satinati e costruzione sartoriale contemporanea.',
    sizes: ['48', '50', '52', '54'],
    stock: 3,
  },
  {
    id: 8,
    slug: 'completo-leonardo',
    name: 'Completo Leonardo',
    category: 'uomo',
    price: 790,
    image: uomoLeonardo,
    thumbnail: uomoLeonardoThumb,
    imagePosition: 'center',
    description: 'Completo formale versatile, rifinito con cura e pensato per accompagnare tutta la giornata.',
    sizes: ['46', '48', '50', '52'],
    stock: 5,
  },
  {
    id: 9,
    slug: 'sposa-bianca',
    name: 'Sposa Bianca',
    category: 'donna',
    price: 1590,
    description: 'Abito da sposa dalla linea pulita, con volumi equilibrati e una delicata lavorazione sartoriale.',
    sizes: ['40', '42', '44', '46'],
    stock: 2,
  },
  {
    id: 10,
    slug: 'sposa-luce',
    name: 'Sposa Luce',
    category: 'donna',
    price: 2190,
    description: 'Una proposta romantica e luminosa, pensata per una sposa elegante e contemporanea.',
    sizes: ['38', '40', '42', '44'],
    stock: 2,
  },
  {
    id: 11,
    slug: 'sposa-grazia',
    name: 'Sposa Grazia',
    category: 'donna',
    price: 1890,
    description: 'Corpetto definito e gonna ampia si incontrano in una silhouette classica e armoniosa.',
    sizes: ['40', '42', '44', '46'],
    stock: 1,
  },
  {
    id: 12,
    slug: 'completo-piccolo-principe',
    name: 'Completo Piccolo Principe',
    category: 'bambino',
    price: 259,
    description: 'Completo elegante e confortevole dedicato ai piccoli protagonisti delle occasioni speciali.',
    sizes: ['4 anni', '6 anni', '8 anni', '10 anni'],
    stock: 8,
  },
  {
    id: 13,
    slug: 'abito-piccola-stella',
    name: 'Abito Piccola Stella',
    category: 'bambino',
    price: 279,
    description: 'Abito da cerimonia delicato, leggero nei volumi e pratico da indossare.',
    sizes: ['4 anni', '6 anni', '8 anni', '10 anni', '12 anni'],
    stock: 6,
  },
  {
    id: 14,
    slug: 'completo-junior',
    name: 'Completo Junior',
    category: 'bambino',
    price: 289,
    description: 'Un completo dal gusto sartoriale con proporzioni studiate per il massimo comfort.',
    sizes: ['6 anni', '8 anni', '10 anni', '12 anni'],
    stock: 7,
  },
  {
    id: 15,
    slug: 'papillon-seta',
    name: 'Papillon in seta',
    category: 'accessori',
    price: 69,
    description: 'Papillon preannodato in seta, disponibile in tonalità selezionate per completare il look.',
    sizes: ['Taglia unica'],
    stock: 14,
  },
  {
    id: 16,
    slug: 'pochette-elegance',
    name: 'Pochette Elegance',
    category: 'accessori',
    price: 129,
    description: 'Pochette da cerimonia compatta con finitura luminosa e tracolla rimovibile.',
    sizes: ['Taglia unica'],
    stock: 11,
  },
  {
    id: 17,
    slug: 'cintura-gioiello',
    name: 'Cintura Gioiello',
    category: 'accessori',
    price: 110,
    description: 'Accessorio luminoso e minimale per definire il punto vita con un dettaglio prezioso.',
    sizes: ['S', 'M', 'L'],
    stock: 9,
  },
  {
    id: 18,
    slug: 'velo-armonia',
    name: 'Velo Armonia',
    category: 'accessori',
    price: 390,
    description: 'Velo leggero con bordo delicato, disegnato per completare abiti dalle linee essenziali.',
    sizes: ['Corto', 'Lungo'],
    stock: 4,
  },
]

export function formatPrice(price) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(price)
}

export function getCategoryLabel(slug) {
  return catalogCategories.find((category) => category.slug === slug)?.label ?? 'Catalogo'
}
