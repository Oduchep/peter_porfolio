import React, { InputHTMLAttributes, ReactNode } from 'react';

interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  max?: any;
  bg?: string;
  value?: any;
  onChange?: any;
  error?: string | undefined;
  required?: boolean;
  right_icon?: ReactNode | string;
  left_icon?: ReactNode | string;
  inputClassName?: string;
}

const Input = React.forwardRef(function Input(
  {
    type,
    label,
    placeholder,
    className,
    labelClassName,
    disabled,
    max,
    value,
    onChange,
    bg,
    error,
    required,
    left_icon,
    right_icon,
    inputClassName,
    ...props
  }: InputTypes,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div>
      {label && (
        <div className='mb-2 flex items-center'>
          {label && (
            <div className='flex items-center gap-1'>
              <label className={`${labelClassName} text-left`}>{label}</label>

              {required && <span className='text-red-500'>*</span>}
            </div>
          )}
        </div>
      )}

      <div
        className={
          className ??
          `all__trans flex w-full items-center gap-2 rounded-md border border-white bg-white p-3 text-[#0A0A0A] focus-within:border-secondary-default focus-within:bg-transparent focus-within:text-white focus-within:outline-0 ${
            disabled && 'bg-gray-100'
          }`
        }
      >
        {left_icon && <div>{left_icon}</div>}
        <input
          className={`${inputClassName} all__trans w-full outline-0 ${
            disabled ? 'bg-gray-100' : 'bg-transparent'
          }`}
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          max={max}
          {...props}
        />
        {right_icon && <div className='cursor-pointer'>{right_icon}</div>}
      </div>

      {error && <div className='text-xsm ml-1 mt-2 text-red-500'>{error}</div>}
    </div>
  );
});

export default Input;
