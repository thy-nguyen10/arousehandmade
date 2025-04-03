import p1_img from "./popular_image1.jpg";
import p2_img from "./popular_image2.jpg";
import p3_img from "./popular_image3.jpg";
import p4_img from "./popular_image4.jpg";
import p5_img from "./new_collections_img1.jpg";
import p6_img from "./new_collections_img2.jpg";
import p7_img from "./new_collections_img3.jpg";
import p8_img from "./new_collections_img4.jpg";
import p9_img from "./new_collections_img5.jpg";
import p10_img from "./new_collections_img6.jpg";
import p11_img from "./new_collections_img7.jpg";
import p12_img from "./new_collections_img8.jpg";
import p13_img from "./product13.png";
import p14_img from "./product14.png";
import p15_img from "./product15.png";
import p16_img from "./product16.png";
import p17_img from "./product17.png";
import p18_img from "./product18.jpg";
import p19_img from "./product19.jpg";
import p20_img from "./product20.jpg";
// import p21_img from "./product21.jpg";
// import p22_img from "./product22.jpg";
// import p23_img from "./product23.jpg";
// import p24_img from "./product24.jpg";
// import p25_img from "./product25.jpg";
// import p26_img from "./product26.jpg";
// import p27_img from "./product27.jpg";
// import p28_img from "./product28.jpg";
// import p29_img from "./product29.jpg";
// import p30_img from "./product30.jpg";

