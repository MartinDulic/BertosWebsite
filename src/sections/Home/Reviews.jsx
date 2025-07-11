import React from 'react'
import Review from '../../components/Home/Review';
import Slider from '../../components/Shared/Slider';

const Reviews = () => {
  const reviews = [
    <Review clientName={"Juliia Levchenko"} text={"It was fantastic! It was the best day of our vacation! We went without a specific planned route, asked the captain to make a route at his own discretion and it was great!!! We were with two children 5 and 8 years old, the children were happy, especially the speed on the waves! It was a lot of fun!b The captain speaks excellent English, in every place where we stopped we heard an interesting story about that place. Then lunch was waiting for us in a wonderful restaurant , right by the water, which the captain recommended, and he had previously booked a table for us (this was very appropriate, because the restaurant is popular, the fish is fresh and deliciously prepared there) Thank you for a wonderful day!"} />,
      <Review clientName={"Lauren Gould"} text={"Berto was incredibly helpful when our family wanted to ( very last minute !) hire a boat for the day. Our skipper was so so friendly and took us to the most beautiful spots on the different islands. Will definitely use this company again when we return to Croatia!"}/>,
      <Review clientName={"vakga 126"} text={"All I can say about Berto's rent a boat is that it exceeds our expectations. As I am not familiar with the coast of the island, we left the choice of place to our skipper. We told him only what we want and what we expect and let him drive, which turned out to be an excellent decision. He not only met our expectations but also went a level above. We highly recommend this company because they are very professional, responsible and kind."}/>,
      <Review clientName={"Daria Oshry"} text={"I am returning client and already for second time I have rented a boat with Berto. Every time we had an amazing trip. He was very punctual, friendly, and took us to great hidden gems where we wouldn’t get without him. The boats were in great condition and the route of the trip is pre-arranged before so you can relax and enjoy at the day of the trip. The price is very fair and transparent. Thanks for amazing memories!"}/>,
      <Review clientName={"Nikolina Kraljević"} text={"Sve preporuke za ovog decka, ispunjava sve zelje i nista mu nije problem. Imala sam djevojacku s nekoliko cura i provele smo se odlicno, nezaboravno iskustvo koje cu sigurno ponoviti. Uvale su savrsene, lokacija rucka odlicna i hrana jako povoljna."} />,
      <Review clientName={"VT555"} text={"One of the best boat tours in my life. We had an entire day on the boat and visited wonderful beaches & he recommended us great beach bars and restaurants. We had a great time, would recommend every one to experience a boat tour with Berto & his boat."} />,
  ];
  return (
    <section className="w-full bg-secondary py-10">
      <Slider slides={reviews} arrowStyle={"text-primary"}/>
    </section>
  )
}

export default Reviews