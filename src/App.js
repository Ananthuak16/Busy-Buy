
// react router
import { createBrowserRouter,RouterProvider } from "react-router-dom";

// custom context provider (authentication and product)
import { AuthContext } from "./context/authContext";
import { ProductContext } from "./context/produtContext";

// all the pages and component to render
import Navbar from "./Components/pages/Navbar";
import { Home } from "./Components/pages/Home";
import {MyOrder} from "./Components/pages/MyOrder";
import {Cart} from "./Components/pages/cart";
import SignIn from "./Components/pages/signIn";
import SignUp  from "./Components/pages/SignUp";
import { Error } from "./Components/pages/Error";

// main app function 
function App() {

  // all the link routes
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        { index:true, element: <Home />},
        { path:"/myorder", element: <MyOrder />},
        { path:"/cart", element: <Cart />},
        { path:"/signin", element: <SignIn />},
        { path:"/signup", element: <SignUp />},
      ]
    }
  ]);

  return (
    <>
    {/* custom authContext provider */}
      <AuthContext>
        {/* custom product context provider */}
        <ProductContext>
          {/* routes */}
          <RouterProvider router={router} />    
        </ProductContext>
      </AuthContext>
    </>
  );
}

export default App;