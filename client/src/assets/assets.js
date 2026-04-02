import cg_logo from './cg_logo.png'
import Slide1 from './Slide1.jpeg'
import Slide2 from './Slide2.jpeg'
import Slide3 from './Slide3.jpg'   
import Slide4 from './Slide4.jpg'
import Slide5 from './Slide5.jpg'
import Slide6 from './Slide6.jpg'

import dest1img from './dest1.jpg' 
import dest2img from './dest2.jpg' 
import dest3img from './dest3.jpg'
import dest4img from './dest4.jpg'
import dest1hero from './dest1hero.jpeg'
import downarrow from './downarrow.png'
// import dest2hero from './dest2hero.jpg'
// import dest3hero from './dest3hero.jpg'
// import dest4hero from './dest4hero.jpg'
import itinerarybg from './itinerarybg.png'
import plannerbg from './plannerbg.jpeg'
import contact from './contact.png'

import address from './address.png'
import call from './call.png'
import email from './email.png'

const dest = [
    {
        "id" : "ghatarani-temple",
        
        "title" :"Mata Ghatarani Temple" ,

        "img": dest1img ,

        "heroimg": dest1hero ,

        "coordinates": {
            "lat": 20.8769,
            "lng": 82.1073
        },

        "tagline": "",

        "description" : "Nestled deep within the lush green forests of Gariaband district in Chhattisgarh, the Ghatarani Mata Temple is a serene and spiritually significant destination dedicated to Goddess Durga. Surrounded by dense vegetation, rolling hills, and the soothing sounds of flowing water, the temple offers a peaceful retreat away from the chaos of city life. It is not just a place of worship, but a harmonious blend of devotion, nature, and tranquility.The temple holds great importance among local devotees, especially during the festival of Navratri, when thousands of pilgrims visit to seek blessings. During this time, the entire region comes alive with vibrant energy, devotional songs, and a strong sense of faith. The atmosphere becomes deeply spiritual, making it one of the most significant religious gatherings in the region.\n\nOne of the most captivating aspects of Ghatarani is the nearby waterfall, located just a short walk from the temple. Cascading down rocky cliffs and surrounded by thick forest, the Ghatarani Waterfall is a breathtaking sight, especially during the monsoon season. As the rains intensify, the waterfall transforms into a powerful stream, creating misty air and a refreshing environment that attracts nature lovers, photographers, and adventure seekers alike.\n\nThe journey to Ghatarani itself is an unforgettable experience. The road leading to the temple passes through scenic forest routes, offering glimpses of untouched natural beauty and a calm, refreshing atmosphere. The cool breeze, chirping birds, and greenery all around make the trip as enjoyable as the destination itself.\n\nFor visitors, Ghatarani offers a perfect combination of spiritual peace and natural exploration. Devotees can spend time in prayer at the temple, while travelers can relax by the waterfall, enjoy picnics, or simply take in the serene surroundings. It is also a great spot for short treks and nature walks, especially during the rainy and post-monsoon seasons when the landscape is at its most vibrant.\n\nThe best time to visit Ghatarani is between July and February. During the monsoon months, the waterfall is at its most powerful and visually stunning, while the winter season offers a calmer and more comfortable experience for sightseeing and relaxation.\n\nOverall, Ghatarani Mata Temple is more than just a destination — it is an experience that brings together spirituality, scenic beauty, and peaceful escape. Whether you are seeking divine blessings, a refreshing break in nature, or a quiet place to unwind, Ghatarani leaves every visitor with a sense of calm, wonder, and lasting memories."
    },
    {
        "id" : "bhoramdeo-temple",

        "title": "Bhoramdeo Temple",

        "img": dest2img,

        "coordinates": {
            "lat": 22.1073,
            "lng": 81.0338
        },

        "tagline": "The Khajuraho of Chhattisgarh",

        "description" : "Often referred to as the 'Khajuraho of Chhattisgarh', Bhoramdeo Temple stands as a remarkable testament to the region’s rich cultural and architectural heritage. Built between the 11th and 12th centuries, this ancient temple is dedicated to Lord Shiva and showcases the elegance of Nagara-style temple architecture. Its beautifully carved stone walls are adorned with intricate sculptures that reflect both spiritual symbolism and the artistic brilliance of the era.\n\nSet against the scenic backdrop of the Maikal hills and surrounded by dense greenery, the temple offers a serene and almost timeless atmosphere. The peaceful environment, combined with the detailed craftsmanship visible in every corner of the structure, makes it a captivating destination for history enthusiasts, photographers, and spiritual seekers alike.\n\nOne of the most striking aspects of Bhoramdeo is its intricate carvings, which often draw comparisons to the famous temples of Khajuraho. These sculptures not only depict mythological themes but also provide a glimpse into the lifestyle and artistic expressions of ancient India.\n\nBeyond its architectural beauty, the temple holds deep religious significance and continues to be an important center of devotion. Visitors are drawn not only by its spiritual aura but also by the opportunity to experience a perfect blend of history, nature, and tranquility in one place."
    },
    {
        "id" : "chitrakote-waterfalls",

        "title": "Chitrakote Waterfalls",

        "img": dest3img,

        "coordinates": {
            "lat": 19.2072,
            "lng": 81.6971
        },

        "tagline": "The Niagara Falls of India",

        "description": "Famously known as the 'Niagara Falls of India', Chitrakote Waterfall is the widest waterfall in the country and one of the most breathtaking natural wonders of Chhattisgarh. Located on the Indravati River in the Bastar region, the falls stretch wide across rocky cliffs, creating a stunning horseshoe-shaped cascade, especially during the monsoon season.\n\nDuring the rains, the waterfall transforms into a powerful and thunderous spectacle, with water gushing down in massive volumes, creating misty clouds and a roaring sound that can be heard from afar. In contrast, the winter months offer a calmer and more peaceful view, where the water splits into multiple streams, revealing the intricate rock formations beneath.\n\nThe surrounding landscape, filled with lush greenery and open skies, enhances the beauty of the falls, making it a perfect destination for nature lovers, photographers, and travelers seeking a refreshing escape. The viewpoint areas and nearby spots allow visitors to fully experience the scale and grandeur of the waterfall.\n\nBeyond its visual appeal, Chitrakote also offers activities like boating (in safer seasons) and exploring nearby tribal regions, giving visitors a deeper connection to the local culture of Bastar. Whether visited during the monsoon for its raw power or in winter for its serene charm, Chitrakote promises an unforgettable experience."
    },
    {
        "id" : "rajiv-lochan-temple",

        "title": "Rajiv Lochan Temple",

        "img": dest4img ,   

        "coordinates": {
            "lat": 20.9658,
            "lng": 82.3143
        },

        "tagline": "Spiritual heart of Chhattisgarh",

        "description": "Rajiv Lochan Temple, also known as the 'Eye of Rajiv', is a sacred site located in the heart of Chhattisgarh. This ancient temple is dedicated to Lord Vishnu and is renowned for its unique architecture and spiritual significance. The temple's name derives from the legend of King Rajiv, who is said to have discovered the divine presence here.\n\nThe temple features intricate carvings and a serene ambiance that attracts devotees and tourists alike. Surrounded by lush greenery and natural beauty, it offers a peaceful retreat for those seeking spiritual solace and a deeper connection with the divine.\n\nVisitors to Rajiv Lochan Temple can witness traditional rituals and ceremonies, adding to the cultural richness of the experience. The site also provides an opportunity to explore the region's history and understand the deep-rooted traditions associated with this revered place of worship."

    }
    ,
    {
        "id": "sirpur",

        "title": "Sirpur Archaeological Site",

        "img": dest2img,

        "heroimg": dest2img,

        "coordinates": {
            "lat": 20.2794,
            "lng": 82.1578
        },

        "tagline": "Ancient heritage on the banks of the Mahanadi",

        "description": "Sirpur is one of the most important archaeological sites in Chhattisgarh, known for its ancient temples, Buddhist remains, and rich historical significance. Once a thriving cultural and political center, the site reveals layers of history through beautifully preserved ruins, sculpted stone structures, and excavations that continue to attract historians and travelers alike.\n\nThe village sits along the Mahanadi River, giving the entire area a quiet and reflective atmosphere that suits its heritage character. Visitors can explore remnants of old temples, monastic complexes, and intricate carvings that showcase the artistic and religious diversity of early India.\n\nSirpur is especially appealing for travelers who enjoy history, architecture, and offbeat destinations. It offers a calm experience away from busy city life, with enough depth to make even a short visit meaningful."
    },
    {
        "id": "kanger-valley-national-park",

        "title": "Kanger Valley National Park",

        "img": dest3img,

        "heroimg": dest3img,

        "coordinates": {
            "lat": 18.9470,
            "lng": 81.9785
        },

        "tagline": "A dense green wilderness of Bastar",

        "description": "Kanger Valley National Park is one of the most scenic and ecologically important forest landscapes in Bastar. Known for its thick sal forests, limestone caves, waterfalls, and rich biodiversity, the park is a favorite destination for nature lovers and adventure seekers.\n\nThe park is home to a variety of wildlife, birds, butterflies, and rare plant species, making it a valuable conservation area as well as a beautiful tourist spot. Popular attractions within and around the park include Tirathgarh Waterfall, Kutumsar Cave, and Kailash Gufa, each offering a different kind of natural experience.\n\nVisitors can enjoy forest drives, guided exploration, and peaceful views of untouched greenery. Kanger Valley is best visited during the cooler months, when the forest trails are comfortable and the scenery is at its most inviting."
    },
    {
        "id": "danteshwari-temple",

        "title": "Danteshwari Temple",

        "img": dest4img,

        "heroimg": dest4img,

        "coordinates": {
            "lat": 19.0059,
            "lng": 81.4316
        },

        "tagline": "A sacred Shakti Peeth of Bastar",

        "description": "Danteshwari Temple is one of the most revered religious sites in Bastar and is considered a major Shakti Peeth in the region. Dedicated to Goddess Danteshwari, the temple holds deep spiritual importance for devotees from across Chhattisgarh and neighboring states.\n\nThe temple architecture reflects traditional regional craftsmanship, while the atmosphere around the complex remains deeply devotional and culturally vibrant. During festivals, especially Bastar Dussehra, the temple becomes a focal point of rituals, processions, and community celebrations that highlight the living traditions of the region.\n\nFor visitors, Danteshwari Temple offers both a spiritual experience and a glimpse into Bastar's strong cultural identity. It is one of those places where faith, history, and local heritage come together naturally."
    },
    {
        "id": "tirathgarh-waterfall",

        "title": "Tirathgarh Waterfall",

        "img": dest1img,

        "heroimg": dest1hero,

        "coordinates": {
            "lat": 18.9738,
            "lng": 81.9990
        },

        "tagline": "A stepped waterfall hidden in the forest",

        "description": "Tirathgarh Waterfall is one of Bastar's most beautiful natural attractions, known for its white cascading streams that fall over multiple rocky levels. Surrounded by thick forest and rocky terrain, the waterfall creates a refreshing and scenic escape, especially after the monsoon when the water flow is strongest.\n\nThe site is ideal for photography, short nature walks, and relaxed visits with family or friends. The combination of forest sounds, misty water, and rugged landscape gives Tirathgarh a calm but dramatic character.\n\nIt is often visited together with Kanger Valley National Park, making it a strong addition to any Bastar travel plan. The best time to visit is from October to February, when the weather is pleasant and the surroundings are lush."
    }
]

export default {cg_logo, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, itinerarybg, plannerbg, dest, downarrow, contact, address, call, email}