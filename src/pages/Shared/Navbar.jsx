import { Link, NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const Navbar = () => {
    const { user, logOut } = UseAuth();
    const links = <>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink to={'/about-us'}>About Us</NavLink></li>
        <li><NavLink to={'pricing'}>Pricing</NavLink></li>
        <li><NavLink to={'/be-rider'}>Be a Rider</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-lg md:text-xl">Xen Track</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <button onClick={logOut} className="btn">LogOut</button> : <Link className="btn" to={'/login'}>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;