const recipesData = [

  {
    id: "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
    name: "Classic Pepperoni Pizza",
    calories: 400,
    image: "https://i.imgur.com/eTmWoAN.png",
    servings: 1,
    type: "Pasta & Pizza",
    ingredients: [
      "1 personal-sized Pizza dough (approx. 150g)",
      "60 ml Tomato sauce (approx. 1/4 cup)",
      "100 g Shredded Mozzarella cheese (approx. 1/2 cup)",
      "10 slices Pepperoni slices",
      "5 ml Olive oil (1 tsp)",
    ],
    instructions:
      "Preheat oven to 230°C (450°F). Lightly stretch dough, brush with olive oil. Spread sauce, top with cheese and pepperoni. Bake for 10-12 minutes or until crust is golden and cheese is bubbly.",
  },
  {
    id: "37e0b31d-63f4-4d42-9f4b-e9a0fc464d60",
    name: "Caesar Salad with Grilled Chicken",
    calories: 320,
    image: "https://i.imgur.com/DupGBz5.jpg",
    servings: 1,
    type: "Salad",
    ingredients: [
      "50 g Romaine lettuce (chopped, approx. 2 cups)",
      "115 g Grilled chicken breast (sliced, approx. 4 oz)",
      "30 g Croutons (approx. 1/4 cup)",
      "15 g Grated Parmesan cheese (2 tbsp)",
      "45 ml Caesar dressing (3 tbsp)",
    ],
    instructions:
      "Wash and chop lettuce. Grill and slice chicken breast. Combine lettuce, chicken, croutons, and Parmesan in a bowl. Toss well with Caesar dressing immediately before serving.",
  },
  {
    id: "b5eb5b5f-41b8-4f1f-8844-7a1a56a17df7",
    name: "Roasted Cod with Asparagus",
    calories: 280,
    image:
      "https://www.eatwell101.com/wp-content/uploads/2020/01/best-cod-recipe-600x400.jpg" /*modify URL*/,
    type: "Fish",
    ingredients: [
      "140 g Cod fillet (approx. 5 oz)",
      "100 g Asparagus spears (approx. 6-8 spears)",
      "2 thin slices Lemon",
      "15 ml Olive oil (1 tbsp)",
      "Pinch of Salt and black pepper",
    ],
    instructions:
      "Preheat oven to 200°C (400°F). On a baking sheet, toss asparagus with half the oil, salt, and pepper. Place cod fillet next to asparagus, drizzle with remaining oil, season, and top with lemon slices. Roast for 12-15 minutes until fish is flaky.",
  },
  {
    id: "6c0f6f33-8c50-403d-9d1c-6ac9d8b77f29",
    name: "Potato Gnocchi with Pesto",
    calories: 500,
    image: "https://i.imgur.com/93ekwW0.jpg",
    servings: 1,
    type: "Pasta & Pizza",
    ingredients: [
      "180 g Potato gnocchi (approx. 1 cup)",
      "60 ml Pesto sauce (basil pesto, approx. 1/4 cup)",
      "80 g Cherry tomatoes (halved, approx. 1/2 cup)",
      "15 g Grated Parmesan cheese (1 tbsp)",
    ],
    instructions:
      "Cook gnocchi in boiling, salted water until they float (about 2-3 minutes). Drain quickly. Return gnocchi to the pot off the heat. Immediately toss with pesto sauce and halved cherry tomatoes. Serve sprinkled with Parmesan cheese.",
  },
  {
    id: "f4b4d2bc-ff12-4f3f-b3b3-19d2f1682401",
    name: "Classic Pot Roast",
    calories: 350,
    image: "https://i.imgur.com/WCzJDWz.jpg",
    servings: 1,
    type: "Meat",
    ingredients: [
      "170 g Beef chuck roast (cooked portion, approx. 6 oz)",
      "75 g Carrots (chopped, approx. 1/2 cup)",
      "80 g Potatoes (cubed, approx. 1/2 cup)",
      "40 g Onion (chopped, approx. 1/4 medium)",
      "240 ml Beef broth (1 cup)",
      "1 sprig Fresh thyme",
    ],
    instructions:
      "Sear beef in a Dutch oven. Add vegetables, broth, and thyme. Bring to a simmer, cover, and cook in the oven at 160°C (325°F) for 3-4 hours until meat is fork-tender. Shred the meat and serve with the vegetables and gravy.",
  },
  {
    id: "bf89c1db-5c5b-4262-9d1e-8a68f88c61d5",
    name: "Meat Lasagna",
    calories: 750,
    image: "https://i.imgur.com/ClxOafl.jpg",
    servings: 1,
    type: "Pasta & Pizza",
    ingredients: [
      "2 Lasagna noodles (cooked)",
      "120 ml Ground beef sauce (Bolognese, approx. 1/2 cup)",
      "60 g Ricotta cheese (approx. 1/4 cup)",
      "60 ml Marinara sauce (approx. 1/4 cup)",
      "60 g Shredded Mozzarella cheese (approx. 1/4 cup)",
    ],
    instructions:
      "In a small oven-safe dish, spread a thin layer of marinara. Layer noodle, ricotta, meat sauce, and mozzarella. Repeat layers if space allows. Top with a final noodle, sauce, and cheese. Bake at 190°C (375°F) for 20 minutes until bubbly.",
  },
  {
    id: "bca9beec-43d3-48b1-9b57-793a8a8c3520",
    name: "Classic Beef Hamburger",
    calories: 400,
    image: "https://i.imgur.com/LoG39wK.jpg",
    servings: 1,
    type: "Meat",
    ingredients: [
      "115 g Ground beef patty (approx. 4 oz)",
      "1 Hamburger bun",
      "1 leaf Lettuce",
      "1 slice Tomato",
      "20 g Cheddar cheese slice (optional)",
    ],
    instructions:
      "Season patty with salt and pepper. Grill or pan-fry patty to desired doneness, adding cheese slice for the last minute. Toast the bun. Assemble the burger with lettuce, tomato, and any desired condiments.",
  },
  {
    id: "b777a69a-7f1c-41e8-8a4c-1d0e9e4cace8",
    name: "Chicken Pad Thai",
    calories: 475,
    image: "https://i.imgur.com/5ktcSzF.jpg",
    servings: 1,
    type: "Asian",
    ingredients: [
      "55 g Rice stick noodles (cooked, approx. 2 oz)",
      "85 g Chicken breast (sliced, approx. 3 oz)",
      "30 g Bean sprouts (approx. 1/4 cup)",
      "60 ml Pad Thai sauce (Tamarind, Fish Sauce, Sugar, approx. 1/4 cup)",
      "1 large Egg",
      "15 g Crushed peanuts (1 tbsp)",
    ],
    instructions:
      "Stir-fry chicken in a wok. Push chicken to the side, scramble the egg. Add cooked noodles and Pad Thai sauce, tossing constantly. Mix in chicken and bean sprouts. Serve hot, garnished with crushed peanuts.",
  },
  {
    id: "d087343e-9a92-48c7-8b27-43e37491b6f5",
    name: "Sizzling Chicken Fajitas",
    calories: 410,
    image:
      "https://b3282088.smushcdn.com/3282088/wp-content/uploads/2024/08/sizzling-chicken-fajitas-768x614.jpeg?lossy=2&strip=1&webp=1",
    servings: 1,
    type: "Mexican",
    ingredients: [
      "115 g Chicken breast strips (approx. 4 oz)",
      "100 g Bell pepper (sliced, mixed colors, approx. 1/2 medium)",
      "40 g Onion (sliced, approx. 1/4 medium)",
      "15 g Fajita seasoning (1 tbsp)",
      "2 small Flour tortillas",
      "30 ml Salsa or pico de gallo (2 tbsp)",
    ],
    instructions:
      "Marinate chicken strips with seasoning. Sauté chicken, peppers, and onion in oil until cooked. Heat tortillas. Serve the mixture sizzling hot with warm tortillas and salsa on the side.",
  },
  {
    id: "e1f87a2e-60b3-4a3f-bb48-20a396a9a94f",
    name: "Sarma (Stuffed Cabbage Rolls)",
    calories: 200,
    image: "https://i.imgur.com/yOlf4Fj.jpg",
    servings: 1,
    type: "Eastern European",
    ingredients: [
      "2 large Sauerkraut leaves",
      "85 g Ground beef/pork mix (approx. 3 oz)",
      "15 g Rice (uncooked, 1 tbsp)",
      "30 g Onion (minced, approx. 1/4 cup)",
      "2.5 ml Smoked paprika (1/2 tsp)",
      "120 ml Beef broth (1/2 cup)",
    ],
    instructions:
      "Mix ground meat, rice, onion, and paprika for the filling. Place filling at the base of each cabbage leaf and roll tightly. Place rolls in a pot, cover with beef broth, and simmer gently for 1.5-2 hours until tender.",
  },
  {
    id: "0ce7e4d4-1c8a-4e9f-98df-1ecb1e7b8a0b",
    name: "Spicy Chicken Curry",
    calories: 450,
    image:
      "https://www.foodandwine.com/thmb/f4uf4WXHz-waXLB_oqG-U1p4Y7A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
    servings: 1,
    type: "Indian",
    ingredients: [
      "115 g Chicken pieces (cubed, approx. 4 oz)",
      "120 ml Coconut milk (1/2 cup)",
      "30 g Red or Green Curry paste (2 tbsp)",
      "40 g Onion (diced, approx. 1/4 medium)",
      "1 clove Garlic (minced)",
      "120 g Cooked white rice (approx. 1/2 cup)",
    ],
    instructions:
      "Sauté onion and garlic. Add curry paste and cook for 1 minute. Add chicken and cook until browned. Pour in coconut milk and a splash of water. Simmer for 10-15 minutes until chicken is fully cooked. Serve hot with rice.",
  },
  {
    id: "bbfd30fd-cd75-4e3b-8fc8-3d3fd62a3c39",
    name: "New York Hot Dog",
    calories: 275,
    image: "https://i.imgur.com/QqVHdRu.jpg",
    servings: 1,
    type: "Meat",
    ingredients: [
      "1 Beef frankfurter (Hot Dog)",
      "1 Hot dog bun",
      "30 ml Yellow Mustard (2 tbsp)",
      "60 g Sauerkraut (optional, approx. 1/4 cup)",
    ],
    instructions:
      "Grill, boil, or steam the frankfurter until heated through. Place it inside the bun. Top generously with yellow mustard and sauerkraut, or any other preferred condiments.",
  },
  {
    id: "1c6d5b5f-4e72-4136-8c6c-9cf3e3d16a65",
    name: "Decadent Chocolate Cake Slice",
    calories: 490,
    image: "https://i.imgur.com/yrgzA9x.jpg",
    servings: 1,
    type: "Dessert",
    ingredients: [
      "100 g Chocolate layer cake slice (approx. 1 slice)",
      "45 g Rich chocolate frosting (3 tbsp)",
      "5 g Powdered sugar (for dusting, 1 tsp)",
    ],
    instructions:
      "This recipe is for a single serving slice. Ensure the cake is chilled. Place on a plate, dust with powdered sugar, and serve with a glass of milk or coffee.",
  },
  {
    id: "07d9616d-7a63-457c-b8a7-58f6a70a67e3",
    name: "Classic Fish and Chips",
    calories: 600,
    image:
      "https://www.allrecipes.com/thmb/t6pfxifuRU5r38-ExsN9GJUe8QU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-16580-Classic-Fish-and-chips-Beauty-4x3-9ca78f2929a64d48ae052008d02358e2.jpg",
    servings: 1,
    type: "Fish",
    ingredients: [
      "140 g Cod or Haddock fillet (approx. 5 oz)",
      "60 g All-purpose flour (for dusting, approx. 1/2 cup)",
      "240 ml Beer batter mix (1 cup)",
      "300 g Potatoes (cut into chips/fries, approx. 2 large)",
      "Salt and malt vinegar (to taste)",
    ],
    instructions:
      "Cut potatoes into thick chips and blanch, then fry until golden. Dust fish with flour, dip in batter, and deep fry until crispy and golden (about 5-7 minutes). Serve hot with salt and malt vinegar.",
  },
  {
    id: "d7a8f0c1-0a34-4e3b-a2d3-3c3e3f11eb19",
    name: "Chicken Tikka Masala",
    calories: 550,
    image:
      "https://realfood.tesco.com/media/images/1400x919-Chicken-tikka-masala-43fcdbd8-eb86-4b55-951d-adda29067afa-0-1400x919.jpg",
    servings: 1,
    type: "Indian",
    ingredients: [
      "115 g Marinated chicken pieces (cooked, approx. 4 oz)",
      "120 ml Tikka Masala sauce (tomato-cream based, 1/2 cup)",
      "45 g Greek yogurt (optional, for garnish, 3 tbsp)",
      "120 g Cooked Basmati rice (approx. 1/2 cup)",
      "1 g Garam masala (1/4 tsp)",
    ],
    instructions:
      "Gently heat the cooked chicken in the Tikka Masala sauce in a saucepan until simmering. Serve the curry over a bed of Basmati rice. Garnish with a spoonful of yogurt and a sprinkle of garam masalla.",
  },
  {
    id: "a8d111c4-50ef-4c61-8b16-17e84a86b2f4",
    name: "Hearty Shepherd's Pie",
    calories: 480,
    image:
      "https://www.reluctantgourmet.com/wp-content/uploads/2023/07/shepherds-pie-r-1024x1024.jpg",
    servings: 1,
    type: "Meat",
    ingredients: [
      "115 g Ground lamb or beef (cooked, approx. 4 oz)",
      "240 g Mashed potatoes (prepared, 1 cup)",
      "60 g Mixed peas and carrots (approx. 1/4 cup)",
      "120 ml Beef stock (for gravy, 1/2 cup)",
      "5 ml Worcestershire sauce (1 tsp)",
    ],
    instructions:
      "Mix the cooked ground meat with the peas, carrots, beef stock, and Worcestershire sauce. Place in a small oven-safe bowl. Top with mashed potatoes, using a fork to create peaks. Bake at 200°C (400°F) for 15 minutes until the topping is browned.",
  },
  {
    id: "6e2a12d8-21c9-4a4b-9e4a-55b5d8f331a9",
    name: "Creamy Red Lentil Soup",
    calories: 210,
    image:
      "https://cdn1.mutti-parma.com/spai/q_glossy+ret_img+to_webp/mutti-parma.com/app/uploads/sites/24/2025/01/vellutata-detox-mutti-2-1024x683.jpg",
    servings: 1,
    type: "Soup",
    ingredients: [
      "100 g Red lentils (split, approx. 1/2 cup)",
      "480 ml Vegetable broth (2 cups)",
      "50 g Carrots (diced, approx. 1/4 cup)",
      "50 g Celery (diced, approx. 1/4 cup)",
      "40 g Onion (diced, approx. 1/4 cup)",
      "15 ml Olive oil (1 tbsp)",
    ],
    instructions:
      "Sauté onion, carrots, and celery in olive oil. Add lentils and vegetable broth. Bring to a boil, then reduce heat and simmer for 20-30 minutes until lentils are soft and the soup has thickened. Blend if a smoother texture is desired.",
  },
  {
    id: "b4c5e3d2-31f4-4a4c-8e4a-93a8d1f23c4d",
    name: "Grilled Salmon with Dill Sauce",
    calories: 380,
    image:
      "https://foodal.com/wp-content/uploads/2022/08/Grilled-Salmon-with-Creamy-Dill-Sauce.jpg",
    servings: 1,
    type: "Fish",
    ingredients: [
      "140 g Salmon fillet (approx. 5 oz)",
      "5 g Fresh dill (chopped, 1 tbsp)",
      "60 g Greek yogurt (plain, approx. 1/4 cup)",
      "5 ml Lemon juice (1 tsp)",
      "5 ml Olive oil (1 tsp)",
      "Salt and pepper (to taste)",
    ],
    instructions:
      "Rub salmon with olive oil, salt, and pepper. Grill or bake until internal temperature reaches 63°C (145°F). Mix yogurt, dill, and lemon juice for the sauce. Serve salmon with the sauce spooned over the top.",
  },
  {
    id: "9d1f3b7c-0c4a-4e2a-9f5a-0d8c7b3e1f2b",
    name: "Hearty Vegetarian Chili",
    calories: 300,
    image:
      "https://www.twopeasandtheirpod.com/wp-content/uploads/2019/12/Hearty-Vegetarian-Chili-1-420x420.jpg",
    servings: 1,
    type: "Vegetarian",
    ingredients: [
      "120 g Kidney beans (canned, rinsed, approx. 1/2 cup)",
      "120 g Black beans (canned, rinsed, approx. 1/2 cup)",
      "120 g Diced tomatoes (canned, approx. 1/2 cup)",
      "40 g Onion (diced, approx. 1/4 medium)",
      "30 g Chili powder (2 tbsp)",
      "240 ml Vegetable stock (1 cup)",
    ],
    instructions:
      "Sauté onion until soft. Add chili powder and cook for 1 minute. Add beans, diced tomatoes, and vegetable stock. Simmer, uncovered, for 30 minutes, stirring occasionally until flavors meld. Serve with your favorite toppings.",
  },
  {
    id: "2a4d6f8e-1c3b-4a5d-9e6f-7b8c9d0a1e2f",
    name: "Spaghetti Carbonara",
    calories: 650,
    image: "https://www.allrecipes.com/thmb/zJzTLhtUWknHXVoFIzysljJ9wR8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    servings: 1,
    type: "Pasta & Pizza",
    ingredients: [
      "55 g Spaghetti (approx. 2 oz)",
      "30 g Guanciale or Pancetta (diced, approx. 1 oz)",
      "1 large Egg yolk",
      "25 g Grated Pecorino Romano cheese (approx. 1/4 cup)",
      "Freshly ground black pepper",
    ],
    instructions:
      "Cook spaghetti until al dente. While cooking, fry guanciale/pancetta until crispy. In a bowl, mix egg yolk, cheese, and pepper. Drain pasta, reserving 60 ml (1/4 cup) of pasta water. Toss pasta with guanciale and the egg/cheese mixture off the heat, adding pasta water gradually until a creamy sauce forms. Serve immediately.",
  },
  {
    id: "5b7a9d1c-8e0f-4f2e-a3b1-6c4d8e2f0a1b",
    name: "Chicken and Vegetable Stir-Fry",
    calories: 360,
    image: "https://easyfamilyrecipes.com/wp-content/uploads/2024/07/Chicken-Veggie-Stir-Fry-horizontal-768x512.jpg",
    servings: 1,
    type: "Asian",
    ingredients: [
      "115 g Chicken strips (sliced, approx. 4 oz)",
      "120 g Mixed vegetables (broccoli, carrots, snow peas, approx. 1 cup)",
      "30 ml Soy sauce (2 tbsp)",
      "5 ml Sesame oil (1 tsp)",
      "1 clove Garlic (minced)",
      "120 g Cooked brown rice (approx. 1/2 cup)",
    ],
    instructions:
      "Heat sesame oil in a wok or large pan. Stir-fry chicken until cooked. Add vegetables and cook until crisp-tender (about 3-5 minutes). Whisk together soy sauce and garlic, then pour over the chicken and vegetables. Toss to coat and serve immediately over brown rice.",
  },
];

export default recipesData;