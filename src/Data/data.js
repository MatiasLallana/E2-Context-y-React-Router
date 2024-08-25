export const products = [
  {
    id: 1,
    model: "iPhone 12",
    specs:
      "6.1-inch Super Retina XDR display, A14 Bionic chip, Dual-camera system with 12MP Ultra Wide and Wide cameras, Night mode, Deep Fusion, and HDR video recording, 5G capable",
    year: "2020",
    price: "799",
    img: "/public/Image/dataImage/iPhone_12.jpg",
    category: "Smartphones",
  },
  {
    id: 2,
    model: "Samsung Galaxy S21",
    specs:
      "6.2-inch Dynamic AMOLED 2X display, Exynos 2100 / Qualcomm Snapdragon 888, Triple-camera system with 12MP Ultra Wide, Wide, and 64MP Telephoto cameras, Night mode, Super Resolution Zoom, and 8K video recording, 5G capable",
    year: "2021",
    price: "799",
    img: "/public/Image/dataImage/Samsung-Galaxy-S21.jpg",
    category: "Smartphones",
  },
  {
    id: 3,
    model: "Google Pixel 5",
    specs:
      "6.0-inch OLED display, Qualcomm Snapdragon 765G, Dual-camera system with 12.2MP Dual-Pixel and 16MP Ultra Wide cameras, Night Sight, Super Res Zoom, and 4K video recording, 5G capable",
    year: "2020",
    price: "699",
    img: "/public/Image/dataImage/Google-Pixel-5.jpg",
    category: "Smartphones",
  },
  {
    id: 4,
    model: "iPhone SE (2020)",
    specs:
      "4.7-inch Retina HD display, A13 Bionic chip, Single-camera system with 12MP Wide camera, Portrait mode, and 4K video recording",
    year: "2020",
    price: "399",
    img: "/public/Image/dataImage/iPhone-SE-(2020).jpg",
    category: "Smartphones",
  },
  {
    id: 5,
    model: "OnePlus 9 Pro",
    specs:
      "6.7-inch Fluid AMOLED display, Qualcomm Snapdragon 888, Quad-camera system with 48MP Wide, 50MP Ultra Wide, 8MP Telephoto, and 2MP Monochrome cameras, Nightscape, Super Macro, and 8K video recording, 5G capable",
    year: "2021",
    price: "969",
    img: "/public/Image/dataImage/OnePlus-9-Pro.jpg",
    category: "Smartphones",
  },
  {
    id: 6,
    model: "Xiaomi Mi 11",
    specs:
      "6.81-inch AMOLED display, Qualcomm Snapdragon 888, Triple-camera system with 108MP Wide, 13MP Ultra Wide, and 5MP Macro cameras, Night mode, Super Resolution, and 8K video recording, 5G capable",
    year: "2020",
    price: "749",
    img: "/public/Image/dataImage/Xiaomi-Mi-11.jpg",
    category: "Smartphones",
  },
  {
    id: 7,
    model: "HP Spectre x360",
    specs:
      "13.3-inch 4K UHD OLED display, Intel Core i7, Intel Iris Xe Graphics, 16GB RAM, 1TB SSD, Windows 10",
    year: "2020",
    price: "1299",
    img: "/public/Image/dataImage/HP-Spectre-x360.jpg",
    category: "Laptops",
  },
  {
    id: 8,
    model: "Dell XPS 13",
    specs:
      "13.4-inch InfinityEdge display, Intel Core i5, Intel Iris Xe Graphics, 8GB RAM, 256GB SSD, Windows 10",
    year: "2020",
    price: "999",
    img: "/public/Image/dataImage/Dell-XPS-13.jpg",
    category: "Laptops",
  },
  {
    id: 9,
    model: "MacBook Air",
    specs:
      "13.3-inch Retina display, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 256GB SSD, macOS",
    year: "2020",
    price: "999",
    img: "/public/Image/dataImage/MacBook-Air.jpeg",
    category: "Laptops",
  },
  {
    id: 10,
    model: "Lenovo ThinkPad X1 Carbon",
    specs:
      "14.0-inch HDR display, Intel Core i7, Intel UHD Graphics, 16GB RAM, 512GB SSD, Windows 10",
    year: "2020",
    price: "1499",
    img: "/public/Image/dataImage/Lenovo-ThinkPad-X1-Carbon.jpeg",
    category: "Laptops",
  },
  {
    id: 11,
    model: "ASUS ROG Zephyrus G14",
    specs:
      "14.0-inch Full HD display, AMD Ryzen 9, NVIDIA GeForce RTX 2060, 16GB RAM, 1TB SSD, Windows 10",
    year: "2020",
    price: "1799",
    img: "/public/Image/dataImage/ASUS-ROG-Zephyrus-G14.jpg",
    category: "Laptops",
  },
  {
    id: 12,
    model: "Acer Swift 3",
    specs:
      "14.0-inch Full HD display, AMD Ryzen 7, AMD Radeon Graphics, 8GB RAM, 512GB SSD, Windows 10",
    year: "2020",
    price: "699",
    img: "/public/Image/dataImage/Acer-Swift-3.jpg",
    category: "Laptops",
  },
];

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});

//   {
//     model: "Microsoft Surface Laptop 4",
//     specs:
//       "13.5-inch PixelSense display, Intel Core i5, Intel Iris Xe Graphics, 8GB RAM, 256GB SSD, Windows 10",
//     year: "2021",
//     price: "999",
//   },
//   {
//     model: "Razer Blade 15",
//     specs:
//       "15.6-inch Full HD display, Intel Core i7, NVIDIA GeForce RTX 3060, 16GB RAM, 512GB SSD, Windows 10",
//     year: "2021",
//     price: "1699",
//   },
//   {
//     model: "Alienware m15 R4",
//     specs:
//       "15.6-inch Full HD display, Intel Core i7, NVIDIA GeForce RTX 3070, 16GB RAM, 1TB SSD, Windows 10",
//     year: "2021",
//     price: "2099",
//   },
//   {
//     model: "HP Pavilion x360",
//     specs:
//       "14.0-inch Full HD display, Intel Core i5, Intel UHD Graphics, 8GB RAM, 256GB SSD, Windows 10",
//     year: "2020",
//     price: "699",
//   },
//   {
//     model: "iPad Air",
//     specs:
//       "10.9-inch Liquid Retina display, Apple A14 Bionic chip, 12MP Wide camera, Touch ID, and Apple Pencil (2nd generation) support",
//     year: "2020",
//     price: "599",
//   },
//
