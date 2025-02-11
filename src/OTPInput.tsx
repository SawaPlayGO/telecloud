import { useRef } from "react";
import "./OTPInput.css";

function OTPInput() {
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace" && !event.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="otp-container">
            {Array(5).fill(0).map((_, index) => (
                <input
                    key={index}
                    id={index === 0 ? "otp-0" : index === 1 ? "otp-1" : index === 2 ? "otp-2" : index === 3 ? "otp-3": index === 4 ? "otp-4" : undefined}
                    ref={(el) => {
                        if (el) inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="otp-input"
                />
            ))}
        </div>
    );
}

export default OTPInput;
