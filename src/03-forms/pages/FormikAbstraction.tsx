import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { TextInput, SelectInput, ChecboxInput } from '../components'

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction Page</h1>

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
                <TextInput 
                    label="First Name" 
                    name="firstName" 
                    placeholder="The name example" 
                    type='text' 
                />

                <TextInput 
                    label="Last Name" 
                    name="lastName" 
                    placeholder="The last name example" 
                    type='text' 
                />

                <TextInput 
                    label="Email" 
                    name="email" 
                    placeholder="The email example" 
                    type='email' 
                />

                <SelectInput label="Job type" name="jobType" >
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">It. Senior</option>
                </SelectInput>

                <ChecboxInput label="Terms and conditions" name="terms" />

                <button type='submit'>Create user</button>
            </Form>

        )}

    </Formik>
    </div>
  )
}
