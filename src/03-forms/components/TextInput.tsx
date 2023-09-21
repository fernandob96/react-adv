import { ErrorMessage, useField } from "formik";

interface ITextInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}

export const TextInput = ({label, ...rest}: ITextInputProps) => {

    const [field] = useField(rest);

  return (
    <>
        <label htmlFor={rest.id || rest.name}>{label}</label>
        <input className="text-input" {...field} {...rest} />
        <ErrorMessage name={rest.name} component="span" />
    </>
  )
}
