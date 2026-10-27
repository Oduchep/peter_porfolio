import { forwardRef, TextareaHTMLAttributes, useId } from 'react';
import { fieldClass } from './CustomInput';

interface CustomTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const CustomTextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
  ({ label, error, required, rows = 4, className = '', ...props }, ref) => {
    const id = useId();
    const errorId = `${id}-error`;

    return (
      <div className='w-full'>
        <label htmlFor={id} className='text-muted font-mono text-xs'>
          {label}
          {required && <span aria-hidden='true'> *</span>}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          required={required}
          aria-invalid={!!error || undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${fieldClass} resize-none ${className}`}
          {...props}
        />
        {error && (
          <p id={errorId} className='mt-2 text-sm text-red-600 dark:text-red-400'>
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomTextArea.displayName = 'CustomTextArea';

export default CustomTextArea;
