import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import roomimg from "../assets/roomimg.jpg";
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
import roomimg17 from "../assets/roomimg (17).jpg";

import { faUtensils, faStar, faWifi, faSwimmingPool, faUser, faTv,
faVault, faClock, faBowlRice, faPhotoFilm, faCocktail, faUserFriends,
faUserNurse, faBabyCarriage, faBellConcierge, faBaby, faCakeCandles }
from "@fortawesome/free-solid-svg-icons";

export const rooms = [
    {
      id: 1,
      title: "King Sized Room",
      description: "Luxurious Room For Your Stay",
      facilities: [
        { name: "Free WiFi", icon: faWifi },
        { name: "Breakfast Included", icon: faUtensils },
        { name: "Flat Screen TV", icon: faTv },
      ],
      ratingstars: [faStar, faStar, faStar, faStar, faStar],
      price: 677,
      persons: "Best for 2 Persons",
      userIcons: [faUser, faUser],
      img: img1,
    },
    {
      id: 2,
      title: "Deluxe Suite",
      description: "Spacious and Elegant Suite with Comfortable Dining Area",
      facilities: [
        { name: "Big Size TV", icon: faTv },
        { name: "Breakfast Buffet", icon: faUtensils },
        { name: "Internet Access", icon: faWifi },
      ],
      ratingstars: [faStar, faStar, faStar, faStar, faStar],
      price: 899,
      persons: "Best for 2 Persons",
      userIcons: [faUser, faUser, faUser, faUser],
      img: img2,
    },
    {
      id: 3,
      title: "Deluxe 2 Twin Beds",
      description: "Comfortable and Affordable",
      facilities: [
        { name: "WiFi", icon: faWifi },
        { name: "Brunch", icon: faBowlRice },
        { name: "In Room Safe", icon: faVault },
        { name: "Alarm Clock", icon: faClock },
      ],
      ratingstars: [faStar, faStar, faStar, faStar,faStar],
      price: 599,
      persons: "Best for 2 Persons",
      userIcons: [faUser, faUser],
      img: roomimg5,
    },
    {
      id: 4,
      title: "Premium Delux Room",
      description: "Luxury from the Top of the City, Highest Floor",
      facilities: [
        { name: "Full Night Internet Access", icon: faWifi },
        { name: "Mini Bar", icon: faCocktail },
        { name: "Personal Chef", icon: faUserNurse },
        { name: "personal photographer", icon: faPhotoFilm },
      ],
      ratingstars: [faStar, faStar, faStar, faStar],
      price: 3500,
      persons: "Best for Couples",
      userIcons: [faUserFriends],
      img: roomimg3,
    },
    {
      id: 5,
      title: "Family Room",
      description: "Comfortable Room For Your Family",
      facilities: [
        { name: "Internet Access", icon: faWifi },
        { name: "Netflix Access", icon: faTv },
        { name: "In Room Service", icon: faBellConcierge },
        { name: "Baby Carriage", icon: faBabyCarriage },
      ],
      ratingstars: [faStar, faStar, faStar, faStar],
      price: 3500,
      persons: "Best for Couples with Baby",
      userIcons: [faUserFriends, faBaby],
      img: roomimg,
    },
    {
      id: 6,
      title: "Luxury Room With Private Pool",
      description: "Equisite and Fancy Room with a Private Pool, Experience a Night at Pool Side",
      facilities: [
        { name: "Full Internet Access", icon: faWifi },
        { name: "Candle Night Dinner", icon: faCakeCandles },
        { name: "Private Pool", icon: faSwimmingPool },
      ],
      ratingstars: [faStar, faStar, faStar, faStar],
      price: 4500,
      persons: "Best for Couples",
      userIcons: [faUserFriends],
      img: roomimg17,
    },
  ];