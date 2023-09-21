import { ErrorMessage, useField } from "formik";

interface IChecboxInputProps {
    label: string;
    name: string;
    [x:string]: any;
}

export const ChecboxInput = ({label, ...rest}: IChecboxInputProps) => {

    const [field] = useField(rest);

  return (
    <>
        <label>
          <input type="checkbox" {...rest} {...field} />
          {label}
        </label>
        <ErrorMessage name={rest.name} component="span" />
    </>
  )
}
