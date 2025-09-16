import { createSlice } from "@reduxjs/toolkit";
import ToggleFavorite from "../Components/ToggleFavorite";
import { useState } from "react";

let categoryId = 1;
let recipeId = 1;
const initialValue = {
    recipesByCategory: [
        {
            categoryId: categoryId++,
            categoryName: "Cakes",
            categoryImage: "",
            recipes: [
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Chocolate Cake",
                    preparationTime: "45 minutes",
                    ingredients: [
                        { ingredient: "Flour", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "1.5 cups" },
                        { ingredient: "Cocoa powder", quantity: "0.75 cups" },
                        { ingredient: "Eggs", quantity: "3" },
                        { ingredient: "Oil", quantity: "0.5 cup" }
                    ],
                    kosher: "Parve",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, mix together the flour, sugar, cocoa powder, and oil.",
                        "Add the eggs and mix until well combined.",
                        "Pour the batter into a greased cake pan.",
                        "Bake for 30-35 minutes or until a toothpick comes out clean."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Vanilla Sponge Cake",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Flour", quantity: "1.5 cups" },
                        { ingredient: "Sugar", quantity: "1 cup" },
                        { ingredient: "Eggs", quantity: "4" },
                        { ingredient: "Butter", quantity: "0.5 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together the butter and sugar.",
                        "Add the eggs one at a time, mixing well after each addition.",
                        "Gradually add the flour and mix until smooth.",
                        "Pour into a greased cake pan and bake for 25-30 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Carrot Cake",
                    preparationTime: "50 minutes",
                    ingredients: [
                        { ingredient: "Carrots", quantity: "2 cups (grated)" },
                        { ingredient: "Flour", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "1.5 cups" },
                        { ingredient: "Eggs", quantity: "3" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, mix the grated carrots, sugar, and eggs.",
                        "Add the flour and mix until well combined.",
                        "Pour the batter into a greased cake pan.",
                        "Bake for 40-45 minutes or until a toothpick comes out clean."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Red Velvet Cake",
                    preparationTime: "60 minutes",
                    ingredients: [
                        { ingredient: "Flour", quantity: "2.5 cups" },
                        { ingredient: "Sugar", quantity: "1.5 cups" },
                        { ingredient: "Cocoa powder", quantity: "1 tablespoon" },
                        { ingredient: "Eggs", quantity: "2" },
                        { ingredient: "Buttermilk", quantity: "1 cup" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, mix the flour, sugar, cocoa powder, and buttermilk.",
                        "Add the eggs and mix until well combined.",
                        "Pour the batter into a greased cake pan.",
                        "Bake for 30-35 minutes or until a toothpick comes out clean."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Vanilla Cupcakes",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "All-purpose flour", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "1 cup" },
                        { ingredient: "Baking powder", quantity: "1.5 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" },
                        { ingredient: "Milk", quantity: "1 cup" },
                        { ingredient: "Butter", quantity: "0.5 cup" },
                        { ingredient: "Vanilla extract", quantity: "2 tsp" },
                        { ingredient: "Eggs", quantity: "2" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, mix flour, sugar, baking powder, and salt.",
                        "In another bowl, combine milk, melted butter, vanilla, and eggs.",
                        "Pour wet ingredients into dry ingredients and mix until combined.",
                        "Fill cupcake liners and bake for 18-20 minutes or until a toothpick comes out clean."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                        name: "Lemon Drizzle Cake",
                        preparationTime: "55 minutes",
                        ingredients: [
                            { ingredient: "All-purpose flour", quantity: "2 cups" },
                            { ingredient: "Sugar", quantity: "1 cup" },
                            { ingredient: "Butter", quantity: "0.5 cup" },
                            { ingredient: "Eggs", quantity: "3" },
                            { ingredient: "Lemon zest", quantity: "2 tbsp" },
                            { ingredient: "Lemon juice", quantity: "0.5 cup" },
                            { ingredient: "Baking powder", quantity: "2 tsp" },
                            { ingredient: "Salt", quantity: "1/2 tsp" }
                        ],
                        kosher: "Dairy",
                        isFavorite: false,
                        instructions: [
                            "Preheat the oven to 350°F (175°C).",
                            "In a bowl, cream together the butter and sugar until light and fluffy.",
                            "Add the eggs one at a time, mixing well after each addition.",
                            "Stir in the lemon zest and juice.",
                            "In another bowl, combine the flour, baking powder, and salt.",
                            "Gradually add the dry ingredients to the wet mixture, mixing until just combined.",
                            "Pour the batter into a greased loaf pan.",
                            "Bake for 40-45 minutes or until a toothpick comes out clean."
                        ]
                    }
                    
                
            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Fish",
            categoryImage: "",
            recipes: [
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Grilled Salmon",
                    preparationTime: "20 minutes",
                    ingredients: [
                        { ingredient: "Salmon fillet", quantity: "1 lb" },
                        { ingredient: "Lemon", quantity: "1 (sliced)" },
                        { ingredient: "Dill", quantity: "2 tablespoons" },
                        { ingredient: "Olive oil", quantity: "2 tablespoons" }
                    ],
                    kosher: "Fish",
                    isFavorite: false,
                    instructions: [
                        "Preheat the grill to medium-high heat.",
                        "Brush the salmon with olive oil and season with dill.",
                        "Place lemon slices on top of the salmon.",
                        "Grill for 5-7 minutes on each side or until cooked through."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Baked Cod",
                    preparationTime: "25 minutes",
                    ingredients: [
                        { ingredient: "Cod fillet", quantity: "1 lb" },
                        { ingredient: "Lemon juice", quantity: "2 tablespoons" },
                        { ingredient: "Garlic", quantity: "2 cloves (minced)" },
                        { ingredient: "Parsley", quantity: "2 tablespoons" }
                    ],
                    kosher: "Fish",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 400°F (200°C).",
                        "Place the cod in a baking dish and drizzle with lemon juice.",
                        "Sprinkle minced garlic and parsley on top.",
                        "Bake for 15-20 minutes or until the fish flakes easily with a fork."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Tuna Salad",
                    preparationTime: "15 minutes",
                    ingredients: [
                        { ingredient: "Canned tuna", quantity: "1 can" },
                        { ingredient: "Mayonnaise", quantity: "0.5 cups" },
                        { ingredient: "Celery", quantity: "1 stalk (chopped)" },
                        { ingredient: "Onion", quantity: "0.25 cup (chopped)" }
                    ],
                    kosher: "Fish",
                    isFavorite: false,
                    instructions: [
                        "In a bowl, combine the canned tuna, mayonnaise, celery, and onion.",
                        "Mix until well combined.",
                        "Serve on bread or over a bed of lettuce."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Fish Tacos",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Fish fillet", quantity: "1 lb" },
                        { ingredient: "Tortillas", quantity: "4" },
                        { ingredient: "Cabbage", quantity: "1 cup (shredded)" },
                        { ingredient: "Sour cream", quantity: "0.5 cups" }
                    ],
                    kosher: "Fish",
                    isFavorite: false,
                    instructions: [
                        "Cook the fish in a skillet over medium heat until cooked through.",
                        "Warm the tortillas in a separate pan.",
                        "Assemble the tacos by placing fish in the tortillas, topping with cabbage and sour cream."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Salmon and Vegetable Stir-Fry",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Salmon fillet", quantity: "1 lb" },
                        { ingredient: "Vegetables", quantity: "1 medium onion, chopped" },
                        { ingredient: "Garlic", quantity: "2 cloves (minced)" },
                        { ingredient: "Olive oil", quantity: "2 tablespoons" },
                    ],
                    kosher: "Fish",
                    isFavorite: false,
                    instructions: [
                        "Cook the salmon in a skillet over medium heat until cooked through.",
                        "In a separate pan, heat the olive oil over medium heat.",
                        "Add the onion, garlic, and cooked salmon to the pan.",
                        "Stir-fry for 3-4 minutes until the vegetables are tender.",
                        "Serve the stir-fry over a bed of apple pie crust."
                    ]
                }
                
            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Pies",
            categoryImage: "",
            recipes: [
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Apple Pie",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Apples", quantity: "6 (sliced)" },
                        { ingredient: "Sugar", quantity: "0.75 cups" },
                        { ingredient: "Cinnamon", quantity: "1 teaspoon" },
                        { ingredient: "Pie crust", quantity: "1" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 425°F (220°C).",
                        "In a bowl, mix sliced apples with sugar and cinnamon.",
                        "Place the apple mixture into the pie crust.",
                        "Cover with another layer of pie crust and cut slits for steam.",
                        "Bake for 45-50 minutes or until the crust is golden brown."
                    ]
                },
                {
                    recipeId: recipeId++, get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Pumpkin Pie",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Pumpkin puree", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "1 cup" },
                        { ingredient: "Eggs", quantity: "3" },
                        { ingredient: "Pie crust", quantity: "1" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 425°F (220°C).",
                        "In a bowl, mix pumpkin puree, sugar, and eggs until smooth.",
                        "Pour the mixture into the pie crust.",
                        "Bake for 40-45 minutes or until the filling is set."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Cherry Pie",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Cherries", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "0.5 cups" },
                        { ingredient: "Cornstarch", quantity: "2 tablespoons" },
                        { ingredient: "Pie crust", quantity: "1" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 425°F (220°C).",
                        "In a bowl, mix cherries with sugar and cornstarch.",
                        "Place the cherry mixture into the pie crust.",
                        "Cover with another layer of pie crust and cut slits for steam.",
                        "Bake for 45-50 minutes or until the crust is golden brown."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Blueberry Pie",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Blueberries", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "0.75 cups" },
                        { ingredient: "Lemon juice", quantity: "1 tablespoon" },
                        { ingredient: "Pie crust", quantity: "1" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 425°F (220°C).",
                        "In a bowl, mix blueberries with sugar and lemon juice.",
                        "Place the blueberry mixture into the pie crust.",
                        "Cover with another layer of pie crust and cut slits for steam.",
                        "Bake for 45-50 minutes or until the crust is golden brown."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Pecan Pie",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Pecans", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "0.5 cups" },
                        { ingredient: "Pie crust", quantity: "1" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 425°F (220°C).",
                        "In a bowl, mix pecans with sugar.",
                        "Pour the mixture into the pie crust.",
                        "Bake for 40-45 minutes or until the crust is golden brown."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Raspberry Pie",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Raspberries", quantity: "2 cups" },
                        { ingredient: "Sugar", quantity: "0.5 cups" },
                        { ingredient: "Pie crust", quantity: "1" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 425°F (220°C).",
                        "In a bowl, mix raspberries with sugar.",
                        "Pour the mixture into the pie crust.",
                        "Bake for 40-45 minutes or until the crust is golden brown."
                    ]

                }
            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Soups",
            categoryImage: "",
            recipes: [
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Tomato Soup",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Tomatoes", quantity: "4 cups (chopped)" },
                        { ingredient: "Onion", quantity: "1 (chopped)" },
                        { ingredient: "Garlic", quantity: "2 cloves (minced)" },
                        { ingredient: "Basil", quantity: "1 teaspoon" },
                        { ingredient: "Cream", quantity: "0.5 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "In a pot, sauté onion and garlic until translucent.",
                        "Add chopped tomatoes and basil, and cook for 15 minutes.",
                        "Blend the mixture until smooth and stir in cream.",
                        "Simmer for an additional 5 minutes before serving."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Chicken Noodle Soup",
                    preparationTime: "45 minutes",
                    ingredients: [
                        { ingredient: "Chicken", quantity: "1 lb (shredded)" },
                        { ingredient: "Noodles", quantity: "2 cups" },
                        { ingredient: "Carrots", quantity: "2 (sliced)" },
                        { ingredient: "Celery", quantity: "2 stalks (sliced)" },
                        { ingredient: "Broth", quantity: "6 cups" }
                    ],
                    kosher: "Poultry",
                    isFavorite: false,
                    instructions: [
                        "In a large pot, bring the broth to a boil.",
                        "Add the shredded chicken, noodles, carrots, and celery.",
                        "Cook until the noodles are tender, about 15 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Minestrone Soup",
                    preparationTime: "1 hour",
                    ingredients: [
                        { ingredient: "Vegetable broth", quantity: "4 cups" },
                        { ingredient: "Tomatoes", quantity: "2 (diced)" },
                        { ingredient: "Carrots", quantity: "1 (diced)" },
                        { ingredient: "Zucchini", quantity: "1 (diced)" },
                        { ingredient: "Pasta", quantity: "1 cup" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "In a pot, bring the vegetable broth to a boil.",
                        "Add diced tomatoes, carrots, zucchini, and pasta.",
                        "Cook until the vegetables are tender and pasta is cooked."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Lentil Soup",
                    preparationTime: "40 minutes",
                    ingredients: [
                        { ingredient: "Lentils", quantity: "1 cup" },
                        { ingredient: "Carrots", quantity: "2 (diced)" },
                        { ingredient: "Onion", quantity: "1 (chopped)" },
                        { ingredient: "Celery", quantity: "2 stalks (diced)" },
                        { ingredient: "Vegetable broth", quantity: "4 cups" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "In a pot, sauté onion, carrots, and celery until softened.",
                        "Add lentils and vegetable broth, and bring to a boil.",
                        "Reduce heat and simmer until lentils are tender, about 30 minutes."
                    ]
                },
               
            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Salads",
            categoryImage: "",
            recipes: [
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Caesar Salad",
                    preparationTime: "15 minutes",
                    ingredients: [
                        { ingredient: "Romaine lettuce", quantity: "1 head" },
                        { ingredient: "Croutons", quantity: "1 cup" },
                        { ingredient: "Parmesan cheese", quantity: "0.5 cups (shredded)" },
                        { ingredient: "Caesar dressing", quantity: "0.5 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Chop the romaine lettuce and place in a large bowl.",
                        "Add croutons and Parmesan cheese.",
                        "Drizzle with Caesar dressing and toss to combine."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Greek Salad",
                    preparationTime: "10 minutes",
                    ingredients: [
                        { ingredient: "Cucumbers", quantity: "2 (diced)" },
                        { ingredient: "Tomatoes", quantity: "2 (diced)" },
                        { ingredient: "Feta cheese", quantity: "0.5 cups (crumbled)" },
                        { ingredient: "Olives", quantity: "0.5 cups" },
                        { ingredient: "Olive oil", quantity: "2 tablespoons" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "In a bowl, combine diced cucumbers, tomatoes, and olives.",
                        "Add crumbled feta cheese and drizzle with olive oil.",
                        "Toss gently to combine."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Caprese Salad",
                    preparationTime: "10 minutes",
                    ingredients: [
                        { ingredient: "Tomatoes", quantity: "2 (sliced)" },
                        { ingredient: "Mozzarella cheese", quantity: "0.5 cups (sliced)" },
                        { ingredient: "Basil", quantity: "0.25 cups" },
                        { ingredient: "Balsamic glaze", quantity: "2 tablespoons" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Layer the sliced tomatoes and mozzarella cheese on a plate.",
                        "Sprinkle fresh basil on top.",
                        "Drizzle with balsamic glaze before serving."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Quinoa Salad",
                    preparationTime: "20 minutes",
                    ingredients: [
                        { ingredient: "Quinoa", quantity: "1 cup (cooked)" },
                        { ingredient: "Bell pepper", quantity: "1 (diced)" },
                        { ingredient: "Corn", quantity: "1 cup" },
                        { ingredient: "Black beans", quantity: "1 cup" },
                        { ingredient: "Lime juice", quantity: "2 tablespoons" }
                    ],
                    kosher: "Pareve",
                    isFavorite: false,
                    instructions: [
                        "In a bowl, combine cooked quinoa, diced bell pepper, corn, and black beans.",
                        "Drizzle with lime juice and toss to combine."
                    ]
                }
            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Pasta",
            categoryImage: "",
            recipes: [
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Spaghetti Bolognese",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Spaghetti", quantity: "1 lb" },
                        { ingredient: "Ground beef", quantity: "1 lb" },
                        { ingredient: "Tomato sauce", quantity: "2 cups" },
                        { ingredient: "Onion", quantity: "1 (chopped)" },
                        { ingredient: "Garlic", quantity: "2 cloves (minced)" }
                    ],
                    kosher: "Poultry",
                    isFavorite: false,
                    instructions: [
                        "Cook spaghetti according to package instructions.",
                        "In a pan, sauté onion and garlic until translucent.",
                        "Add ground beef and cook until browned.",
                        "Stir in tomato sauce and simmer for 10 minutes.",
                        "Serve sauce over spaghetti."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Penne Alfredo",
                    preparationTime: "25 minutes",
                    ingredients: [
                        { ingredient: "Penne pasta", quantity: "1 lb" },
                        { ingredient: "Heavy cream", quantity: "1 cup" },
                        { ingredient: "Parmesan cheese", quantity: "0.5 cups" },
                        { ingredient: "Butter", quantity: "0.5 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Cook penne pasta according to package instructions.",
                        "In a pan, melt butter and stir in heavy cream.",
                        "Add Parmesan cheese and stir until melted.",
                        "Toss cooked penne in the Alfredo sauce before serving."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Macaroni and Cheese",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Macaroni", quantity: "1 lb" },
                        { ingredient: "Cheddar cheese", quantity: "2 cups (shredded)" },
                        { ingredient: "Milk", quantity: "1 cup" },
                        { ingredient: "Butter", quantity: "0.25 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Cook macaroni according to package instructions.",
                        "In a pot, melt butter and stir in milk.",
                        "Add shredded cheddar cheese and stir until melted.",
                        "Mix in cooked macaroni and serve."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Fettuccine Carbonara",
                    preparationTime: "20 minutes",
                    ingredients: [
                        { ingredient: "Fettuccine", quantity: "1 lb" },
                        { ingredient: "Bacon", quantity: "0.5 lb" },
                        { ingredient: "Eggs", quantity: "3" },
                        { ingredient: "Parmesan cheese", quantity: "0.5 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Cook fettuccine according to package instructions.",
                        "In a pan, cook bacon until crispy and set aside.",
                        "In a bowl, whisk together eggs and Parmesan cheese.",
                        "Toss hot fettuccine with bacon and egg mixture until creamy."
                    ]
                },
                {

                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Pasta Primavera",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Pasta", quantity: "200 grams" },
                        { ingredient: "Bell peppers", quantity: "1 cup, sliced" },
                        { ingredient: "Zucchini", quantity: "1 cup, sliced" },
                        { ingredient: "Olive oil", quantity: "2 tablespoons" },
                        { ingredient: "Garlic", quantity: "2 cloves, minced" },
                        { ingredient: "Parmesan cheese", quantity: "1/2 cup, grated" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Cook the pasta according to package instructions.",
                        "In a pan, heat olive oil and sauté garlic until fragrant.",
                        "Add bell peppers and zucchini, cooking until tender.",
                        "Mix in the cooked pasta and toss with Parmesan cheese.",
                        "Serve warm."
                    ]
                },
                {
                recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Margherita Pasta",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "Pasta", quantity: "200 grams" },
                        { ingredient: "Mozzarella cheese", quantity: "1/2 cup, grated" },
                        { ingredient: "Bell peppers", quantity: "1 cup, sliced" },
                        { ingredient: "Mushrooms", quantity: "1 cup, sliced" },
                        { ingredient: "Olive oil", quantity: "2 tablespoons" },
                        { ingredient: "Garlic", quantity: "2 cloves, minced" },
                        { ingredient: "Red onion", quantity: "1/2 cup, chopped" },
                        { ingredient: "Basil", quantity: "1/2 cup, chopped" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Cook the pasta according to package instructions.",
                        "In a pan, heat olive oil and sauté garlic until fragrant.",
                        "Add bell peppers, mushrooms, and red onion, cooking until tender.",
                        "Mix in the cooked pasta and toss with mozzarella cheese.",
                        "Serve warm."
                    ]
                    },
                    


                
    


            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Cookies",
            categoryImage: "",
            recipes: [
                {
                    recipeId:recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Chocochips Cookies",
                    preparationTime: "20 minutes",
                    ingredients: [
                        { ingredient: "All-purpose flour", quantity: "2.5 cups" },
                        { ingredient: "Brown sugar", quantity: "1 cup" },
                        { ingredient: "Granulated sugar", quantity: "0.5 cup" },
                        { ingredient: "Butter", quantity: "1 cup, softened" },
                        { ingredient: "Eggs", quantity: "2" },
                        { ingredient: "Vanilla extract", quantity: "1 tsp" },
                        { ingredient: "Baking soda", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" },
                        { ingredient: "Chocolate chips", quantity: "2 cups" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together butter, brown sugar, and granulated sugar.",
                        "Beat in eggs one at a time, then stir in vanilla.",
                        "Combine flour, baking soda, and salt in a separate bowl.",
                        "Gradually blend the dry ingredients into the wet mixture.",
                        "Fold in chocolate chips.",
                        "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Oatmeal Cookies",
                    preparationTime: "25 minutes",
                    ingredients: [
                        { ingredient: "All-purpose flour", quantity: "1.5 cups" },
                        { ingredient: "Oats", quantity: "1 cup" },
                        { ingredient: "Brown sugar", quantity: "1 cup" },
                        { ingredient: "Butter", quantity: "0.5 cup, softened" },
                        { ingredient: "Eggs", quantity: "2" },
                        { ingredient: "Raisins", quantity: "1 cup" },
                        { ingredient: "Cinnamon", quantity: "1 tsp" },
                        { ingredient: "Baking soda", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together butter and brown sugar.",
                        "Beat in eggs one at a time.",
                        "In another bowl, mix flour, oats, cinnamon, baking soda, and salt.",
                        "Gradually add dry ingredients to the wet mixture.",
                        "Fold in raisins.",
                        "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Peanut Cookies",
                    preparationTime: "15 minutes",
                    ingredients: [
                        { ingredient: "Peanut butter", quantity: "1 cup" },
                        { ingredient: "Granulated sugar", quantity: "1 cup" },
                        { ingredient: "Eggs", quantity: "1" },
                        { ingredient: "Baking soda", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, mix peanut butter, sugar, and egg until smooth.",
                        "Stir in baking soda and salt.",
                        "Drop spoonfuls onto a baking sheet and flatten with a fork.",
                        "Bake for 10-12 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Sugar Cookies",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "All-purpose flour", quantity: "2 cups" },
                        { ingredient: "Granulated sugar", quantity: "1 cup" },
                        { ingredient: "Butter", quantity: "0.5 cup, softened" },
                        { ingredient: "Eggs", quantity: "1" },
                        { ingredient: "Vanilla extract", quantity: "1 tsp" },
                        { ingredient: "Baking powder", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together butter and sugar.",
                        "Beat in egg and vanilla.",
                        "In another bowl, mix flour, baking powder, and salt.",
                        "Gradually add dry ingredients to the wet mixture.",
                        "Roll into balls and place on a baking sheet.",
                        "Flatten slightly and bake for 8-10 minutes."
                    ]
                },
                
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Lemon Cookies",
                    preparationTime: "25 minutes",
                    ingredients: [
                        { ingredient: "All-purpose flour", quantity: "2 cups" },
                        { ingredient: "Granulated sugar", quantity: "1 cup" },
                        { ingredient: "Butter", quantity: "0.5 cup, softened" },
                        { ingredient: "Egg", quantity: "1" },
                        { ingredient: "Lemon zest", quantity: "1 tbsp" },
                        { ingredient: "Lemon juice", quantity: "2 tbsp" },
                        { ingredient: "Baking powder", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together butter and sugar.",
                        "Beat in egg, lemon zest, and lemon juice.",
                        "In another bowl, mix flour, baking powder, and salt.",
                        "Gradually add dry ingredients to the wet mixture.",
                        "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "Almond Cookies",
                    preparationTime: "25 minutes",
                    ingredients: [
                        { ingredient: "Almond butter", quantity: "1 cup" },
                        { ingredient: "Granulated sugar", quantity: "1 cup" },
                        { ingredient: "Eggs", quantity: "1" },
                        { ingredient: "Baking soda", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together almond butter and sugar.",
                        "Beat in eggs one at a time.",
                        "In another bowl, mix flour, baking soda, and salt.",
                        "Gradually add dry ingredients to the wet mixture.",
                        "Roll into balls and place on a baking sheet.",
                        "Flatten slightly and bake for 8-10 minutes."
                    ]
                },
                {
                    recipeId: recipeId++,
                    get image() {
                        return `/images/${this.recipeId}.jpg`;
                    },
                    name: "M&M Cookies",
                    preparationTime: "30 minutes",
                    ingredients: [
                        { ingredient: "All-purpose flour", quantity: "2.5 cups" },
                        { ingredient: "Sugar", quantity: "1 cup" },
                        { ingredient: "Brown sugar", quantity: "1 cup" },
                        { ingredient: "Butter", quantity: "1 cup, softened" },
                        { ingredient: "Eggs", quantity: "2" },
                        { ingredient: "Vanilla extract", quantity: "1 tsp" },
                        { ingredient: "Baking soda", quantity: "1 tsp" },
                        { ingredient: "Salt", quantity: "0.5 tsp" },
                        { ingredient: "M&M candies", quantity: "1 cup" }
                    ],
                    kosher: "Dairy",
                    isFavorite: false,
                    instructions: [
                        "Preheat the oven to 350°F (175°C).",
                        "In a bowl, cream together butter, sugar, and brown sugar.",
                        "Beat in eggs one at a time, then stir in vanilla.",
                        "In another bowl, combine flour, baking soda, and salt.",
                        "Gradually blend the dry ingredients into the wet mixture.",
                        "Fold in M&M candies.",
                        "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes."
                    ]
                }
            ]
            
        },
        {
            categoryId: categoryId++,
            categoryName: "Breads",
            categoryImage: "",
            recipes: [
                    {
                        recipeId:recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Sourdough Bread",
                        preparationTime: "24 hours (including fermentation)",
                        ingredients: [
                            { ingredient: "All-purpose flour", quantity: "500g" },
                            { ingredient: "Water", quantity: "350ml" },
                            { ingredient: "Sourdough starter", quantity: "100g" },
                            { ingredient: "Salt", quantity: "10g" }
                        ],
                        kosher: "Pareve",
                        isFavorite: false,
                        instructions: [
                            "Mix flour, water, and sourdough starter in a bowl.",
                            "Let it rest for 30 minutes.",
                            "Add salt and knead for 10 minutes.",
                            "Let the dough rise for 12-16 hours at room temperature.",
                            "Shape the dough and let it rise for another 2-3 hours.",
                            "Preheat the oven to 450°F (230°C).",
                            "Bake for 30-35 minutes."
                        ]
                    },
                    {
                        recipeId: recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Whole Wheat Bread",
                        preparationTime: "3 hours",
                        ingredients: [
                            { ingredient: "Whole wheat flour", quantity: "500g" },
                            { ingredient: "Water", quantity: "300ml" },
                            { ingredient: "Yeast", quantity: "7g" },
                            { ingredient: "Salt", quantity: "10g" },
                            { ingredient: "Honey", quantity: "2 tbsp" }
                        ],
                        kosher: "Pareve",
                        isFavorite: false,
                        instructions: [
                            "Dissolve yeast in warm water with honey.",
                            "In a bowl, mix whole wheat flour and salt.",
                            "Add the yeast mixture and knead for 10 minutes.",
                            "Let the dough rise for 1-2 hours.",
                            "Shape into a loaf and let rise for another hour.",
                            "Preheat the oven to 375°F (190°C).",
                            "Bake for 25-30 minutes."
                        ]
                    },
                    {
                        recipeId: recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Focaccia",
                        preparationTime: "2.5 hours",
                        ingredients: [
                            { ingredient: "All-purpose flour", quantity: "500g" },
                            { ingredient: "Water", quantity: "350ml" },
                            { ingredient: "Yeast", quantity: "7g" },
                            { ingredient: "Salt", quantity: "10g" },
                            { ingredient: "Olive oil", quantity: "50ml" },
                            { ingredient: "Rosemary", quantity: "to taste" }
                        ],
                        kosher: "Pareve",
                        isFavorite: false,
                        instructions: [
                            "Dissolve yeast in warm water.",
                            "In a bowl, mix flour and salt.",
                            "Add the yeast mixture and olive oil, knead for 10 minutes.",
                            "Let rise for 1-2 hours.",
                            "Spread the dough in a greased pan, dimple the surface, and sprinkle with rosemary.",
                            "Let rise for another hour.",
                            "Preheat the oven to 425°F (220°C).",
                            "Bake for 20-25 minutes."
                        ]
                    },
                    {
                        recipeId: recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Rye Bread",
                        preparationTime: "3 hours",
                        ingredients: [
                            { ingredient: "Rye flour", quantity: "500g" },
                            { ingredient: "Water", quantity: "350ml" },
                            { ingredient: "Yeast", quantity: "7g" },
                            { ingredient: "Salt", quantity: "10g" },
                            { ingredient: "Caraway seeds", quantity: "1 tsp" }
                        ],
                        kosher: "Pareve",
                        isFavorite: false,
                        instructions: [
                            "Dissolve yeast in warm water.",
                            "In a bowl, mix rye flour, salt, and caraway seeds.",
                            "Add the yeast mixture and knead for 10 minutes.",
                            "Let rise for 1-2 hours.",
                            "Shape into a loaf and let rise for another hour.",
                            "Preheat the oven to 375°F (190°C).",
                            "Bake for 30-35 minutes."
                        ]
                    },
                    {
                        recipeId: recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Banana Bread",
                        preparationTime: "1.5 hours",
                        ingredients: [
                            { ingredient: "Ripe bananas", quantity: "3" },
                            { ingredient: "All-purpose flour", quantity: "250g" },
                            { ingredient: "Sugar", quantity: "150g" },
                            { ingredient: "Eggs", quantity: "2" },
                            { ingredient: "Baking soda", quantity: "1 tsp" },
                            { ingredient: "Salt", quantity: "0.5 tsp" },
                            { ingredient: "Butter", quantity: "100g, melted" }
                        ],
                        kosher: "Dairy",
                        isFavorite: false,
                        instructions: [
                            "Preheat the oven to 350°F (175°C).",
                            "In a bowl, mash the bananas.",
                            "Add melted butter, sugar, eggs, and mix well.",
                            "In another bowl, mix flour, baking soda, and salt.",
                            "Gradually add dry ingredients to the wet mixture.",
                            "Pour into a greased loaf pan and bake for 60 minutes."
                        ]
                    },
                    {
                        recipeId: recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Garlic Bread",
                        preparationTime: "30 minutes",
                        ingredients: [
                            { ingredient: "French bread", quantity: "1 loaf" },
                            { ingredient: "Butter", quantity: "100g, softened" },
                            { ingredient: "Garlic", quantity: "4 cloves, minced" },
                            { ingredient: "Parsley", quantity: "2 tbsp, chopped" },
                            { ingredient: "Salt", quantity: "1/4 tsp" }
                        ],
                        kosher: "Dairy",
                        isFavorite: false,
                        instructions: [
                            "Preheat the oven to 375°F (190°C).",
                            "In a bowl, mix softened butter, garlic, parsley, and salt.",
                            "Slice the French bread in half lengthwise.",
                            "Spread the garlic butter mixture on both halves.",
                            "Wrap in foil and bake for 15-20 minutes."
                        ]
                    },
                    {
                        recipeId: recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Ciabatta",
                        preparationTime: "18 hours (including fermentation)",
                        ingredients: [
                            { ingredient: "All-purpose flour", quantity: "500g" },
                            { ingredient: "Water", quantity: "400ml" },
                            { ingredient: "Yeast", quantity: "7g" },
                            { ingredient: "Salt", quantity: "10g" }
                        ],
                        kosher: "Pareve",
                        isFavorite: false,
                        instructions: [
                            "Mix flour, water, and yeast in a bowl.",
                            "Let it rest for 12-16 hours at room temperature.",
                            "Add salt and knead lightly.",
                            "Shape the dough into loaves and let rise for 1-2 hours.",
                            "Preheat the oven to 475°F (245°C).",
                            "Bake for 25-30 minutes."
                        ]
                    },
                    {
                        recipeId:recipeId++,
                        get image() {
                            return `/images/${this.recipeId}.jpg`;
                        },
                        name: "Pita Bread",
                        preparationTime: "2 hours",
                        ingredients: [
                            { ingredient: "All-purpose flour", quantity: "500g" },
                            { ingredient: "Water", quantity: "300ml" },
                            { ingredient: "Yeast", quantity: "7g" },
                            { ingredient: "Salt", quantity: "10g" },
                            { ingredient: "Olive oil", quantity: "2 tbsp" }
                        ],
                        kosher: "Pareve",
                        isFavorite: false,
                        instructions: [
                            "Dissolve yeast in warm water.",
                            "In a bowl, mix flour and salt.",
                            "Add the yeast mixture and olive oil, knead for 10 minutes.",
                            "Let the dough rise for 1-2 hours.",
                            "Divide into balls and roll out into circles.",
                            "Preheat the oven to 475°F (245°C).",
                            "Bake for 5-7 minutes."
                        ]
                    }
                
                
            ]
        },
        {
            categoryId: categoryId++,
            categoryName: "Desserts",
            categoryImage: "",
            recipes: [

    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Chocolate Mousse",
        preparationTime: "15 minutes",
        ingredients: [
            { ingredient: "Chocolate", quantity: "1 package" },
            { ingredient: "Cocoa powder", quantity: "1/2 cup" },
            { ingredient: "Maple syrup", quantity: "1/4 cup" },
            { ingredient: "Vanilla extract", quantity: "1 tsp" }
        ],
        kosher: "Pareve",
        isFavorite: false,
        instructions: [
            "Melt the chocolate.",
            "Blend all ingredients until smooth.",
            "Chill in the refrigerator for 30 minutes before serving."
        ]
    },
    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Banana Oat Cookies",
        preparationTime: "20 minutes",
        ingredients: [
            { ingredient: "Ripe bananas", quantity: "2" },
            { ingredient: "Rolled oats", quantity: "1 cup" },
            { ingredient: "Chocolate chips", quantity: "1/2 cup" }
        ],
        kosher: "Pareve",
        isFavorite: false,
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Mash bananas and mix with oats and chocolate chips.",
            "Scoop onto a baking sheet and bake for 15-20 minutes."
        ]
    },
    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Chia Seed Pudding",
        preparationTime: "5 minutes + overnight",
        ingredients: [
            { ingredient: "Chia seeds", quantity: "1/4 cup" },
            { ingredient: "Almond milk", quantity: "1 cup" },
            { ingredient: "Honey", quantity: "2 tbsp" },
            { ingredient: "Vanilla extract", quantity: "1 tsp" }
        ],
        kosher: "Pareve",
        isFavorite: false,
        instructions: [
            "Mix all ingredients in a bowl.",
            "Refrigerate overnight until thickened."
        ]
    },
    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Fruit Salad",
        preparationTime: "10 minutes",
        ingredients: [
            { ingredient: "Mixed fruits", quantity: "4 cups" },
            { ingredient: "Lime juice", quantity: "2 tbsp" },
            { ingredient: "Mint leaves", quantity: "optional" }
        ],
        kosher: "Pareve",
        isFavorite: false,
        instructions: [
            "Chop fruits into bite-sized pieces.",
            "Drizzle with lime juice and toss gently.",
            "Garnish with mint leaves if desired."
        ]
    },
    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Coconut Macaroons",
        preparationTime: "25 minutes",
        ingredients: [
            { ingredient: "Shredded coconut", quantity: "3 cups" },
            { ingredient: "Egg whites", quantity: "2" },
            { ingredient: "Sugar", quantity: "1/2 cup" },
            { ingredient: "Vanilla extract", quantity: "1 tsp" }
        ],
        kosher: "Pareve",
        isFavorite: false,
        instructions: [
            "Preheat oven to 325°F (160°C).",
            "Mix all ingredients and form into small balls.",
            "Bake for 15-20 minutes until golden."
        ]
    },
    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Yogurt Parfait",
        preparationTime: "5 minutes",
        ingredients: [
            { ingredient: "Greek yogurt", quantity: "2 cups" },
            { ingredient: "Granola", quantity: "1 cup" },
            { ingredient: "Berries", quantity: "1 cup" }
        ],
        kosher: "Dairy",
        isFavorite: false,
        instructions: [
            "Layer yogurt, granola, and berries in a glass.",
            "Repeat layers and serve immediately."
        ]
    },
    
        
    {
        recipeId: recipeId++,
        get image() {
            return `/images/${this.recipeId}.jpg`;
        },
        name: "Frozen Yogurt Bark",
        preparationTime: "10 minutes + freeze",
        ingredients: [
            { ingredient: "Greek yogurt", quantity: "2 cups" },
            { ingredient: "Berries", quantity: "1 cup" },
            { ingredient: "Honey", quantity: "2 tbsp" }
        ],
        kosher: "Dairy",
        isFavorite: false,
        instructions: [
            "Spread yogurt on a baking sheet.",
            "Top with berries and drizzle honey.",
            "Freeze for 2-3 hours, then break into pieces."
        ]
    }
            ]
        }
    ],

    favoriteRecipes: []

}
initialValue.recipesByCategory = initialValue.recipesByCategory.map(category => {
    const firstRecipeImage = category.recipes[0].image
    return {
        ...category,
        categoryImage: firstRecipeImage,
    };
});

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: initialValue,
    reducers: {
        addRecipe: (state, action) => {
            const { categoryId, recipe } = action.payload;
            recipe.recipeId = recipeId++;
            const categoryIndex = state.recipesByCategory.findIndex(category => category.categoryId == categoryId);
            state.recipesByCategory[categoryIndex].recipes.push(recipe);
        },
        toggleFavorite: (state, action) => {
            const { categoryId, recipeId } = action.payload
            const categoryIndex = state.recipesByCategory.findIndex(category => category.categoryId == categoryId)
            const recipeIndex = state.recipesByCategory[categoryIndex].recipes.findIndex(recipe => recipe.recipeId == recipeId)
            const currentRecipe = state.recipesByCategory[categoryIndex].recipes[recipeIndex];
            currentRecipe.isFavorite = !currentRecipe.isFavorite;
            if (currentRecipe.isFavorite == true) {
                state.favoriteRecipes.push({ ...currentRecipe, categoryId })
            }
            else {
                state.favoriteRecipes = state.favoriteRecipes.filter(recipe => recipe.recipeId != currentRecipe.recipeId)
            }
        }

    }
})

export const { addRecipe, toggleFavorite } = recipesSlice.actions
export default recipesSlice.reducer;  