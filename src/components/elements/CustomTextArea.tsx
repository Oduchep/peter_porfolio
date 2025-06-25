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
      all__trans w-full rounded-md border border-white bg-white px-4 py-2.5 
      text-[#0A0A0A] focus:border-secondary-default focus:bg-transparent 
      focus:text-white focus:outline-0 resize-none
      ${disabled ? 'bg-gray-100' : ''}
      ${className}
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
