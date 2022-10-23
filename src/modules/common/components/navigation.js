import {useRouter} from "next/router";
import {Button, Col, Row} from "react-bootstrap";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PAGE_ENUM from "../../../enums/pageEnum";
import HeaderButtons from "./headerButtons";


export default function Navigation() {
    const router = useRouter();

    const redirectTo = (path) => {
        router.push(path)
    }

    return (
        <header className={"header"}>
            <header className={"header"}>
                <div className={"container-fluid"}>
                    <div className="header__wrapper">
                        <h1 className="header__title">BFSY 2022</h1>
                        <HeaderButtons/>
                    </div>
                </div>
            </header>
        </header>
    );
}
