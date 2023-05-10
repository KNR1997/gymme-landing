import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function RootLayout() {
    return (
        <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>

    )
}