import React from "react"
import {useRouter} from "next/router";
import {Button} from "react-bootstrap";
import Link from "next/link";


export default function HeaderTabs(data) {
    const {name, path} = data;
    const route = useRouter();


    return (
        <li className="main-tab__item nav-item" key={`nav-item-${path}`}>
            <Link href={path}>
                <a className={`main-tab__link nav-link ${route.asPath === path ? 'active' : null}`}
                   key={`nav-item-link-${path}`}>{name}</a>
            </Link>
        </li>
    );
};


