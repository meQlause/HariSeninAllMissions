import type { InputProps } from "../../utils/interfaces";
import { useState } from "react";

export const InputComponent: React.FC<InputProps> = ({
  type,
  label,
  error,
  registration,
  className = "",
  placeholder = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative flex flex-row">
        {inputType === "phone" && (
          <div className="flex flex-row items-center justify-center">
            <div className="w-11 rounded-l-md border bg-[#f4f5fa] px-[10px] py-[8px]">
              <img className="w-full" src="/assets/indonesias-flag.png"></img>
            </div>
            <div className="mr-3 w-20 rounded-r-md border py-[7px] pl-2">
              <select id="country-code">
                <option value="+62" data-flag="#">
                  +62
                </option>
                <option value="+60" data-flag="#">
                  +60
                </option>
                <option value="+65" data-flag="#">
                  +65
                </option>
              </select>
            </div>
          </div>
        )}
        <input
          type={inputType === "phone" ? "number" : inputType}
          className={`block w-full rounded-md border-gray-300 px-5 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${error ? "border-red-500" : "border"} ${className} `}
          placeholder={placeholder}
          {...registration}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              // Eye-off SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.083 3.61 6.017 6 9.75 6 1.563 0 3.06-.322 4.396-.902m2.574-1.698A10.45 10.45 0 0 0 21.75 12c-.621-1.077-1.507-2.207-2.57-3.223M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 0c-2.083-3.61-6.017-6-9.75-6-1.257 0-2.48.193-3.646.553M3 3l18 18"
                />
              </svg>
            ) : (
              // Eye SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12C3.903 7.943 7.885 5.25 12 5.25c4.115 0 8.097 2.693 9.75 6.75-1.653 4.057-5.635 6.75-9.75 6.75-4.115 0-8.097-2.693-9.75-6.75Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const TextInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="text" {...props} />
);

export const EmailInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="email" {...props} />
);

export const PasswordInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="password" {...props} />
);

export const PhoneInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="phone" {...props} />
);
