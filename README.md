# restaurant-app

We are proposing the development of a restaurant order-taking and management app using ReactJS, Spring Boot, and MySQL. The app will consist of two main views: 
1. Customer view: Allows customers to browse the menu, customize orders, track order status, and provide feedback.
2. Administrator view: Manages the menu, tracks fulfilled orders, and views dish availability.

Additional features will include an Analytics Dashboard for tracking popular dishes and their ratings from internet.

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
│   │   └── App.js
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
├── README.md
└── .gitignore