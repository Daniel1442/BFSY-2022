import React from "react"
import PAGE_ENUM from "../../../enums/pageEnum";
import HeaderTabs from "./headerTabs";

const HeaderButtons = () => {

    const headerTabs = [
        {name: 'Frontendové systémy - úkol 1', path: PAGE_ENUM.TASK_ONE},
        {name: 'Frontendové systémy - úkol 2', path: PAGE_ENUM.TASK_TWO},
        {name: 'Frontendové systémy - úkol 3', path: PAGE_ENUM.TASK_THREE},
        {name: 'Frontendové systémy - úkol 4', path: PAGE_ENUM.TASK_FOUR},
        {name: 'Frontendové systémy - úkol 5', path: PAGE_ENUM.TASK_FIVE},

    ];


    return (
        <div className={"tabs"}>
            <div className="container-fluid">
                <div className={"tabs__wrapper"}>
                    <ul className="main-tab nav nav-pills p-0">
                        {headerTabs.map(tab => {
                            return HeaderTabs(tab)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default HeaderButtons;