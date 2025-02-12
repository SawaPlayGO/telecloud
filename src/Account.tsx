// src/pages/Account.tsx
import './Account.css'
// import { Link } from "react-router-dom";
import DropdownInput from "./DropDownInput.tsx";
import Icon from "./assets/icon.svg?react";
// import Circle from "./assets/cyrcle.svg?react";


export default function Account() {
    return (
        <>
            <div className="tab">
                <div className="logo-container">
                    <Icon width={32} height={32}></Icon>
                </div>
                <DropdownInput />
            </div>
        </>
    );
}
