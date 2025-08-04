# 📚 Book Vault - Online Bookstore

An elegant and minimalistic web app for browsing and managing a cart of books. Built using **Spring Boot**, **Tailwind CSS**, and **Vanilla JavaScript**.

![Book Vault Banner](https://your-image-link.com/banner.jpg)

---

## ✨ Features

- 📦 Add books to cart with quantity & image
- 🛒 View all items in the cart
- ❌ Remove items from the cart
- 🔁 Avoids duplicate book entries using smart title-author matching
- 🔥 Stylish frontend using Tailwind CSS

---

## 🚀 Tech Stack

| Backend        | Frontend        | Database   |
|----------------|-----------------|------------|
| Spring Boot 🧩 | HTML + Tailwind 🎨 | MySQL 🐬   |
| RESTful APIs 🌐 | JavaScript ⚙️     | JPA/Hibernate |

---

## 📸 Screenshots

### 🏠 Homepage – Browse Books
![Homepage](front-end/assets/Screenshot%202025-08-04%20231124.png)


### add books
![add book](front-end/assets/Screenshot%202025-08-04%20231137.png)

### display books
![display books](front-end/assets/Screenshot%202025-08-04%20231203.png)

###  View Cart Items
![View Cart](front-end/assets/Screenshot%202025-08-04%20231219.png)
---

## 📡 API Endpoints

| Method | Endpoint                          | Description               |
|--------|-----------------------------------|---------------------------|
| `GET`  | `/books/allBooks`                 | Fetch all available books |
| `POST` | `/cart/addToCart`                 | Add book to cart          |
| `GET`  | `/cart/all`                       | Get all cart items        |
| `DELETE` | `/cart/removeFromCart/{id}`     | Remove a book from cart   |

---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/book-vault.git
cd book-vault

# Backend
./mvnw spring-boot:run

# Frontend (Open HTML file in browser or host on local server)
