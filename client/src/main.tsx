import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import AppLayout from './pages/AppLayout.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import BookRegistration from "./pages/books/BookRegistration.tsx";
import BookList from "./pages/books/BookList.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path={"/"} element={<App />}></Route>
                    <Route path={"/register"} element={<BookRegistration />}></Route>
                    <Route path={"/list"} element={<BookList/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
