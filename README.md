# Siam Spice API - A REST API Documentation Project

This project is a complete, professional demonstration of API documentation for a fictional Thai restaurant, "The Siam Spice." It includes a full API specification written in OpenAPI 3.0 and a live, interactive front-end demo to showcase how the API would be used.

This project was built to demonstrate core technical writing skills, including API documentation, user-focused design, and front-end implementation for interactive examples.

## Project Components

This repository contains two main parts:

### 1. The API Documentation (`openapi.yaml`)

The core of the project is the formal API specification.

*   **Technology:** Written in YAML using the OpenAPI 3.0.3 specification.
*   **Endpoints Documented:**
    *   `GET /dishes` - Retrieves a list of all menu dishes.
    *   `GET /dishes/{dishId}` - Retrieves a single dish by its unique ID.
*   **Data Models:** Includes a detailed schema for the `Dish` resource, defining all properties such as `id`, `name`, `price`, `spicinessLevel`, and `isVegetarian`.
*   **Best Practices:** Documents clear summaries, descriptions, parameters, and multiple response types (e.g., `200 OK`, `404 Not Found`).

### 2. The Interactive Live Demo

To prove the documentation is usable and clear, this project includes a simple front-end application that consumes the API.

*   **Technologies:** Built with clean, semantic HTML, styled with CSS, and powered by modern JavaScript.
*   **Functionality:**
    1.  The user is presented with a button to "View Full Menu."
    2.  Upon clicking the button, the application makes a simulated call to the `GET /dishes` endpoint.
    3.  The returned JSON data is parsed and dynamically rendered on the page, displaying the full menu with all relevant details.

This demonstrates an understanding of the end-user (developer) experience and the ability to create practical, hands-on examples.

---

This project showcases the ability to understand a product's requirements, design a logical API structure, document it to industry standards, and build a functional example of its use.
