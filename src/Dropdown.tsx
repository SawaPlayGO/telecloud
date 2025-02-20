import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import './Dropdown.css'


const accounts = [
    {id: 1, username: "SawaPlayGO", phone: "79956093313", unavailable: false},
    {id: 2, username: "mentir", phone: "79956093314", unavailable: false},
    {id: 3, username: "brousee", phone: "79956093315", unavailable: false},
]

export default function MyDropdown() {
    const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-container">
            <Listbox value={selectedAccount} onChange={setSelectedAccount}>
                <Listbox.Button className="selected-account" onClick={() => setIsOpen(!isOpen)}>
                    <p className="selected-username">{selectedAccount.username}</p>
                    {isOpen ? <ArrowDropUp className="icon-drop" /> : <ArrowDropDown className="icon-drop" />}
                </Listbox.Button>

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >

                    <Listbox.Options className="persons-container">
                        {accounts.map((person) => (
                            <Listbox.Option className="person-container"
                                key={person.id}
                                value={person}
                                disabled={person.unavailable}
                            >
                                {person.username}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    )
}