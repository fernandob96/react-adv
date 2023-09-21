import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Yup Page</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                jobType: '',
                terms: false,
            }}
            onSubmit={(values)=>{
                console.log('values', values);
            }}
            validationSchema={
                Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe tener 15 caratcteres o menos')
                                .required('Campo es requerido'),
                lastName: Yup.string()
                            .max(15, 'Debe tener 15 caratcteres o menos')
                            .required('Campo es requerido'),
                email: Yup.string()
                            .email('Formato de email no es correcto')
                            .required('Campo es requerido'),
                jobType: Yup.string()
                            .required('Campo es requerido'),
                terms: Yup.boolean()
                            .oneOf([true], 'Debes de aceptar los términos y codiciones de la página')
            })}
    >
        {(formik)=>(

            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" component="span" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" component="span" />

                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="span" />

                <label htmlFor="jobType">Job Type</label>
                <Field name="jobType" as="select">
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">It. Senior</option>
                </Field>
                <ErrorMessage name="jobType" component="span" />

                <label>
                    <Field name="terms" type="checkbox" />
                    Terms and conditions
                </label>
                <ErrorMessage name="terms" component="span" />

                <button type='submit'>Create user</button>
            </Form>

        )}

    </Formik>
    </div>
  )
}
