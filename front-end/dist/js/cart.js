document.addEventListener("DOMContentLoaded", async () => {
  const BASE_URL = "http://localhost:8080/cart/all";
  const container = document.querySelector(".cart-container");
  const template = document.getElementById("cart-template");

  try {
    const response = await fetch(BASE_URL);
    const carts = await response.json();

    carts.forEach(cart => {
      const card = template.cloneNode(true);
      card.classList.remove("hidden");
      card.removeAttribute("id");

      // Set image
      const img = card.querySelector(".cart-img");
      img.src = `data:image/jpeg;base64,${cart.image}`;
      img.alt = cart.book.title;

      // Set content
      card.querySelector(".cart-title").textContent = cart.book.title;
      card.querySelector(".cart-author").textContent = cart.book.author;
      card.querySelector(".cart-price").textContent = `₹${cart.book.price}`;

      // DELETE BUTTON LOGIC
      const delButton = card.querySelector(".remove-from-cart");
      delButton.addEventListener("click", async () => {
        const DELETE_URL = `http://localhost:8080/cart/removeFromCart/${cart.id}`;

        const confirmDelete = confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;

        try {
          const delResponse = await fetch(DELETE_URL, {
            method: "DELETE"
          });

          if (delResponse.ok) {
            alert("Item removed from cart.");
            card.remove(); // remove this card from the DOM
          } else {
            alert("Failed to remove item.");
          }
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
    alert("Could not load cart items.");
  }
});
