import React, { InputHTMLAttributes } from 'react';

export interface CustomInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string;
  error?: string;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  required?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      error,
      className = '',
      wrapperClassName = '',
      labelClassName = '',
      errorClassName = '',
      leftIcon,
      rightIcon,
      maxLength,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const containerClass = `
      all__trans flex w-full items-center gap-2 rounded-md border border-white bg-white p-3 
      text-[#0A0A0A] focus-within:border-secondary-default focus-within:bg-transparent 
      focus-within:text-white focus-within:outline-0 
      ${disabled ? 'bg-gray-100' : ''}
      ${className}
    `.trim();

    const inputClass = `
      all__trans w-full outline-0 
      ${disabled ? 'bg-gray-100' : 'bg-transparent'}
    `.trim();

    return (
      <div className={`w-full ${wrapperClassName}`}>
        {label && (
          <div className='mb-2 flex items-center'>
            <div className='flex items-center gap-1'>
              <label className={`${labelClassName} text-left`}>{label}</label>
              {required && <span className='text-red-500'>*</span>}
            </div>
          </div>
        )}

        <div className={containerClass}>
          {leftIcon && <div>{leftIcon}</div>}

          <input
            ref={ref}
            maxLength={maxLength}
            disabled={disabled}
            className={inputClass}
            {...props}
          />

          {rightIcon && <div className='cursor-pointer'>{rightIcon}</div>}
        </div>

        {error && (
          <p className={`text-xsm mt-1 ml-1 text-red-500 ${errorClassName}`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
