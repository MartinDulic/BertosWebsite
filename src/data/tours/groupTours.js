import Uvala from '../../assets/uvala.webp'

import blue0935 from '../../assets/groupTours/blue/blue_0935.webp'
import blue1015 from '../../assets/groupTours/blue/blue_1015.webp'
import gradNaHvaru from '../../assets/groupTours/new/GradNaHvaru.webp'
import golden1230 from '../../assets/groupTours/golden/golden_1230.webp'
import biskup from '../../assets/groupTours/new/biskup.webp'
import golden0530 from '../../assets/groupTours/golden/golden_0530.webp'
import purple0900 from '../../assets/groupTours/purple/purple_0900.webp'
import golden1100 from '../../assets/groupTours/golden/golden_1100.webp'
import brodPucina from '../../assets/groupTours/new/BrodPucina.webp'
import biskupBrodovi from '../../assets/groupTours/new/BiskupBrodovi.webp'
import golden0930 from '../../assets/groupTours/golden/golden_0930.webp'
import sunset0600 from '../../assets/groupTours/sunset/sunset_0600.webp'
import sunset0700 from '../../assets/groupTours/sunset/sunset_0700.webp'
import sunsetMain from '../../assets/groupTours/new/Sunset.webp'



const groupTours = [
    {
        id: 100,
        bannerImage: Uvala,
        name: "3 ISLANDS TOUR",
        locations: ["Hvar", "Brač", "Zečevo"],
        desc: "This well-rounded, 5-stop speedboat tour is the perfect combination of adventure, relaxation, and exploration, showcasing some of the most beautiful destinations along the Dalmatian coast in just a few hours. Whether you’re looking to swim, snorkel, or simply unwind in paradise, this tour offers it all.",
        basicInfo: [
            { name: "Price", content: "75€-90€ per person (depends on date) / 60€ for children (3–10 years)" },
            { name: "Duration", content: "5 hours" },
            { name: "Meeting point", content: "Port of Makarska; Marineta 16, 21300 Makarska, Rent a boat Berto's stand" },
            { name: "Departure time", content: "8:00 AM / 1:30 PM" },
            { name: "Return time", content: "1:00 PM / 6:30 PM" },
            { name: "Included", content: "Speedboat, skipper, fuel, snorkeling masks, taxes & fees" },
            { name: "What to Bring", content: "Warm clothes for the boat ride, beach towel, swimsuit, drinks, and snacks if desired" }
        ],
        landmarks: [
            "Hidden bay Veliki Pokrivenik on island Hvar",
            "Little Blue Cave on island Hvar",
            "Town Jelsa",
            "Blue Lagoon - island Zečevo",
            "Hidden bay Studena on island Brač"
        ],
        stops: [
            {
                image: blue0935,
                time: "8:35 AM / 2:05 PM",
                text: "Arrival at Pokrivenik Bay, Hvar. Relax for 30 minutes on one of the Adriatic’s most beautiful and untouched beaches surrounded by breathtaking nature.",

            },
            {
                image: blue1015,
                time: "9:10 AM / 2:40 PM",
                text: "Stop at the mesmerizing Little Blue Cave on Hvar Island. Swim or snorkel in the crystal-clear waters and experience the stunning blue glow."
            },
            {
                image: gradNaHvaru,
                time: "10:00 AM / 3:30 PM",
                text: "Visit Jelsa town on Hvar Island. Spend 60 minutes exploring its charming streets, enjoying the relaxed Mediterranean atmosphere, and savoring coffee at a local cafe."
            },
            {
                image: golden1230,
                time: "11:10 AM / 4:40 PM",
                text: "Explore the Blue Lagoon on Zečevo Island. Enjoy 50 minutes swimming, snorkeling, or relaxing at the beach bar Lantina in the serene turquoise waters."
            },
            {
                image: biskup,
                time: "12:15 PM / 5:45 PM",
                text: "Stop at Studena Bay, Brač. Spend 30 minutes swimming in its unique mix of fresh and saltwater in a picturesque and tranquil setting."
            },
            {
                image: golden0530,
                time: "1:00 PM / 6:30 PM",
                text: "As your boat tour draws to a close, you'll begin your journey back to Makarska, where your adventure started. Take in the breathtaking views of the coastline and surrounding islands one last time."
            }
        ]
    },
    {
        id: 101,
        bannerImage: golden1100,
        name: "GOLDEN HORN TOUR",
        locations: ["Golden Horn (Zlatni Rat)", "Biskup Bay", "Žirje Bay", "Puntica Bay"],
        desc: "On this boat tour from Makarska, you'll explore the stunning islands of Brač, starting with the iconic Golden Horn (Zlatni Rat) beach. Then, you'll visit secluded bays such as a peaceful retreat on Brač, the tranquil Žirje Bay, and the serene Puntica Bay, known for their crystal-clear waters, vibrant marine life, and breathtaking coastal beauty. Enjoy opportunities for swimming, snorkeling, and relaxation before concluding with a scenic return to Makarska.",
        basicInfo: [
            { name: "Price", content: "65€-80€ per person (depends on date) / 60€ for children (3–10 years)" },
            { name: "Duration", content: "5 hours" },
            { name: "Meeting Point", content: "Port of Makarska; Marineta 16, 21300 Makarska, Rent a boat Berto's stand" },
            { name: "Departure time", content: "9:00 AM" },
            { name: "Return time", content: "2:00 PM" },
            { name: "Included", content: "Speedboat, skipper, fuel, snorkeling masks, taxes & fees" },
            { name: "What to Bring", content: "Warm clothes for the boat ride, beach towel, swimsuit, drinks, and snacks if desired" }
        ],
        landmarks: [
            "Golden Horn (Zlatni Rat) beach on island Brač",
            "Hidden bay Biskup on island Brač",
            "Hidden bay Žirje on island Brač",
            "Hidden bay Puntica on island Brač"
        ],
        stops: [
            {
                image: purple0900,
                time: "9:00 AM",
                text: "Setting off on a boat tour from Makarska to the islands is an exciting adventure that combines stunning natural landscapes with rich cultural exploration. Departing from the port of Makarska, you'll be greeted by the crystal-clear waters of the Adriatic Sea and Mediterranean sunshine, creating the ideal atmosphere for an unforgettable journey.",
                imageTop: true
            },
            {
                image: golden1100,
                time: "9:45 AM",
                text: "Your first destination on this tour is Golden Horn (Zlatni Rat) beach located on the island of Brač. Known as one of the most stunning beaches in the world, the Golden Horn is famous for its distinctive horn-like shape and crystal-clear turquoise waters. You'll have 1 hour and 15 minutes to explore, swim, and soak in its beauty before heading to the next stop."
            },
            {
                image: brodPucina,
                time: "11:00 AM",
                text: "After departing from the iconic Golden Horn, your boat tour takes you to Biskup Bay on Brač. This hidden treasure offers a peaceful retreat away from the crowds, with dramatic cliffs, vibrant pine forests, and a serene atmosphere. Enjoy a refreshing swim, snorkel along the unspoiled coastline, or relax on the boat's deck while soaking in the natural beauty."
            },
            {
                image: biskupBrodovi,
                time: "12:15 PM",
                text: "Next, head to Žirje Bay, one of Brač's best-kept secrets. This tranquil and untouched bay offers crystal-clear waters perfect for swimming and snorkeling. Surrounded by lush greenery and rocky cliffs, Žirje Bay is a peaceful escape, ideal for relaxing and enjoying the stunning coastal views."
            },
            {
                image: golden0930,
                time: "1:00 PM",
                text: "The final stop is Puntica Bay, known for its crystal-clear waters and vibrant marine life. Dive into the refreshing turquoise waters, snorkel to explore the underwater world, or relax on the pebble beach. The peaceful surroundings and serene atmosphere make it a perfect spot to unwind, with breathtaking views of the Biokovo mountain range in the background."
            },
            {
                image: golden0530,
                time: "2:00 PM",
                text: "As your boat tour draws to a close, you'll begin your journey back to Makarska, where your adventure started. Enjoy the breathtaking views of the coastline and surrounding islands one last time, leaving you with unforgettable memories of your Adriatic journey."
            }
        ]
    },
        {
            id: 102,
            bannerImage: sunsetMain,
            name: "SUNSET TOUR",
            locations: ["Puntica"],
            desc: "A sunset along the Makarska Riviera is truly a sight to behold, best experienced from the sea. Join us for a 90-minute Sunset Tour, where you'll not only enjoy the stunning views but also have the chance to swim in a secluded bay on the island of Brač.",
            basicInfo: [
                { name: "Duration", content: "1h 30min" },
                { name: "Departure time", content: "6:00-8:00 PM (depends on date)" },
                { name: "Return time", content: "7:30-9:30 PM (depends on date)" },
                { name: "Meeting point", content: "Port of Makarska; Marineta 16, 21300 Makarska, Rent a boat Berto's stand" },
                { name: "Included", content: "Speedboat, skipper, fuel, snorkeling masks, taxes & fees" },
                { name: "What to Bring", content: "Warm clothes for the boat ride, beach towel, swimsuit, drinks, and snacks if desired" },
                { name: "Private Sunset Tour Price", content: "230€" },
                { name: "Sunset Tour Group Price", content: "30€ per person / 25€ for children (3 – 10 years) / infants (0 – 2 years) FREE" }
            
            ],
            landmarks: [
                "Secluded Puntica Bay on Brač Island"
            ],
            stops: [
                {
                    image: sunset0600,
                    time: "6:00 PM",
                    text: "We’re setting off for the peaceful and secluded Puntica Bay on Brač Island, located just a short 20-minute boat ride away from our starting point. We’ll spend around 40 minutes in this serene bay, allowing you ample time to enjoy the peaceful surroundings and stunning scenery. Away from the crowds, this secluded spot offers crystal-clear waters and a peaceful atmosphere. Surrounded by rugged coastline and lush greenery, this serene bay provides the perfect setting to cool off and soak in the tranquility of the Adriatic."
                },
                {
                    image: sunset0700,
                    time: "7:00 PM",
                    text: "As we make our way back, get ready for a truly breathtaking experience. On the return journey, we’ll slowly sail from Makarska’s western entrance towards the harbor, offering you a panoramic view of the city as the sun begins to set. The warm glow of the setting sun will paint the sky with vibrant hues, casting a magical light over the coastline and creating the perfect backdrop for a nice picture, video, and a memorable end to this unforgettable journey."
                }
            ],
        },

];

export default groupTours;