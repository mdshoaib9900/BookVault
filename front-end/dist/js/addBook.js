let BASE_URL = "http://localhost:8080/books/add";

document.getElementById("book-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("image", document.getElementById("image").files[0]);
  formData.append("title", document.getElementById("title").value);
  formData.append("author", document.getElementById("author").value);
  formData.append("price", document.getElementById("price").value);
  formData.append("quantity", document.getElementById("quantity").value);


  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Server Error: ${errText}`);
    }

    const result = await response.json();
    console.log("Success:", result);
    alert("Book added successfully!");
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to add book. Check console for details.");
  }
});
