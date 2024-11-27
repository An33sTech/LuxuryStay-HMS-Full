// import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
// import img10 from "../assets/im10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
// import img13 from "../assets/img13.jpg";
// import img14 from "../assets/img14.jpg";
// import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
// import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";

import roomimg1 from "../assets/roomimg (1).jpg";
import roomimg2 from "../assets/roomimg (2).jpg";
import roomimg3 from "../assets/roomimg (3).jpg";
import roomimg4 from "../assets/roomimg (4).jpg";
import roomimg5 from "../assets/roomimg (5).jpg";
import roomimg6 from "../assets/roomimg (6).jpg";
import roomimg7 from "../assets/roomimg (7).jpg";
import roomimg8 from "../assets/roomimg (8).jpg";
import roomimg9 from "../assets/roomimg (9).jpg";
import roomimg10 from "../assets/roomimg (10).jpg";
import roomimg11 from "../assets/roomimg (11).jpg";
import roomimg12 from "../assets/roomimg (12).jpg";
import roomimg13 from "../assets/roomimg (13).jpg";
import roomimg14 from "../assets/roomimg (14).jpg";
import roomimg15 from "../assets/roomimg (15).jpg";
import roomimg16 from "../assets/roomimg (16).jpg";
// hotel lobby
import hotellobby from "../assets/hotellobby.avif";
import hotellobby1 from "../assets/hotellobby (1).jpg";
import hotellobby2 from "../assets/hotellobby (2).jpg";
import hotellobby3 from "../assets/hotellobby (3).jpg";
import hotellobby4 from "../assets/hotellobby (4).jpg";
import hotellobby5 from "../assets/hotellobby (5).jpg";
import hotellobby6 from "../assets/hotellobby (6).jpg";
import hotellobby7 from "../assets/hotellobby (7).jpg";

export const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Booking', href: '/selectroom' },
    { name: 'ContactUs', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  categories: [
    {
      id: 'Accomodation',
      name: 'Accomodation',
      featured: [
        {
          name: 'BathTub Relaxation',
          href: '#',
          imageSrc: img11,
        },
        {
          name: 'Family Room',
          href: '#',
          imageSrc: img12,
        },
        {
          name: 'Penthouse Suite',
          href: '#',
          imageSrc: img2,
        },

        {
          name: 'Junior Suite',
          imageSrc: img5,
        },
        {
          name: 'Concierge Service',
          imageSrc: img6,
        },
        {
          name: 'Dining Restaurant',
          imageSrc: img7,
        },
        {
          name: 'Fitness Center',
          imageSrc: img8,
        },
        {
          name: 'Lounge & Bar',
          href: '#',
          imageSrc: img18,
        },

      ],
      sections: [
        {
          id: 'rooms',
          name: 'Rooms',
          items: [
            { name: 'Deluxe Room', href: '#' },
            { name: 'Executive Suite', href: '#' },
            { name: 'Presidential Suite', href: '#' },
            { name: 'Penthouse Suite', href: '#' },
            { name: 'Junior Suite', href: '#' },
            { name: 'Studio Room', href: '#' },
            { name: 'Family Room', href: '#' },
          ],
        },
        {
          id: 'dining',
          name: 'Dining',
          items: [
            { name: 'Fine Dining Restaurant', href: '#' },
            { name: 'Casual Dining', href: '#' },
            { name: 'Poolside Bar', href: '#' },
            { name: 'In-Room Dining', href: '#' },
            { name: 'Lounge & Bar', href: '#' },
            { name: 'Cafe', href: '#' },
          ],
        },
        {
          id: 'amenities',
          name: 'Amenities',
          items: [
            { name: 'Spa & Wellness', href: '#' },
            { name: 'Swimming Pool', href: '#' },
            { name: 'Fitness Center', href: '#' },
            { name: 'Business Center', href: '#' },
            { name: 'Concierge Service', href: '#' },
            { name: 'Meeting Rooms', href: '#' },
          ],
        },
      ],
    },
  ],

}


export const swiperarray = {
  slides: [
    {
      name: 'Bath Relaxation',
      href: '#',
      imageSrc: img11,
    },
    {
      name: 'Family Room',
      href: '#',
      imageSrc: img12,
    },
    {
      name: 'Penthouse Suite',
      href: '#',
      imageSrc: img2,
    },
    {
      name: 'Lounge & Bar',
      href: '#',
      imageSrc: img16,
    },
    {
      name: 'Fitness Center',
      imageSrc: img8,
    },
    {
      name: 'Junior Suite',
      imageSrc: img5,
    },
    {
      name: 'Meeting Room',
      imageSrc: img6,
    },
    {
      name: 'Dining Area',
      imageSrc: img7,
    },


  ]
}

// gallery

export const gallery = {
  "Hotel Room":
    [roomimg1,
      roomimg2,
      roomimg3,
      roomimg4,
      roomimg5,
      roomimg6,
      roomimg7,
      roomimg8,
      roomimg9,
      roomimg10,
      roomimg11,
      roomimg12,
      roomimg13,
      roomimg14,
      roomimg15,
      roomimg16,
    ],
  "Hotel Lobby":
    [hotellobby1,
      hotellobby2,
      hotellobby3,
      hotellobby4,
      hotellobby5,
      hotellobby6,
      hotellobby7,
      hotellobby,
    ],
  Resort:
    [
      img6, img7
    ],
  Interior:
    [img8],
  Restaurant:
    [img9],
  "Hotel Building":
    [img4, img6],
};