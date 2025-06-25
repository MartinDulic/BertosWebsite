import Flyer8Banner from '../../assets/boats/flyer8/Flyer8Title.webp'
import Flyer8_1 from '../../assets/boats/flyer8/Flyer8_1.webp'
import Flyer8_2 from '../../assets/boats/flyer8/Flyer8_2.webp'
import Flyer8_3 from '../../assets/boats/flyer8/Flyer8_3.webp'
import Flyer8_4 from '../../assets/boats/flyer8/Flyer8_4.webp'
import Flyer8_5 from '../../assets/boats/flyer8/Flyer8_5.webp'

import Cap9Banner from '../../assets/boats/cap9/cap9banner.webp'
import Cap9_1 from '../../assets/boats/cap9/cap9_1.webp'
import Cap9_2 from '../../assets/boats/cap9/cap9_2.webp'
import Cap9_3 from '../../assets/boats/cap9/cap9_3.webp'
import Cap9_4 from '../../assets/boats/cap9/cap9_4.webp'
import Cap9_5 from '../../assets/boats/cap9/cap9_5.webp'
import Cap9_6 from '../../assets/boats/cap9/cap9_6.webp'
import Cap9_7 from '../../assets/boats/cap9/cap9_7.webp'
import Cap9_8 from '../../assets/boats/cap9/cap9_8.webp'

import AdriaM500Banner from '../../assets/boats/adriaM500/AdriaM500Banner.webp'
import AdriaM500_1 from '../../assets/boats/adriaM500/AdriaM500_1.webp'
import AdriaM500_2 from '../../assets/boats/adriaM500/AdriaM500_2.webp'
import AdriaM500_3 from '../../assets/boats/adriaM500/AdriaM500_3.webp'
import AdriaM500_4 from '../../assets/boats/adriaM500/AdriaM500_4.webp'

import Quicksilver675Banner from '../../assets/boats/quicksilver675/quicksilver675Banner.webp'
import Quicksilver675_1 from '../../assets/boats/quicksilver675/quicksilver675_1.webp'
import Quicksilver675_2 from '../../assets/boats/quicksilver675/quicksilver675_2.webp'
import Quicksilver675_3 from '../../assets/boats/quicksilver675/quicksilver675_3.webp'
import Quicksilver675_4 from '../../assets/boats/quicksilver675/quicksilver675_4.webp'
import Quicksilver675_5 from '../../assets/boats/quicksilver675/quicksilver675_5.webp'
import Quicksilver675_6 from '../../assets/boats/quicksilver675/quicksilver675_6.webp'
import Quicksilver675_7 from '../../assets/boats/quicksilver675/quicksilver675_7.webp'
import Quicksilver675_8 from '../../assets/boats/quicksilver675/quicksilver675_8.webp'
import Quicksilver675_9 from '../../assets/boats/quicksilver675/quicksilver675_9.webp'

import Cap625Banner from '../../assets/boats/cap625/cap625Banner.webp'
import Cap625_1 from '../../assets/boats/cap625/cap625_1.webp'
import Cap625_2 from '../../assets/boats/cap625/cap625_2.webp'
import Cap625_3 from '../../assets/boats/cap625/cap625_3.webp'
import Cap625_4 from '../../assets/boats/cap625/cap625_4.webp'
import Cap625_5 from '../../assets/boats/cap625/cap625_5.webp'
import Cap625_6 from '../../assets/boats/cap625/cap625_6.webp'
import Cap625_7 from '../../assets/boats/cap625/cap625_7.webp'
import Cap625_8 from '../../assets/boats/cap625/cap625_8.webp'

import Quicksilver605Banner from '../../assets/boats/quicksilver605/quicksilver605Banner.webp'
import Quicksilver605_1 from '../../assets/boats/quicksilver605/quicksilver605_1.webp'
import Quicksilver605_2 from '../../assets/boats/quicksilver605/quicksilver605_2.webp'
import Quicksilver605_4 from '../../assets/boats/quicksilver605/quicksilver605_4.webp'
import Quicksilver605_5 from '../../assets/boats/quicksilver605/quicksilver605_5.webp'
import Quicksilver605_6 from '../../assets/boats/quicksilver605/quicksilver605_6.webp'
import Quicksilver605_7 from '../../assets/boats/quicksilver605/quicksilver605_7.webp'


