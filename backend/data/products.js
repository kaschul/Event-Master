const products = [
  {
    name: "Events after Dark - Bodies and Bones",
    organizer: "Slater Museum of Natural History",
    image: "/event-images/eventsafterdark.jpg",
    description:
      "Join us for an insider look at the research and teaching specimins that make up the Slater Museum of Natural History.  Each event features a subset of the collection, including touchable artifacts.  Space is limited, please reserve your ticket in advance.",
    date: "March 27th, 2022",
    time: "5:00 PM - 9:00 PM",
    location:
      "University of Puget Sound <br> 1500 N Warner St <br> Tacoma, WA 98416 <br> Thompson Hall room 295",
    price: 10,
    ticketsStock: 50,
    categories: ["family friendly", "science", "museum", "Tacoma, WA"],
  },

  {
    name: "Events after Dark - Creatures of the Sea",
    organizer: "Slater Museum of Natural History",
    image: "/event-images/eventsafterdark.jpg",
    description:
      "Join us for an insider look at the research and teaching specimins that make up the Slater Museum of Natural History.  Each event features a subset of the collection, including touchable artifacts.  Space is limited, please reserve your ticket in advance.",
    date: "April 17th, 2022",
    time: "5:00 PM - 9:00 PM",
    location:
      "University of Puget Sound <br> 1500 N Warner St <br> Tacoma, WA 98416 <br> Thompson Hall room 295",
    price: 10,
    ticketsStock: 50,
    categories: ["family friendly", "science", "museum", "Tacoma, WA"],
  },

  {
    name: "Drinks and Discussions - Art and Ownership",
    organizer: "The Society of Indigenous Artists",
    image: "/event-images/drinksanddiscussions.jpg",
    description:
      "Chat and mingle at this black tie private event at the Burke Museum.  Join the silent auction and meet local artists.  Dinner and drinks are included in ticket price, admissions are 21+ only.  All proceeds support The Soceity of Indigenous Artists.",
    date: "March 23rd, 2022",
    time: "6:00 PM - 11:00 PM",
    location: "Burke Museum <br> 4300 15th Ave Ne <br> Seattle, WA",
    price: 500,
    ticketsStock: 200,
    categories: ["art", "museum", "fundraiser", "Seattle, WA", "21+"],
  },

  {
    name: "The Wednesday Comedy Show",
    organizer: "Seattle City Improv",
    image: "/event-images/wednesdaycomedyshow.jpg",
    description:
      "Located at Pike Place Market, Seattle City Improv is consistently voted one of the top comedy clubs in Seattle.",
    date: "March 23, 2022",
    time: "1:30 PM",
    location: "Pike Place Market <br> 85 Pike St <br> Seattle, WA",
    price: 20,
    ticketsStock: 80,
    categories: ["comedy", "21+", "Seattle, WA"],
  },

  {
    name: "Todd Tigers Neighborhood Live!",
    organizer: "Fun House Activities",
    image: "/event-images/ToddTiger.jpg",
    description:
      "Located at Parmount Theatre, a spot for entertainment and family-friendly fun.",
    date: "March 19, 2022",
    time: "2:00 PM",
    location: "Paramount Theatre <br> 901 Poppy St <br> Seattle, WA",
    price: "15",
    ticketsStock: 15,
    categories: ["kids", "8+", "Seattle, WA"],
  },

  {
    name: "Texas Monster Jam Madness",
    organizer: "Country Entertainment",
    image: "/event-images/Monsterjam.jpg",
    description:
      "Located at Southern Arena, a place to see all extreme indoor sports!",
    date: "April 19, 2022",
    time: "1:00 PM",
    location: "Southern Arena <br> 500 Jefferson Rd <br> College Station, TX",
    price: "60",
    ticketsStock: 100,
    categories: ["Sports", "5+", "College Station, TX"],
  },

  {
    name: "Sacramento University Basketball vs. Seattle State University",
    organizer: "Extreme Entertainment",
    image: "/event-images/Sacramentoseattle.jpg",
    description:
      "Located at Bannerfield Park, a place to attend energeic and adrenalin pumping events.",
    date: "May 14, 2022",
    time: "6:00 PM",
    location: "Bannerfield Park <br> 404 Holiday Rd <br> Seattle, WA",
    price: "150",
    ticketsStock: 20,
    categories: ["Sports", "18+", "Seattle, WA"],
  },
  {
    name: "St. Patricks Day Boat Party",
    organizer: "Lake Union Charters",
    image: "/event-images/St.Patricksparty.jpg",
    description:
      "Enjoy dancing, music, drinks, and fun on a boat celebrating St. Patrick's Day.",
    date: "March 19th, 2022",
    time: "7:00 PM - 11:00 PM",
    location:
      "Lake Union Charters <br> 1611 Fairview Avenue East <br> Seattle, WA 98102",
    price: 15,
    ticketsStock: 50,
    categories: ["boat", "21+", "drinks", "Seattle, WA"],
  },
  {
    name: "Boots, Barrels, and Brews",
    organizer: "Kiwanis Club of Issaquah",
    image: "/event-images/bootsbarrelsbrews.jpg",
    description:
      "Enjoy live country music and line dancing while enjoying some good 80 proof ale!",
    date: "March 25th, 2022",
    time: "6:30 PM - 9:30 PM",
    location:
      "Kiwanis Club of Issaquah <br> 105 Newport Way SW <br> Issaquah, WA 98027",
    price: 45,
    ticketsStock: 90,
    categories: ["dancing", "21+", "music", "drinks", "Issaquah, WA"],
  },
  {
    name: "Anime Festival",
    organizer: "Sakura-Con",
    image: "/event-images/animefestival.jpg",
    description:
      "Anual convention centered around Anime, manga and video games.",
    date: "April 15th-17th, 2022",
    time: "7:00 AM - 9:30 PM",
    location:
      "Washington State Convention Center <br> 705 Pike ST <br> Seattle, WA 98101",
    price: 90,
    ticketsStock: 100,
    categories: ["anime", "video games", "art", "Seattle, WA"],
  },
  {
    name: "Quilt Show",
    organizer: "Quilters Anonymous",
    image: "/event-images/Quiltshow.jpg",
    description:
      "Enjoy artists from all over Washington show off their handmade quilt designs.",
    date: "April 18th-20th, 2022",
    time: "10:00 AM - 4:00 PM",
    location:
      "Evergreen State Fairgrounds <br> 14405 179th AVE SE <br> Monroe, WA 98272",
    price: 10,
    ticketsStock: 50,
    categories: ["quilt", "art", "crafts", "Monroe, WA"],
  },
  {
    name: "Easter Parade",
    organizer: "Snohomish Chamber",
    image: "/event-images/Easterparade.jpg",
    description:
      "Come celebrate Easter in Snohomish! There will be food stalls, music, and pictures with the Easter bunny.",
    date: "April 16th, 2022",
    time: "10:00 AM - 3:00 PM",
    location:
      "Downtown Snohomish <br> 21 AVE A Suite 1 <br> Snohomish, WA 98290",
    price: 10,
    ticketsStock: 70,
    categories: ["easter", "parade", "festival", "Snohomish, WA"],
  },
];

export default products;
