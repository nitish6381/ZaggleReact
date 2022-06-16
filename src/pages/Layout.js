import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>

                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <a href="/NoPage">Nopage</a>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;