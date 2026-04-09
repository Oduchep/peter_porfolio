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
      all__trans flex w-full items-center gap-2 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3
      text-slate-900 shadow-sm focus-within:border-tertiary-default focus-within:bg-white
      focus-within:ring-4 focus-within:ring-slate-200/70 focus-within:outline-0
      dark:border-white/12 dark:bg-white/5 dark:text-white dark:focus-within:border-secondary-default
      dark:focus-within:bg-white/8 dark:focus-within:ring-white/10
      ${disabled ? 'cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-white/40' : ''}
      ${className}
    `.trim();

    const inputClass = `
      all__trans w-full bg-transparent outline-0 placeholder:text-slate-400 dark:placeholder:text-white/35
    `.trim();

    return (
      <div className={`w-full ${wrapperClassName}`}>
        {label && (
          <div className='mb-2 flex items-center'>
            <div className='flex items-center gap-1'>
              <label
                className={`${labelClassName} text-left text-sm font-medium text-slate-700 dark:text-white/80`}
              >
                {label}
              </label>
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