let all_product = [
  {
    id: 1,
    name: "Green Bracelet",
    category: "bracelets",
    image: p1_img,
    sold: 120,
    new_price: 188000,
    old_price: 228000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 2,
    name: "Black Bracelet",
    category: "bracelets",
    image: p2_img,
    sold: 10,
    new_price: 150000,
    old_price: 168000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 3,
    name: "Sliver Bracelet",
    category: "bracelets",
    image: p3_img,
    sold: 20,
    new_price: 149000,
    old_price: 225000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 4,
    name: "Necklace",
    category: "necklaces",
    image: p4_img,
    sold: 15,
    new_price: 352000,
    old_price: 440000,
    description: "Necklaces are an essential piece of jewelry that enhance elegance and sophistication. With a wide range of designs, from simple to luxurious, necklaces allow you to express your personality and unique style. Whether it's a classic necklace or a sparkling gemstone design, each piece exudes a special charm, making it perfect for any occasion, from everyday wear to important events.",
  },
  {
    id: 5,
    name: "Pearl Bracelet",
    category: "bracelets",
    image: p5_img,
    sold: 9,
    new_price: 218000,
    old_price: 288000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 6,
    name: "Pink Bracelet",
    category: "bracelets",
    image: p6_img,
    sold: 7,
    new_price: 218000,
    old_price: 288000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 7,
    name: "Bracelet Sunset",
    category: "bracelets",
    image: p7_img,
    sold: 20,
    new_price: 218000,
    old_price: 288000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 8,
    name: "Ocean Bracelet",
    category: "bracelets",
    image: p8_img,
    sold: 8,
    new_price: 218000,
    old_price: 288000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 9,
    name: "Bracelet",
    category: "bracelets",
    image: p9_img,
    sold: 23,
    new_price: 218000,
    old_price: 288000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 10,
    name: "Bracelet",
    category: "bracelets",
    image: p10_img,
    sold: 21,
    new_price: 218000,
    old_price: 288000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 11,
    name: "Bracelet",
    category: "bracelets",
    image: p11_img,
    sold: 15,
    new_price: 239000,
    old_price: 298000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 12,
    name: "Bracelet",
    category: "bracelets",
    image: p12_img,
    sold: 17,
    new_price: 239000,
    old_price: 298000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 13,
    name: "Bracelet",
    category: "bracelets",
    image: p13_img,
    sold: 22,
    new_price: 795000,
    old_price: 900000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 14,
    name: "Bracelet",
    category: "bracelets",
    image: p14_img,
    sold: 23,
    new_price: 795000,
    old_price: 900000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 15,
    name: "Bracelet",
    category: "bracelets",
    image: p15_img,
    sold: 17,
    new_price: 149000,
    old_price: 225000,
    description: "Bracelets are not just accessories but also symbols of luck and personal style. Made from a variety of materials, each bracelet showcases its own unique beauty. You can choose delicate, slim bracelets to enhance femininity or bold, modern designs to create a striking fashion statement.",
  },
  {
    id: 16,
    name: "Necklace",
    category: "necklaces",
    image: p16_img,
    sold: 222,
    new_price: 149000,
    old_price: 225000,
    description: "Necklaces are an essential piece of jewelry that enhance elegance and sophistication. With a wide range of designs, from simple to luxurious, necklaces allow you to express your personality and unique style. Whether it's a classic necklace or a sparkling gemstone design, each piece exudes a special charm, making it perfect for any occasion, from everyday wear to important events.",
  },
  {
    id: 17,
    name: "Necklace",
    category: "necklaces",
    image: p17_img,
    sold: 100,
    new_price: 149000,
    old_price: 225000,
    description: "Necklaces are an essential piece of jewelry that enhance elegance and sophistication. With a wide range of designs, from simple to luxurious, necklaces allow you to express your personality and unique style. Whether it's a classic necklace or a sparkling gemstone design, each piece exudes a special charm, making it perfect for any occasion, from everyday wear to important events.",
  },
  {
    id: 18,
    name: "Necklace",
    category: "necklaces",
    image: p18_img,
    sold: 45,
    new_price: 148000,
    old_price:  178000,
    description: "Necklaces are an essential piece of jewelry that enhance elegance and sophistication. With a wide range of designs, from simple to luxurious, necklaces allow you to express your personality and unique style. Whether it's a classic necklace or a sparkling gemstone design, each piece exudes a special charm, making it perfect for any occasion, from everyday wear to important events.",
  },
  {
    id: 19,
    name: "Necklace",
    category: "necklaces",
    image: p19_img,
    sold: 123,
    new_price: 148000,
    old_price:  178000,
    description: "Necklaces are an essential piece of jewelry that enhance elegance and sophistication. With a wide range of designs, from simple to luxurious, necklaces allow you to express your personality and unique style. Whether it's a classic necklace or a sparkling gemstone design, each piece exudes a special charm, making it perfect for any occasion, from everyday wear to important events.",
  },
  {
    id: 20,
    name: "Necklace",
    category: "necklaces",
    image: p20_img,
    sold: 4,
    new_price: 148000,
    old_price:  178000,
    description: "Necklaces are an essential piece of jewelry that enhance elegance and sophistication. With a wide range of designs, from simple to luxurious, necklaces allow you to express your personality and unique style. Whether it's a classic necklace or a sparkling gemstone design, each piece exudes a special charm, making it perfect for any occasion, from everyday wear to important events.",
  },
  // {
  //   id: 21,
  //   name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
  //   category: "son",
  //   image: p21_img,
  //   new_price: 179000,
  //   old_price: 228000,
  // },
  // {
  //   id: 22,
  //   name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 899 Đỏ Gạch 1.7g",
  //   category: "son",
  //   image: p22_img,
  //   new_price: 179000,
  //   old_price: 228000,
  // },
  // {
  //   id: 23,
  //   name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 799 Cam Ngả Đất 1.7g",
  //   category: "son",
  //   image: p23_img,
  //   new_price: 179000,
  //   old_price: 228000,
  // },
  // {
  //   id: 24,
  //   name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1288 Gạch Da 1.7g",
  //   category: "son",
  //   image: p24_img,
  //   new_price: 179000,
  //   old_price: 228000,
  // },
  // {
  //   id: 25,
  //   name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 299 Đỏ Thuần 1.7g",
  //   category: "son",
  //   image: p25_img,
  //   new_price: 179000,
  //   old_price: 228000,
  // },
  // {
  //   id: 26,
  //   name: "Son Thỏi 3CE Mịn Lì 222 Step And Go - Đỏ Đất 3.5g",
  //   category: "son",
  //   image: p26_img,
  //   new_price: 304000,
  //   old_price: 380000,
  // },
  // {
  //   id: 27,
  //   name: "Son Thỏi 3CE Mịn Lì 221 Step And Go - Hồng Đất 3.5g",
  //   category: "son",
  //   image: p27_img,
  //   new_price: 304000,
  //   old_price: 380000,
  // },
  // {
  //   id: 28,
  //   name: "Son Thỏi 3CE Mịn Lì 909 Step And Go - Đỏ Gạch 3.5g",
  //   category: "son",
  //   image: p28_img,
  //   new_price: 304000,
  //   old_price: 380000,
  // },
  // {
  //   id: 29,
  //   name: "Son Thỏi Lì 3CE Vỏ Trong Suốt Speak To Me - Đỏ Mận 3.5g",
  //   category: "son",
  //   image: p29_img,
  //   new_price: 304000,
  //   old_price: 380000,
  // },
  // {
  //   id: 30,
  //   name: "Son Thỏi Lì 3CE Vỏ Trong Suốt Red Muse - Đỏ Tươi 3.5g",
  //   category: "son",
  //   image: p30_img,
  //   new_price: 304000,
  //   old_price: 380000,
  // },
];

export default all_product