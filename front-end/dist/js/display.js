document.addEventListener("DOMContentLoaded", async () => {
  const BASE_URL = "http://localhost:8080/books/allBooks"; 
  const ADD_CART_URL = "http://localhost:8080/cart/addToCart"; // Adjust if needed
  const container = document.getElementById("book-container");
  const template = document.getElementById("template-card");

  try {
    const response = await fetch(BASE_URL);
    const books = await response.json();

    books.forEach(book => {
      const card = template.cloneNode(true);
      card.classList.remove("hidden");
      card.removeAttribute("id");

      const img = card.querySelector(".book-img");
      img.src = `data:image/jpeg;base64,${book.image}`;
      img.alt = book.title;

      card.querySelector(".book-title").textContent = book.title;
      card.querySelector(".book-author").textContent = `By ${book.author}`;
      card.querySelector(".book-price").textContent = `₹${book.price}`;
      card.querySelector(".Quantity").textContent = `Quantity ${book.quantity}`;
      card.setAttribute("data-book-id", book.id);

      // ADD TO CART BUTTON LOGIC
      const addToCartBtn = card.querySelector(".add-to-cart"); // Make sure button has this class
      addToCartBtn.addEventListener("click", async () => {
        const formData = new FormData();
        formData.append("title", book.title);
        formData.append("author", book.author);
        formData.append("price", book.price);
        formData.append("quantity", book.quantity); // You can make this dynamic
        formData.append("image", dataURLtoFile(img.src, `${book.title}.jpg`));
        


        try {
          const res = await fetch(ADD_CART_URL, {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            alert(`${book.title} added to cart!`);
          } else {
            alert("Failed to add to cart.");
          }
        } catch (err) {
          console.error("Error adding to cart:", err);
        }
      });

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Failed to fetch books:", error);
    alert("Could not load books.");
  }
});

// Helper: Convert Base64 string to File object
function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
