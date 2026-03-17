const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const recipesGrid = document.getElementById('recipesGrid');
        const loading = document.getElementById('loading');
        const noResults = document.getElementById('noResults');

        // Sample recipe data for demo
        const sampleRecipes = [
            {
                id: 1,
                title: "Spaghetti Carbonara",
                category: "Italian",
                description: "Classic Italian pasta dish with eggs, cheese, and pancetta.",
                emoji: "🍝",
                time: "25 min",
                servings: 4
            },
            {
                id: 2,
                title: "Chicken Tikka Masala",
                category: "Indian",
                description: "Tender chicken in a creamy, spiced tomato sauce.",
                emoji: "🍛",
                time: "45 min",
                servings: 6
            },
            {
                id: 3,
                title: "Caesar Salad",
                category: "Salad",
                description: "Fresh romaine lettuce with parmesan and croutons.",
                emoji: "🥗",
                time: "15 min",
                servings: 2
            },
            {
                id: 4,
                title: "Beef Tacos",
                category: "Mexican",
                description: "Seasoned ground beef in crispy taco shells with toppings.",
                emoji: "🌮",
                time: "30 min",
                servings: 4
            },
            {
                id: 5,
                title: "Margherita Pizza",
                category: "Italian",
                description: "Classic pizza with tomato, mozzarella, and fresh basil.",
                emoji: "🍕",
                time: "40 min",
                servings: 3
            },
            {
                id: 6,
                title: "Pad Thai",
                category: "Thai",
                description: "Stir-fried rice noodles with shrimp and peanuts.",
                emoji: "🍜",
                time: "35 min",
                servings: 4
            },
            {
                id: 7,
                title: "Greek Salad",
                category: "Greek",
                description: "Fresh vegetables with feta cheese and olives.",
                emoji: "🥙",
                time: "10 min",
                servings: 4
            },
            {
                id: 8,
                title: "Beef Burger",
                category: "American",
                description: "Juicy beef patty with lettuce, tomato, and cheese.",
                emoji: "🍔",
                time: "20 min",
                servings: 4
            },
            {
                id: 9,
                title: "Chicken Curry",
                category: "Indian",
                description: "Aromatic chicken curry with rich spices.",
                emoji: "🍛",
                time: "50 min",
                servings: 6
            }
        ];

        function displayRecipes(recipes) {
            recipesGrid.innerHTML = '';
            
            if (recipes.length === 0) {
                loading.classList.remove('active');
                noResults.classList.add('active');
                return;
            }

            noResults.classList.remove('active');
            
            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                card.onclick = () => showRecipeDetails(recipe);
                
                card.innerHTML = `
                    <div class="recipe-image">${recipe.emoji}</div>
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.title}</h3>
                        <span class="recipe-category">${recipe.category}</span>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="recipe-meta">
                            <span class="meta-item">⏱️ ${recipe.time}</span>
                            <span class="meta-item">👥 ${recipe.servings} servings</span>
                        </div>
                    </div>
                `;
                
                recipesGrid.appendChild(card);
            });
            
            loading.classList.remove('active');
        }

        function searchRecipes(query) {
            loading.classList.add('active');
            recipesGrid.innerHTML = '';
            
            setTimeout(() => {
                const filtered = sampleRecipes.filter(recipe => 
                    recipe.title.toLowerCase().includes(query.toLowerCase()) ||
                    recipe.category.toLowerCase().includes(query.toLowerCase()) ||
                    recipe.description.toLowerCase().includes(query.toLowerCase())
                );
                
                displayRecipes(filtered);
            }, 500);
        }

        function showRecipeDetails(recipe) {
            alert(`${recipe.emoji} ${recipe.title}\n\nCategory: ${recipe.category}\nTime: ${recipe.time}\nServings: ${recipe.servings}\n\n${recipe.description}\n\nIn a full app, this would show detailed ingredients and cooking instructions!`);
        }

        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchRecipes(query);
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    searchRecipes(query);
                }
            }
        });

        // Display all recipes on load
        displayRecipes(sampleRecipes);
