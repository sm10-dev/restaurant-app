# restaurant-app

We are proposing the development of a restaurant order-taking and management app using ReactJS, Spring Boot, and MySQL. The app will consist of two main views: 
1. Customer view: Allows customers to browse the menu, customize orders, track order status, and provide feedback.
2. Administrator view: Manages the menu, tracks fulfilled orders, and views dish availability.

Additional features will include an Analytics Dashboard for tracking popular dishes and their ratings from internet.

## Setup Instructions

### Frontend:
1. Navigate to the frontend/ directory.
2. Install dependencies using npm install.
3. Run the frontend using npm start.

### Backend:
1. Navigate to the backend/ directory.
2. Set up your MySQL database.
3. Build and run the backend with Maven:
   ```bash
   mvn clean install
   mvn spring-boot:run


restaurant-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CustomerView.js
│   │   │   ├── Menu.js
│   │   │   ├── OrderTracking.js
│   │   │   ├── Feedback.js
│   │   │   ├── RatingForm.js
│   │   │   ├── AnalyticsDashboard.js
│   │   │   └── PopularDishes.js
│   │   ├── styles/
│   │   │   └── style.css
│   │   └── App.js
│   ├── public/
│   │   └── index.html
│   └── package.json
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── restaurant/
│   │       │           ├── controller/
│   │       │           │   ├── MenuController.java
│   │       │           │   ├── OrderController.java
│   │       │           ├── service/
│   │       │           │   ├── MenuService.java
│   │       │           │   ├── OrderService.java
│   │       ├── resources/
│   │           └── application.properties
│   └── pom.xml
├── database/
│   ├── menu.sql
│   ├── orders.sql
│   └── analytics.sql
├── api-proxy/
│   ├── index.js
│   └── package.json
├── README.md
└── .gitignore


Component Details
1. CustomerView.js
Description:
Main component for the customer view. It serves as a container that manages navigation between different customer-related components like Menu, Order Tracking, and Feedback.

Responsibilities:

Render navigation buttons or a sidebar to switch between views.
Manage state to keep track of the current active view and active order.
Pass necessary props to child components.

2. OrderTracking.js
Description:
Component for tracking the status of an active order. It fetches real-time updates from the backend API and displays them to the user.

Responsibilities:

Fetch order status based on orderId.
Display the current status and any updates.
Handle loading and error states.

3. Feedback.js
Description:
Component for collecting feedback from customers. It includes a text area for comments and submits the feedback to the backend API.

Responsibilities:

Collect feedback text from the user.
Handle form submission.
Manage submission states (loading, success, error).

4. RatingForm.js
Description:
Component for collecting ratings from customers. It allows users to rate their experience and optionally leave comments.

Responsibilities:

Collect rating (e.g., 1-5 stars) and comments.
Handle form submission.
Manage submission states.

5. App.js
Description:
Main application component that sets up routing for the application. It integrates all the components and manages the overall navigation.

Responsibilities:

Define routes for different views.
Handle navigation between different parts of the application.
Include authentication if implemented.


API Endpoints
Menu API
GET /api/menu

Description: Fetch all menu items.
Usage: GET /api/menu
Response: JSON array of menu items.
POST /api/menu

Description: Add a new menu item.
Usage: POST /api/menu
Body: { "name": "String", "price": Number, "description": "String", "category": "String", "dietary_info": "String" }
Response: JSON of the created menu item.
PUT /api/menu/{id}

Description: Update an existing menu item.
Usage: PUT /api/menu/1
Body: { "name": "String", "price": Number, "description": "String", "category": "String", "dietary_info": "String" }
Response: JSON of the updated menu item.
DELETE /api/menu/{id}

Description: Delete a menu item.
Usage: DELETE /api/menu/1
Response: Status message.
Order API
GET /api/orders/{id}/status

Description: Fetch the status of a specific order.
Usage: GET /api/orders/1/status
Response: { "status": "String" }
POST /api/orders

Description: Place a new order.
Usage: POST /api/orders
Body: { "customer_id": Number, "items": [ { "menu_item_id": Number, "quantity": Number, "customization": "String" } ], "delivery_address": "String" }
Response: JSON of the created order.
PUT /api/orders/{id}

Description: Update the status of an order.
Usage: PUT /api/orders/1
Body: { "status": "String" }
Response: JSON of the updated order.
GET /api/orders/history

Description: Fetch order history for a customer.
Usage: GET /api/orders/history?customer_id=1
Response: JSON array of orders.
Feedback API
POST /api/feedback

Description: Submit customer feedback.
Usage: POST /api/feedback
Body: { "customer_id": Number, "feedback": "String" }
Response: Status message.
GET /api/feedback

Description: Fetch all feedback (admin view).
Usage: GET /api/feedback
Response: JSON array of feedback entries.
Rating API
POST /api/ratings

Description: Submit a rating.
Usage: POST /api/ratings
Body: { "customer_id": Number, "rating": Number, "comments": "String" }
Response: Status message.
GET /api/ratings

Description: Fetch all ratings (for analytics).
Usage: GET /api/ratings
Response: JSON array of ratings.
