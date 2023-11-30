export interface Event {
  id: number;
  name: string;
  organizer: string;
  image: string;
  description: string;
  location: string;
  time: string;
  price: number;
}

const events: Event[] = [
  {
    id: 1,
    name: "Samba Carnival Extravaganza",
    organizer: "Jonas",
    image:
      "https://cdn.theatlantic.com/media/img/photo/2019/03/brazil-carnival-2019-photos/c01_1128576841-1/original.jpg",
    description:
      "Join us for a vibrant Samba Carnival with lively music, dance, and colorful costumes.",
    location: "Rio de Janeiro",
    time: "2023-12-01T18:00:00", // Example time in the future
    price: 25.99,
  },
  {
    id: 2,
    name: "Amazon Rainforest Exploration",
    organizer: "Jonas",
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/Amazon-Rain-Forest.jpg",
    description:
      "Embark on an adventure through the breathtaking Amazon Rainforest. Discover its diverse flora and fauna.",
    location: "Amazon Rainforest",
    time: "2023-11-15T10:00:00",
    price: 49.99,
  },
  {
    id: 3,
    name: "Cuisine Fiesta: Taste of Brazil",
    organizer: "Jonas",
    image:
      "https://www.thedailymeal.com/img/gallery/15-brazilian-foods-that-you-must-try-other-than-barbecue/l-intro-1686069431.jpg",
    description:
      "Experience the rich flavors of Brazil with our Cuisine Fiesta. Indulge in delicious Brazilian dishes.",
    location: "São Paulo",
    time: "2023-11-20T19:30:00",
    price: 35.99,
  },
  {
    id: 4,
    name: "Capoeira and Afro-Brazilian Dance Workshop",
    organizer: "Jonas",
    image:
      "https://www.capoeirashop.fr/modules/wpimageslider/views/img/9a56034b9557693046e948b1d453b4570251fd60_capoeira%20online%20shop.jpg",
    description:
      "Learn the art of Capoeira and Afro-Brazilian dance in this interactive workshop. All skill levels welcome!",
    location: "Salvador",
    time: "2023-11-25T15:00:00",
    price: 29.99,
  },
  {
    id: 5,
    name: "Carnival Mask Making Workshop",
    organizer: "Jonas",
    image:
      "https://as1.ftcdn.net/v2/jpg/01/87/86/32/1000_F_187863282_CGicMspFKPAFbthdR8u2JTKM9lsE7pWA.jpg",
    description:
      "Get creative at our Carnival Mask Making Workshop. Design and craft your own unique mask for the festivities.",
    location: "Recife",
    time: "2023-11-30T14:00:00",
    price: 19.99,
  },
  {
    id: 6,
    name: "Football Fanatic Championship",
    organizer: "Jonas",
    image:
      "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=770%2C513&quality=80",
    description:
      "Cheer for your favorite teams in the Football Fanatic Championship. Witness thrilling matches and celebrate the spirit of the game.",
    location: "São Paulo",
    time: "2023-12-05T20:00:00",
    price: 24.99,
  },
  {
    id: 7,
    name: "Bossanova Sunset Jazz Night",
    organizer: "Jonas",
    image: "https://f4.bcbits.com/img/a0208132195_10.jpg",
    description:
      "Relax and enjoy the soothing melodies of Bossanova at our Sunset Jazz Night. A perfect evening by the beach.",
    location: "Copacabana",
    time: "2023-12-10T18:30:00",
    price: 39.99,
  },
];

export default events;
