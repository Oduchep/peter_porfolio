import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaTypes extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  max?: any;
  error?: string | undefined;
  className?: string;
  required?: boolean;
  labelClassName?: string;
}

const TextArea = React.forwardRef(function TextArea(
  {
    label,
    placeholder,
    disabled,
    max,
    error,
    className,
    required,
    labelClassName,
    ...props
  }: TextAreaTypes,
  ref: React.LegacyRef<HTMLTextAreaElement> | undefined
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

      <textarea
        className={`all__trans w-full rounded-md border border-white bg-white px-4 py-2.5 text-[#0A0A0A] focus:border-secondary-default focus:bg-transparent focus:text-white focus:outline-0 ${
          disabled ? 'bg-gray-100' : ''
        } ${className || 'h-32'}`}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      {error && <div className='text-xsm ml-1 mt-2 text-red-500'>{error}</div>}
    </div>
  );
});

export default TextArea;
