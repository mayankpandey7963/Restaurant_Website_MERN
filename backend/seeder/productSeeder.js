// seeder/productSeeder.js
import mongoose from 'mongoose';
import Product from '../models/product.js';
import dotenv from 'dotenv';
dotenv.config();
// Load env from parent directory
dotenv.config({ path: '../.env' });
console.log("ENV MONGO_URL:", process.env.MONGO_URL);



const sampleProducts = [
  // Pizza
  {
    title: "Cheese Pizza",
    price: 199,
    discount: 14,
    description: "Delicious cheese pizza",
    imageSrc: "/Junk_Food/Pizza/Cheese_Pizza.jpg",
  },
  {
    title: "BBQ Chicken Pizza",
    price: 199,
    discount: 14,
    description: "Delicious BBQ Chicken pizza",
    imageSrc: "/Junk_Food/Pizza/BBQ-Chicken-Pizza.jpg",
  },
  {
    title: "Farmhouse Pizza",
    price: 199,
    discount: 14,
    description: "Delicious Farmhouse pizza",
    imageSrc: "/Junk_Food/Pizza/Farmhouse-Pizza.jpg",
  },
  {
    title: "Hawaiin Pizza",
    price: 199,
    discount: 14,
    description: "Delicious Hawaiin pizza",
    imageSrc: "/Junk_Food/Pizza/Hawaiian-Pizza.jpg",
  },
  {
    title: "Margherita Pizza",
    price: 199,
    discount: 14,
    description: "Delicious Margherita pizza",
    imageSrc: "/Junk_Food/Pizza/Margherita-Pizza.jpg",
  },
  {
    title: "Pepperoni Pizza",
    price: 199,
    discount: 14,
    description: "Delicious Pepperoni pizza",
    imageSrc: "/Junk_Food/Pizza/pepperoni_pizza.jpeg",
  },
  {
    title: "Supreme Pizza",
    price: 199,
    discount: 14,
    description: "Delicious Supreme Pizza",
    imageSrc: "/Junk_Food/Pizza/Supreme-Pizza.jpg",
  },


  //Roll
  {
    title: "Casesar-Chicken Wrap",
    price: 99,
    discount: 14,
    description: "Spicy Casesar-Chicken Wrap",
    imageSrc: "/Junk_Food/Roll/Casesar-Chicken-Wrap.jpg",
  },
  {
    title: "Chicken Roll",
    price: 99,
    discount: 14,
    description: "Spicy Chicken Roll",
    imageSrc: "/Junk_Food/Roll/Chicken-Roll.jpg",
  },
  {
    title: "Egg Roll",
    price: 99,
    discount: 14,
    description: "Spicy Egg Roll",
    imageSrc: "/Junk_Food/Roll/Egg-Roll.jpg",
  },
  {
    title: "Falafel Wrap",
    price: 99,
    discount: 14,
    description: "Spicy Falafel Wrap",
    imageSrc: "/Junk_Food/Roll/Falafel-Wrap.jpg",
  },
  {
    title: "Kathi-Roll",
    price: 99,
    discount: 14,
    description: "Spicy Kathi Roll",
    imageSrc: "/Junk_Food/Roll/Kathi-Roll.jpg",
  },
  {
    title: "Paneer Wraps",
    price: 99,
    discount: 14,
    description: "Spicy Paneer Wraps",
    imageSrc: "/Junk_Food/Roll/paneer_roll.jpg",
  },
  {
    title: "Vegan Wraps",
    price: 99,
    discount: 14,
    description: "Spicy Vegan Wraps",
    imageSrc: "/Junk_Food/Roll/vegan_wraps.jpeg",
  },
  


  // Fries
  {
    title: "Cheese Fries",
    price: 119,
    discount: 17,
    description: "Crispy fries with spicy cheese.",
    imageSrc: "/Junk_Food/Fries/Cheese_Fries.jpg",
  },
  

  {
    title: "French Fries",
    price: 99,
    discount: 14,
    description: "Perfectly salted, crunchy fries",
    imageSrc: "/Junk_Food/Fries/French_Fries.jpg",
  },
  

  {
    title: "Masala Fries",
    price: 99,
    discount: 14,
    description: "A tangy twist on classic fries",
    imageSrc: "/Junk_Food/Fries/Masala-Fries.jpg",
  },
  

  {
    title: "Potato Wedges",
    price: 99,
    discount: 14,
    description: "Thick-cut wedges, crispy outside, fluffy inside.",
    imageSrc: "/Junk_Food/Fries/Potato Wedges.jpg",
  },
  

  {
    title: "Tater Tots",
    price: 99,
    discount: 14,
    description: "Crunchy on the outside, creamy inside",
    imageSrc: "/Junk_Food/Fries/Tater-Tots.jpg",
  },
  

  // Sandwich
  {
    title: "Chicken Sandwich",
    price: 129,
    discount: 15,
    description: "Juicy grilled chicken, fresh veggies, and creamy mayo layered in toasted buns.",
    imageSrc: "/Junk_Food/Sandwich/Chicken-Sandwich.jpg",
  },


  {
    title: "Club Sandwich",
    price: 149,
    discount: 18,
    description: "Toasted triple-layer sandwich with chicken, veggies & cheese",
    imageSrc: "/Junk_Food/Sandwich/Club-Sandwich.jpg",
  },


  {
    title: "Egg Sandwich",
    price: 59,
    discount: 10,
    description: "Fluffy egg mix layered with veggies in soft bread.",
    imageSrc: "/Junk_Food/Sandwich/Egg-Sandwich.jpg",
  },


  {
    title: "Grilled Cheese Sandwich",
    price: 69,
    discount: 12,
    description: "Crispy grilled bread with melted cheesy goodness.",
    imageSrc: "/Junk_Food/Sandwich/Grilled-Cheese-Sandwich.jpg",
  },


  {
    title: "Paneer Tikka Sandwich",
    price: 89,
    discount: 15,
    description: "Spicy grilled paneer with tangy sauces in a toasted sandwich.",
    imageSrc: "/Junk_Food/Sandwich/Paneer-Tikka-Sandwich.jpg",
  },


  {
    title: "Veg Sandwich",
    price: 59,
    discount: 10,
    description: "Fresh veggies layered with creamy spread in soft bread.",
    imageSrc: "/Junk_Food/Sandwich/Veg-Sandwich.jpg",
  },



  // Hot Dogs
  {
    title: "Cheese Hot Dog",
    price: 79,
    discount: 13,
    description: "Juicy sausage topped with melted cheese in a toasted bun.",
    imageSrc: "/Junk_Food/Hot_Dogs/Cheese-Hot-Dog.jpg",
  },


  {
    title: "Chicago Hot Dog",
    price: 89,
    discount: 13,
    description: "Classic beef sausage with mustard, relish, onions, and pickles in a poppy seed bun.",
    imageSrc: "/Junk_Food/Hot_Dogs/Chicago-Hot-Dog.jpg",
  },


  {
    title: "Chili Hot Dog",
    price: 99,
    discount: 14,
    description: "Juicy sausage topped with spicy chili, onions, and melted cheese in a soft bun.",
    imageSrc: "/Junk_Food/Hot_Dogs/Chili-Hot-Dog.jpg",
  },


  {
    title: "Classic Hot Dog",
    price: 79,
    discount: 10,
    description: "Simple and tasty hot dog with sausage, mustard, and ketchup in a fresh bun.",
    imageSrc: "/Junk_Food/Hot_Dogs/Classic-Hot-Dog.jpg",
  },


  {
    title: "Veggie Hot Dog",
    price: 89,
    discount: 12,
    description: "A plant-based sausage served in a soft bun with fresh veggies and tangy sauces.",
    imageSrc: "/Junk_Food/Hot_Dogs/Veggie-Hot-Dog.jpg",
  },
  


];



const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("DB connected");
    console.log("Connected to DB:", mongoose.connection.name);

    await Product.deleteMany();
    await Product.insertMany(sampleProducts);

    console.log("Products seeded successfully.");
    process.exit();
  } catch (err) {
    console.error("Seeder Error:", err);
    process.exit(1);
  }
};




seedProducts();