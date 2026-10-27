import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const fieldClass =
  'w-full border-b border-line-strong bg-transparent py-3 text-base text-fg outline-none transition-colors placeholder:text-subtle focus:border-fg aria-invalid:border-red-500';

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, required, className = '', ...props }, ref) => {
    const id = useId();
    const errorId = `${id}-error`;

    return (
      <div className='w-full'>
        <label htmlFor={id} className='text-muted font-mono text-xs'>
          {label}
          {required && <span aria-hidden='true'> *</span>}
        </label>
        <input
          ref={ref}
          id={id}
          required={required}
          aria-invalid={!!error || undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${fieldClass} ${className}`}
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

CustomInput.displayName = 'CustomInput';

export default CustomInput;
