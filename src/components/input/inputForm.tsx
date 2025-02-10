import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import './input.css';


interface Params<T extends FieldValues> {
  name:  Path<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
  type: string;
  autoComplete: string;
}

export const Input = <T extends FieldValues>({
  name,
  label,
  control,
  error,
  type,
  autoComplete
}: Params<T>) => {
  return (
    <div className="form-group">
      <label htmlFor={String(name)} className="form__label">{label}</label>
      
      <Controller 
        name={name} 
        control={control} 
        render={({ field }) => (
          <input 
            {...field} 
            autoComplete={autoComplete}
            id={String(name)} 
            type={type} 
            placeholder={label} 
            className={`form__input ${String(name)}`} 
          />
        )}
      />
      
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};
