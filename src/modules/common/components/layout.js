import {useRouter} from "next/router";
import Navigation from "./navigation";
import Footer from "./footer";


export default function Layout({children}) {
    const router = useRouter();
    return (
        <div className={"main-wrapper"}>
            <Navigation />
            {children}
            <Footer/>
        </div>
    );
}