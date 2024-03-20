
// custom context hook
import { useAuthValue } from "../../context/authContext";

// css styles 
import styles from "../../Styles/navbar.module.css"
// import form react router
import { Outlet, NavLink } from "react-router-dom";
import { MdLogin, MdLogout } from "react-icons/md";
import { FcShop } from "react-icons/fc";

import { IoMdHome } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


// Navbar Component
export default function Navbar(){
    // user's login status
    const {isLoggedIn,signOut}=useAuthValue();

    return(
        <>
            {/* main container */}
            <div className={styles.navbarContainer}> 
                {/* app heading */}
                <div className={styles.appName}>
                    <NavLink to="/">
                        {/* logo of the app */}
                       <FcShop />
                        
                       
                        Buy Busy
                    </NavLink>
                </div>

                {/* all the navigation link */}
                <div className={styles.navLinks}>

                    {/* homepage link */}
                    <NavLink to="/">
                        <span>
                            {/* home logo */}
                            <IoMdHome />
                            Home
                        </span>
                    </NavLink>

                    {/* myorder link */}
                    {/* show when user is logged in */}
                    {isLoggedIn && <NavLink to="/myorder">
                        <span>
                            {/* my order logo */}
                            <BsBagCheckFill />
                            My Order
                        </span>
                    </NavLink> }


                    {/* cart link */}
                    {/* show when user is logged in */}
                    {isLoggedIn && <NavLink to="/cart">
                        <span>
                            {/* cart icon */}
                            <FaShoppingCart />
                            Cart
                        </span>
                    </NavLink> }


                    {/* for signIN and signOut */}
                    <NavLink to={!isLoggedIn?"/signin":"/"}>
                        <span>
                            {!isLoggedIn?
                                <>
                                    {/* sign in icon */}
                                    <MdLogin />
                                    SignIn
                                </>
                                :
                                <>
                                    {/* sign out icon */}
                                    <MdLogout />
                                        {/* sign out user  */}
                                    <span onClick={signOut}>SignOut</span>
                                </>
                            }
                        </span>
                    </NavLink>
                </div>
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}