const quicksilver675OpenImages = [Quicksilver675_1, Quicksilver675_2, Quicksilver675_3, Quicksilver675_4, Quicksilver675_5, Quicksilver675_6, Quicksilver675_7, Quicksilver675_8, Quicksilver675_9];
const capCamarat625WaImages = [Cap625_1, Cap625_2, Cap625_3, Cap625_4, Cap625_5, Cap625_6, Cap625_7, Cap625_8];
const capCamarat902SeriesImages = [Cap9Banner, Cap9_1, Cap9_2, Cap9_3, Cap9_4, Cap9_5, Cap9_6, Cap9_7, Cap9_8,];
const beneteauFlyer8Images = [Flyer8Banner, Flyer8_1, Flyer8_2, Flyer8_3, Flyer8_4, Flyer8_5];
const quicksilver605OpenImages = [Quicksilver605Banner, Quicksilver605_1, Quicksilver605_2, Quicksilver605_4, Quicksilver605_5, Quicksilver605_6, Quicksilver605_7];
const adriaMSport500Images = [AdriaM500Banner, AdriaM500_1, AdriaM500_2, AdriaM500_3, AdriaM500_4];


const boats = [
    {
        id: 1,
        name: "Quicksilver 675 Open",
        bannerImage: Quicksilver675Banner,
        images: quicksilver675OpenImages,
        specs: ["Lenght: 6.75m", "Widht: 2.6m","Engine: 150hp Mercury","Capacity: 9","Fuek tank: 140L","Year: 2025","Cruise speed: 24kn","Max speed: 43kn"],
        equipment: ["Life Jacket", "Anchor", "GPS navigation"],
        prices: [
            {from: "April 1", to: "May 31", price: "300"},
            {from: "June 1", to: "June 30", price: "340"},
            {from: "July 1", to: "September 6", price: "350"},
            {from: "September 7", to: "May 30", price: "320"},
            {from: "October 1", to: "December 31", price: "300"},
        ],
        desc: [
            { bold: false, text: "The " },
            { bold: true, text: "Quicksilver 675 Open " },
            { bold: false, text: "with a " },
            { bold: true, text: "Mercury 150 horsepower engine " },
            { bold: false, text: "is the perfect boat for those seeking a mix of performance, comfort, and versatility. This boat is designed to provide an exceptional experience on the water, whether you're cruising along the coastline, enjoying a day of fishing, or heading out for an adventurous ride." },
            { endl: true },
            { bold: false, text: "With a top speed of 40 knots and a cruising speed of around 22 knots, the " },
            { bold: true, text: "Quicksilver 675 Open " },
            { bold: false, text: "delivers both power and efficiency. The " },
            { bold: true, text: "Mercury 150 HP engine " },
            { bold: false, text: "ensures a smooth ride, cutting through waves with ease and providing excellent fuel economy for longer trips. The spacious layout accommodates up to 8 people, offering ample seating and plenty of space to relax or enjoy the sun." },
            { endl: true },
            { bold: false, text: "Whether you're exploring hidden coves or cruising across open waters, the " },
            { bold: true, text: "Quicksilver 675 Open " },
            { bold: false, text: "promises a thrilling yet comfortable experience, making it the ideal choice for day trips and outdoor adventures." },
        ],
    },
    {
        id: 2,
        name: "Cap Camarat 625 WA",
        bannerImage: Cap625Banner,
        images: capCamarat625WaImages,
        specs: ["Lenght: 6.25m", "Width: 2.48m","Engine: 150hp mercury","Capacity: 7","Fuel tank: 140L","Year: 2023","Cruise speed: 23kn","Max speed: 42kn"],
        equipment: ["Life Jacket", "Anchor", "GPS navigation"],
        prices: [
            {from: "April 1", to: "May 31", price: "300"},
            {from: "June 1", to: "June 30", price: "340"},
            {from: "July 1", to: "September 6", price: "350"},
            {from: "September 7", to: "May 30", price: "320"},
            {from: "October 1", to: "December 31", price: "300"},
        ],
        desc: [
            { bold: false , text: "The "},
            { bold: true, text: "Cap Camarat 625 WA" },
            { bold: false, text: " is one of the best day cruisers you can get, offering a perfect balance of speed, comfort, and efficiency. Our boat is powered by a " },
            { bold: true, text: "Yamaha 150 horsepower engine " },
            { bold: false, text: ", delivering impressive performance on the water. With a maximum speed of 40 knots and a comfortable travel speed of 23 knots, it provides a thrilling yet smooth ride, even in choppy waters." },
            { endl: true },
            { bold: false, text: "Designed to handle waves effortlessly, the " },
            { bold: true, text: "Cap Camarat 625 WA" },
            { bold: false, text: " offers great stability and comfort, making it perfect for long day trips or exploring coastal areas. It comfortably accommodates up to 7 people, with a spacious cockpit and a cabin for relaxation, making it an ideal choice for family outings, fishing, or cruising with friends. Whether you're navigating calm bays or venturing out to more challenging waters, this boat ensures a memorable and enjoyable experience every time." },
        ],

    },
    {
        id: 3,
        name: "Cap Camarat 9.0 2 Series",
        bannerImage: Cap9Banner,
        images: capCamarat902SeriesImages,
        specs: ["Lenght: 9.12m","Width: 3m","Engine: X2 Suzuki 250hp","Capacity: 10","Fuel tank: 2x 200l","Year: 2024","Cruise speed: 27kn","Max speed: 50kn"],
        equipment: ["Life Jacket", "Anchor", "GPS navigation"],
        prices: [
            {from: "April 1", to: "May 31", price: "300"},
            {from: "June 1", to: "June 30", price: "340"},
            {from: "July 1", to: "September 6", price: "350"},
            {from: "September 7", to: "May 30", price: "320"},
            {from: "October 1", to: "December 31", price: "300"},
        ],
        desc: [
            {bold: false, text: "The "},
            {bold: true, text: "Cap Camarat 9.0 2 Series "},
            {bold: false, text: "with "},
            {bold: true, text: "two 250 horsepower Suzuki engines "},
            {bold: false, text: "is a premium, high-performance boat designed for those seeking both comfort and excitement on the water. With its sleek and modern design, this boat offers a smooth, thrilling ride while providing the perfect balance of speed and stability."},
            {endl: true},
            {bold: false, text: "Powered by "},
            {bold: true, text: "two 250 HP Suzuki engines"},
            {bold: false, text: ", the "},
            {bold: true, text: "Cap Camarat 9.0 2 Series "},
            {bold: false, text: "reaches a "},
            {bold: true, text: "maximum speed of 50 knots "},
            {bold: false, text: "and cruises comfortably at a "},
            {bold: true, text: "travel speed of 27 knots"},
            {bold: false, text: ", allowing you to effortlessly explore the coastline or enjoy a fast-paced adventure on the open water. The boat is spacious enough to accommodate up to "},
            {bold: true, text: "10 people"},
            {bold: false, text: ", making it ideal for group outings, family trips, or social gatherings on the water."},
            {endl:true},
            {bold: false, text: "Whether you're looking to cruise in style, enjoy water sports, or relax while taking in breathtaking views, the "},
            {bold: true, text: "Cap Camarat 9.0 2 Series "},
            {bold: false, text: "with its powerful engines and ample space ensures a memorable and exhilarating experience for all on board."},
        ],
    },
    {
        id: 4,
        name: "Beneteau Flyer 8",
        bannerImage: Flyer8Banner,
        images: beneteauFlyer8Images,
        specs: ["Lenght: 8.17m","Width: 2.53m","Engine: 350hp Suzuki","Capacity: 9","Fuel tank: 340l","Year: 2020","Cruise speed: 24kn","Max speed: 43kn"],
        equipment: ["Life Jacket", "Anchor", "GPS navigation"],
        prices: [
            {from: "April 1", to: "May 31", price: "300"},
            {from: "June 1", to: "June 30", price: "340"},
            {from: "July 1", to: "September 6", price: "350"},
            {from: "September 7", to: "May 30", price: "320"},
            {from: "October 1", to: "December 31", price: "300"},
        ],
        desc: [
            {bold: false, text: "The "},            
            {bold: true, text: "Beneteau Flyer 8 "},    
            {bold: false, text: "with a "},            
            {bold: true, text: "350 horsepower Suzuki engine "},    
            {bold: false, text: "is the perfect combination of performance, comfort, and style. Designed for those seeking an exciting yet comfortable boating experience, this boat delivers outstanding power and smooth handling on the water."},            
            {endl: true},
            {bold: false, text: "Equipped with a "},            
            {bold: true, text: "350 HP Suzuki engine"},    
            {bold: false, text: ", the "},            
            {bold: true, text: "Beneteau Flyer 8 "},    
            {bold: false, text: "offers impressive performance, reaching exhilarating speeds while maintaining stability and comfort. It’s ideal for both leisurely cruises and more adventurous outings, whether you're exploring coastal areas or enjoying water sports. With a "},            
            {bold: true, text: "capacity to fit 9 people"},    
            {bold: false, text: ", this boat provides plenty of space for family or friends to relax, socialize, and enjoy the ride together."},            
            {endl: true},
            {bold: false, text: "The "},            
            {bold: true, text: "Beneteau Flyer 8 "},            
            {bold: false, text: "blends sleek design with practical features, offering ample seating, a spacious deck, and the reliability of a powerful engine, ensuring an unforgettable experience on the water"},            
        ],
    },
    {
        id: 5,
        name: "Quicksilver 605 Open",
        bannerImage: Quicksilver605Banner,
        images: quicksilver605OpenImages,
        specs: ["Lenght: 6.05m","Width: 2.4m","Engine: 150hp Mercury","Capacity: 7","Fuek tank: 140l","Year: 2012","Cruise speed: 22kn","Max speed: 40kn"],
        equipment: ["Life Jacket", "Anchor", "GPS navigation"],
        prices: [
            {from: "April 1", to: "May 31", price: "300"},
            {from: "June 1", to: "June 30", price: "340"},
            {from: "July 1", to: "September 6", price: "350"},
            {from: "September 7", to: "May 30", price: "320"},
            {from: "October 1", to: "December 31", price: "300"},
        ],
        desc: [
            {bold: false, text: "The "},
            {bold: true, text: "Quicksilver 605 Open "},
            {bold: false, text: "with a "},
            {bold: true, text: "150 horsepower Mercury engine "},
            {bold: false, text: "is a versatile and reliable boat, perfect for those looking to enjoy a day on the water. With its sleek design and robust engine, it offers a smooth and stable ride, making it ideal for family outings, fishing trips, or leisurely cruises along the coast."},
            {endl: true},
            {bold: false, text: "Powered by the "},
            {bold: true, text: "Mercury 150 HP engine"},
            {bold: false, text: ", the "},
            {bold: true, text: "Quicksilver 605 Open "},
            {bold: false, text: "delivers excellent performance, allowing you to reach exciting speeds while maintaining comfort and efficiency. The boat comfortably accommodates up to "},
            {bold: true, text: "7 people"},
            {bold: false, text: ", providing ample space for relaxation and enjoyment on board. Whether you're exploring nearby islands, enjoying a swim, or simply cruising along scenic shorelines, the "},
            {bold: true, text: "Quicksilver 605 Open "},
            {bold: false, text: "offers the perfect balance of performance and comfort."},
            {endl: true},
            {bold: false, text: "With its practicality and ease of use, the "},
            {bold: true, text: "Quicksilver 605 Open "},
            {bold: false, text: "ensures a fun and enjoyable experience on the water for both beginners and experienced boaters alike."},

        ],
    },
    {
        id: 6,
        name: "Adria M Sport 500",
        bannerImage: AdriaM500_3,
        bannerBottom: false,
        images: adriaMSport500Images,
        specs: ["Lenght: 5m", "Width: 2.07m","Engine: 8 Mercury","Capacity: 6","Fuek tank: 12L","Year: 2025","Cruise speed: 6kn"],
        equipment: ["Life Jacket", "Anchor", "GPS navigation"],
        prices: [
            {from: "April 1", to: "May 31", price: "300"},
            {from: "June 1", to: "June 30", price: "340"},
            {from: "July 1", to: "September 6", price: "350"},
            {from: "September 7", to: "May 30", price: "320"},
            {from: "October 1", to: "December 31", price: "300"},
        ],
        desc: [
            {bold: false, text: "The "},
            {bold: true, text: "Adria M Sport 500 "},
            {bold: false, text: "with a "},
            {bold: true, text: "Mercury 8 horsepower engine "},
            {bold: false, text: "is the perfect choice for those looking for a simple and relaxing boating experience. This compact boat is ideal for exploring the beautiful "},
            {bold: true, text: "Makarska Riviera"},
            {bold: false, text: ", offering a smooth and comfortable ride along the stunning coastline."},
            { endl: true },
            {bold: false, text: "One of the best features of the "},
            {bold: true, text: "Adria M Sport 500 "},
            {bold: false, text: "is that it can be rented "},
            {bold: true, text: "without a license"},
            {bold: false, text: ", making it an excellent option for those new to boating or simply looking for a hassle-free adventure. Our friendly staff provides a quick "},
            {bold: true, text: "10-minute training session "},
            {bold: false, text: "to ensure you feel confident and ready to navigate the waters."},
            { endl: true },
            {bold: false, text: "The "},
            {bold: true, text: "Adria M Sport 500 "},
            {bold: false, text: "can comfortably accommodate up to "},
            {bold: true, text: "6 people"},
            {bold: false, text: ", making it perfect for small groups or families looking to enjoy a relaxing day on the water. Whether you're looking to explore hidden coves, enjoy a leisurely cruise, or take in the breathtaking views of the "},
            {bold: true, text: "Makarska Riviera"},
            {bold: false, text: ", this boat offers the ideal combination of ease, comfort, and tranquility."},
        ],
    },
];


export default boats;