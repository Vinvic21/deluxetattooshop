// Single source of truth. Only facts confirmed from the Google Maps listing are filled in.
// If you change anything here, also update the JSON-LD block in index.html so they agree.
import sign from '../assets/sign.webp'
import counter from '../assets/shop-counter.webp'
import floor from '../assets/shop-floor.webp'
import japanese from '../assets/work-japanese.webp'
import medusa from '../assets/work-medusa.webp'
import cardinal from '../assets/work-cardinal.webp'
import lighthouse from '../assets/work-lighthouse.webp'
import statue from '../assets/work-statue.webp'
import mary from '../assets/work-mary.webp'
import portrait from '../assets/work-portrait.webp'

export const business = {
  name: 'Deluxe Tattoo',
  category: 'Tattoo shop',
  phoneDisplay: '+1 773-549-1594',
  phoneHref: 'tel:+17735491594',
  email: null, // not supplied: email link is hidden until set
  address: { street: '1459 W Irving Park Rd', city: 'Chicago', region: 'IL', postalCode: '60613' },
  hours: { time: '12 pm to 8 pm' },
}

// Booking happens on WhatsApp. Number in international format, digits only.
const WHATSAPP_NUMBER = '19367581151'
export const whatsapp = {
  display: '+1 (936) 758-1151',
  message:
    "Hello Deluxe Tattoo! I'd like to book a tattoo appointment.\n\n" +
    'Tattoo idea:\n' +
    'Placement on body:\n' +
    'Approximate size:\n' +
    'Preferred days and times:\n\n' +
    'Thank you!',
}
whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsapp.message)}`

export const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Deluxe Tattoo, 1459 W Irving Park Rd, Chicago, IL 60613')

export const images = {
  sign: { src: sign, alt: 'The Deluxe Tattoo sign: a snarling wolf head with crossed arrows on a yellow board', w: 681, h: 760 },
  counter: { src: counter, alt: 'Inside the shop: the front counter covered in colorful flash sheets', w: 681, h: 760 },
  floor: { src: floor, alt: 'Inside the shop: tattoo stations and framed art along a brick wall', w: 681, h: 760 },
}

// Styles seen in the shop's photos. OWNER TO CONFIRM before launch.
export const styles = [
  { name: 'Traditional', text: 'Bold outlines and solid color, drawn from the flash sheets that cover the shop counter.', img: { src: counter, alt: 'Rows of traditional flash sheets on the shop counter' } },
  { name: 'Japanese', text: 'Large-scale color work: clouds, flowers and mythical animals wrapped around a whole arm.', img: { src: japanese, alt: 'Japanese-style sleeve with a teal guardian lion among clouds and flowers' } },
  { name: 'Black and grey realism', text: 'Portraits and statues built from soft, smooth shading.', img: { src: medusa, alt: 'Black and grey Medusa tattoo with peonies on a forearm' } },
  { name: 'Floral and botanical', text: 'Color and fine-line plants and animals, from small pieces to full sleeves.', img: { src: cardinal, alt: 'Forearm tattoo of a red cardinal, a monarch and wildflowers' } },
  { name: 'Color illustration', text: 'Landscapes and scenes in full color, including sleeve-length compositions.', img: { src: lighthouse, alt: 'Color sleeve tattoo of a lighthouse on rocks beneath a night sky' } },
]

export const gallery = [
  { src: medusa, alt: 'Black and grey Medusa tattoo with peonies', w: 659, h: 727 },
  { src: mary, alt: 'Black and grey tattoo of a weeping woman in a veil above a sacred heart', w: 659, h: 727 },
  { src: japanese, alt: 'Japanese-style sleeve with a teal guardian lion', w: 1198, h: 573 },
  { src: statue, alt: 'Black and grey tattoo of an art deco statue holding a carriage', w: 659, h: 727 },
  { src: lighthouse, alt: 'Color lighthouse sleeve tattoo', w: 659, h: 727 },
  { src: portrait, alt: 'Black and grey portrait with a crown of thorns', w: 659, h: 727 },
  { src: cardinal, alt: 'Red cardinal and wildflower tattoo', w: 681, h: 760 },
]