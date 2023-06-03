import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  error?: FieldError;
  label: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, id, error, label, ...rest }, ref) => {
    return (
      <>
        <div className="mb-2">
          <label
            className="block text-white font-semibold mb-2"
            htmlFor={label}
          >
            {label}
          </label>
          <input
            className="w-full text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            type={type}
            id={id}
            ref={ref}
            {...rest}
          />
        </div>
      </>
    );
  }
);

export default Input;
