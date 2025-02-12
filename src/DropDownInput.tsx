import { useState } from "react";
import Icon from "./assets/cyrcle.svg?react";
import "./DropdownInput.css"; // Импортируем стили

export default function DropdownInput() {
    // Состояние для хранения выбранной опции
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    // Состояние для отслеживания, открыто ли выпадающее меню
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    // Состояние для списка опций
    const options = ["SawaPlayG1", "SawaPlayG2", "SawaPlayG3", "SawaPlayG4"];

    // Обработчик для открытия или закрытия меню
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Обработчик для выбора опции
    const handleOptionSelect = (option: string) => {
        setSelectedOption(option); // Устанавливаем выбранную опцию
        setDropdownOpen(false); // Закрываем выпадающее меню
    };

    return (
        <div className="dropdown-container">
            {/* Кнопка для открытия меню */}
            <button onClick={toggleDropdown}>
                {selectedOption || "Choose an option"} {/* Показать выбранную опцию */}
            </button>

            {/* Выпадающее меню */}
            {isDropdownOpen && (
                <ul>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionSelect(option)}>
                            <div className="change-account">
                                <Icon className="logo" width={32} height={32}/>
                                <div className="info">
                                    <p className="name">{option}</p>
                                    <p className="phone-number">79956093313</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
