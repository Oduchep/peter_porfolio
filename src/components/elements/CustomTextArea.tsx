import React, { TextareaHTMLAttributes } from 'react';

interface CustomTextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  required?: boolean;
}

const CustomTextArea = React.forwardRef<
  HTMLTextAreaElement,
  CustomTextareaProps
>(
  (
    {
      label,
      error,
      className = '',
      wrapperClassName = '',
      labelClassName = '',
      errorClassName = '',
      required,
      disabled,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const textareaClassName = `
      all__trans w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3
      text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-tertiary-default
      focus:bg-white focus:ring-4 focus:ring-slate-200/70 focus:outline-0
      dark:border-white/12 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35
      dark:focus:border-secondary-default dark:focus:bg-white/8 dark:focus:ring-white/10
      ${disabled ? 'cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-white/40' : ''}
      ${className}
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

        <textarea
          ref={ref}
          rows={rows}
          disabled={disabled}
          className={textareaClassName}
          {...props}
        />

        {error && (
          <p className={`text-xsm mt-2 ml-1 text-red-500 ${errorClassName}`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomTextArea.displayName = 'CustomTextArea';

export default CustomTextArea;
