import {NavLink} from "react-router";
import "./AppLayout.css";
import {Outlet} from "react-router/internal/react-server-client";

export default function AppLayout() {
    return (<>
            <header>
                    <NavLink to={"/"} end className={"title-nav"}>
                        <h1 className={"text-center header-title"}>Library</h1>
                    </NavLink>
                    <nav>
                        <NavLink to={"/"} end className={"nav-nav"}>
                            Home
                        </NavLink>
                        <NavLink to={"/register"} end className={"nav-nav"}>
                            Register
                        </NavLink>
                        <NavLink to={"/list"} end className={"nav-nav"}>
                            List
                        </NavLink>
                    </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}