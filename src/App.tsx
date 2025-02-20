import './App.css';
import Icon from "./assets/icon.svg?react";
import Add from "./assets/add.svg?react";
import Circle from "./assets/circle.svg?react";
import Phone from "./assets/phone.svg?react";
import Submit from "./assets/submit.svg?react";
// import Trash from "./assets/trash.svg?react";
// import Account from "./Account.tsx"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Modal
import Modal from "react-modal";
// Inputs
import InputCode from "./OTPInput.tsx"

// Lottie
import Lottie from "lottie-react";
import animationAddAccount from "./assets/animations/add-account.json";
import animationInputCode from "./assets/animations/input-code.json";
import animationPhone from "./assets/animations/phone.json";

Modal.setAppElement("#root");

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isTreeModalOpen, setTreeModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="up-frame">
                <Icon className="icon-svg" width={86} height={86} />
                <p className="title">Select an Account</p>
                <p className="description">Select a Telegram account to use as cloud storage</p>
                {/*Первое модальное*/}
                <Modal
                    id="add-account"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                >
                    <div id="add-account" className="modal-title">
                        <p>Add Telegram Account</p>
                        <button id="add-account" className="modal-close" onClick={() => setIsOpen(false)}>✖</button>
                    </div>
                    <div id="add-account" className="modal-container">
                        <Lottie animationData={animationAddAccount} loop={true}/>
                        <button id="add-account" className="modal-button" onClick={() => { setIsSecondModalOpen(true); setIsOpen(false)}}>Start Initialization</button>
                    </div>
                </Modal>
                {/*Второе модальное*/}
                <Modal
                    id="get-code"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    isOpen={isSecondModalOpen}
                    onRequestClose={() => setIsSecondModalOpen(false)}
                >
                    <div id="get-code" className="modal-title">
                        <p>Add Telegram Account</p>
                        <button id="get-code" className="modal-close" onClick={() => setIsSecondModalOpen(false)}>✖</button>
                    </div>
                    <div id="get-code" className="modal-container">
                        <Lottie animationData={animationPhone}></Lottie>
                        <p className="phone-1">Phone Number</p>
                        <p className="phone-2">Should with country code like: 8613712345678</p>
                        <input className="input-phone" type="text"/>
                        <button id="get-code" className="modal-button" onClick={() => { setTreeModalOpen(true); setIsSecondModalOpen(false)}}>🚀 Submit</button>
                    </div>
                </Modal>
                {/*Третье модальное*/}
                <Modal
                    id="input-code"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    isOpen={isTreeModalOpen}
                    onRequestClose={() => setTreeModalOpen(false)}
                >
                    <div id="input-code" className="modal-title">
                        <p>Add Telegram Account</p>
                        <button id="input-code" className="modal-close" onClick={() => setTreeModalOpen(false)}>✖</button>
                    </div>
                    <div id="input-code" className="modal-container">
                        <Lottie animationData={animationInputCode} loop={true} width={64} height={64}/>
                        <p className="code-1">Authentication Code</p>
                        <p className="code-2">Please enter the code sent to your telegram account.</p>
                        <InputCode></InputCode>
                        <button id="input-code" className="modal-button" onClick={() => navigate('/account')}>🚀 Submit</button>
                    </div>
                </Modal>
                <button className="add-account" onClick={() => setIsOpen(true)}>
                    <div className="container-add-button">
                        <Add className="add-svg"></Add>
                        <p>Add Account</p>
                    </div>
                </button>
            </div>
            <div className="down-frame">
                <div className="card-container">
                    <div className="avatar">
                        <Circle className="circle-svg"></Circle>
                    </div>
                    <div className="info">
                        <div className="name-status">
                            <p className="username">SawaPlayGO</p>
                            <div className="status-container">
                                <Submit className="submit-svg"></Submit>
                                <p className="status-text">active</p>
                            </div>
                        </div>
                        <div className="phone-container">
                             <Phone className="phone-svg"></Phone>
                            <p className="phone-number-text">79956093313</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
