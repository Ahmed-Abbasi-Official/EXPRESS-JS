# 🌟 What I Learned in **Express.js** 🌟

### 🔷 Node vs Express

- **Node.js** is the core runtime that **Express** is based on, utilizing the Node.js `http` package.
- Without **Node.js**, we can't use Express, but we can use Node.js without Express.
- **Express** acts as a **framework** for Node.js, streamlining the process of building APIs, handling routes, managing requests, setting cookies, and using middleware.
- While all these tasks can be accomplished with **Node.js** alone, **Express** offers a more **organized** and easier-to-write approach.

---

## 1️⃣ What is **Express.js**?
Express.js is a lightweight framework for building web applications and APIs in Node.js. It simplifies routing, middleware, and request handling.

---

## 2️⃣ **Routing** 🛣️  
- Routing is the process of defining URL paths like `/profile`, `/home`, `/about`, and `/contact` to serve different content and actions.

---

## 3️⃣ **Middleware** 🧩  
- Middleware functions in Express are executed in sequence to process requests before they are sent to the final route. They help in tasks like logging, authentication, and more.

---

## 4️⃣ **Request** and **Response** 🔄  
- **Request (req):** An object that contains data sent from the client to the server.
- **Response (res):** An object that sends data back to the client from the server.

---

## 5️⃣ **Route Parameters** 📍  
- These are dynamic segments of a URL, like `/user/:id`, allowing us to capture values from the URL and use them in the logic.

---

## 6️⃣ **Template Engines** 🖼️  
- Template engines like **EJS** and **Pug** allow us to generate dynamic HTML by mixing HTML and JavaScript.
- HTML don't have SuperPower to do calculation like (1+2) and EJS has the power to do dynamically HTML like calculation and name changing dynamically.

---

## 7️⃣ **Static Files** 🗂️  
- Express makes it easy to serve static files like **HTML**, **CSS**, and **JavaScript** by using middleware like `express.static()`.

---

## 8️⃣ **HTTP Methods** - **GET** and **POST** 📬  
- **GET:** Used to retrieve data from a server.
- **POST:** Used to send data to a server, often used for form submissions.

---

## 9️⃣ **Error Handling** ❌  
- In Express, error handling middleware catches errors and provides a custom response to the client.

---

## 🔟 **Cookies** 🍪  
- Express simplifies setting, reading, and clearing **cookies**, which are key for maintaining user sessions and storing small pieces of data.
