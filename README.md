# BusyBuy E-Commerce App

BusyBuy is a React-based E-Commerce application that allows users to browse through a variety of products, add items to their cart, and complete the purchasing process seamlessly. This project integrates with Firebase for user authentication and data storage, providing a robust platform for managing users and products.

## Hosted Link



## Getting Started

To get started with BusyBuy locally, follow these steps:

1. Clone the repository to your local machine:

```bash
gh repo clone Ananthuak16/Buy-Busy
```

2. Install dependencies using npm or yarn:

```bash
npm install
```

3. Set up Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore, Authentication, and Hosting services.
   - Add your Firebase project configuration to `src/firebase/firebase.js`.

4. Start the development server:

```bash
npm start
```


5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Features

- **User Authentication:** Users can register for new accounts and log in using Firebase Authentication.
- **Product Management:** CRUD operations for products are integrated with Firestore.
- **Shopping Cart:** Users can add, remove, and update quantities of products in their shopping cart.
- **Responsive Design:** The app is designed to be responsive and works well on various screen sizes.
- **Routing:** Navigation between different pages is managed using react-router-dom.
- **Context API:** useContext() hook is utilized for managing user authentication and product states.
- **Search and Filtering:** Users can search for products by name and filter them based on price and categories.
- **Toast Messages:** Toast notifications are displayed for async actions and error conditions using react-toastify.
- **Loading State:** React spinners are employed to show loading states while fetching data.

## Project Structure

The project structure is organized as follows:

- `src/components`: Contains reusable UI components used across the application.
- `src/context`: Contains context providers for managing user authentication and product states.
- `src/firebase`: Includes Firebase configuration and utility functions.
- `src/pages`: Contains different pages of the application such as Home, SignIn, SignUp , Cart, Orders.
- `src/routes`: Defines application routes using react-router-dom.
- `src/services`: Includes services for interacting with Firebase Firestore.
- `src/styles`: Contains global styles and CSS modules for styling components.

## Additional Functionality

In addition to the specified tasks, the following features have been implemented:

- **Sidebar Filtering:** Users can filter products based on price and categories using a sidebar on the Home page.
- **Conditional Rendering:** Loading states and absence of data are handled using react-spinners library for better user experience.
- **Toast Notifications:** Toast messages are displayed for async actions and error conditions using react-toastify library.

## Credits

This project was developed by [Ananthu] as part of [Assignment/Buy Busy]. 

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify this project for your own purposes.#
#
