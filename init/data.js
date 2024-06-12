const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-74.0060, 40.7128] }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-106.8370, 39.1911] }
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: 'Point', coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-122.6765, 45.5231] }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: 'Point', coordinates: [-86.8475, 21.1619] }
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-120.0440, 39.0968] }
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: 'Point', coordinates: [7.2266, 46.0965] }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: 'Point', coordinates: [34.6857, -2.3333] }
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWwlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: 'Point', coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Luxury Houseboat on Dal Lake",
    description:
      "Experience the tranquility of staying on a houseboat in the picturesque Dal Lake. Enjoy breathtaking views and serene surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590490351339-43efb8491a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2Vib2F0JTIwaW4lMjBrYXNobWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Srinagar",
    country: "India",
    geometry: { type: 'Point', coordinates: [74.8398, 34.0837] }
  },
  {
    title: "Heritage Haveli",
    description:
      "Stay in a beautifully restored haveli in the heart of Rajasthan. Enjoy the royal experience and rich cultural heritage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVyaXRhZ2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Jaipur",
    country: "India",
    geometry: { type: 'Point', coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Tea Estate Bungalow",
    description:
      "Nestled in the lush tea gardens, this colonial-era bungalow offers a serene retreat. Enjoy the scenic beauty and tranquil ambiance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587120606114-6f0a1c5ddff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhJTIwZXN0YXRlJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Munnar",
    country: "India",
    geometry: { type: 'Point', coordinates: [77.0629, 10.0889] }
  },
  {
    title: "Backwater Houseboat",
    description:
      "Cruise through the serene backwaters of Kerala on a luxurious houseboat. Witness the unique lifestyle and natural beauty of the region.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510057194517-06e6a0715a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFja3dhdGVycyUyMGhvdXNlYm9hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Alleppey",
    country: "India",
    geometry: { type: 'Point', coordinates: [76.3388, 9.4981] }
  },
  {
    title: "Luxury Camp in the Desert",
    description:
      "Experience the desert in style with a stay at this luxury camp. Enjoy camel rides, cultural performances, and stunning sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1589820296152-8b622935a5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2VydCUyMGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Jaisalmer",
    country: "India",
    geometry: { type: 'Point', coordinates: [70.9083, 26.9157] }
  },
  {
    title: "Boutique Villa in Goa",
    description:
      "Relax in this charming boutique villa with a private pool. Enjoy the vibrant culture and stunning beaches of Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560073743-8b80b2a4788f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEdvYSUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Goa",
    country: "India",
    geometry: { type: 'Point', coordinates: [73.9783, 15.2993] }
  }
];


module.exports = { data: sampleListings };