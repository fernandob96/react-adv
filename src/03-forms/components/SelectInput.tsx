import { ErrorMessage, useField } from "formik";

interface ISelectInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}

export const SelectInput = ({label, ...rest}: ISelectInputProps) => {

    const [field] = useField(rest);

  return (
    <>
        <label htmlFor={rest.id || rest.name}>{label}</label>
        <select {...field} {...rest} />
        <ErrorMessage name={rest.name} component="span" />
    </>
  )
}
