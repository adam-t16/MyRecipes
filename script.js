document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const recipeCard = event.target.closest('.recipe'); // Get the closest parent `.recipe` card
            if (!recipeCard) {
                alert("Recipe card not found!");
                return;
            }

            const recipeTitle = recipeCard.querySelector('.recipe-title')?.textContent; // Get recipe title
            if (!recipeTitle) {
                alert("Recipe title not found!");
                return;
            }

            const ingredientsList = recipeCard.querySelectorAll('.ingredients li'); // Get ingredients list
            if (!ingredientsList.length) {
                alert("No ingredients found!");
                return;
            }

            let ingredientsText = "";
            ingredientsList.forEach(ingredient => {
                ingredientsText += ingredient.textContent + ", "; // Add ingredients to string
            });
            ingredientsText = ingredientsText.slice(0, -2); // Remove the last comma and space

            // Prepare WhatsApp message with recipe details
            const whatsappMessage = `Hello!%20I%20would%20like%20to%20order%20${encodeURIComponent(recipeTitle)}%20with%20ingredients%20${encodeURIComponent(ingredientsText)}.`;

            // Use the static WhatsApp QR code link
            const whatsappURL = `https://wa.me/qr/LPB7DFLFGTHXB1?text=${whatsappMessage}`;

            // Open WhatsApp with the recipe details pre-filled in the message
            const newWindow = window.open(whatsappURL, '_blank');

            if (!newWindow) {
                alert("Please enable pop-ups to place your order.");
            }
        });
    });
});
