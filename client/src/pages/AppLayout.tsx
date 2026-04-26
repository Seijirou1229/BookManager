import {NavLink, Outlet} from "react-router";
import "./AppLayout.css";

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
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
    )
}