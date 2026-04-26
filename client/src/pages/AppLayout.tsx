import {NavLink} from "react-router";
import "./AppLayout.css";
import {Outlet} from "react-router/internal/react-server-client";

export default function AppLayout(){
return(<>
        <header>
            <div className={"header-container"}>
                <NavLink to={"/"} end className={"title-nav"}>
                    <h1 className={"text-center header-title"}>Library</h1>
                </NavLink>
            </div>
            <nav>
                <NavLink to={"/"} end>
                    Home
                </NavLink>
                <NavLink to={"/register"} end>
                    Register
                </NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
    )
}