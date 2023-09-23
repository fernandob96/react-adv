import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../components';
import  '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
            }}
            onSubmit={(values)=>{
                console.log('values', values);
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .required('Campo requerido')
                        .min(2, 'Mínimo 2 caracteres')
                        .max(15, 'Máximos 15 caracteres'),
                    email: Yup.string()
                            .required('Campo requerido')
                            .email('Debe ser un email'),
                    password: Yup.string()
                                .required('Campo requerido')
                                .min(6, 'Mínimo 6 caracteres'),
                    repeatPassword: Yup.string()
                                    .required('Campo requerido')
                                    .min(6, 'Mínimo 6 caracteres')
                                    .oneOf([Yup.ref('password')], 'Debe ser igual al password')
                })
            }
        >
            {
                ({handleReset}) => (
                    <Form >
                        <TextInput 
                            label="Name" 
                            name="name" 
                            placeholder="The name example" 
                            type='text' 
                        />

                        <TextInput 
                            label="Email" 
                            name="email" 
                            placeholder="The email example" 
                            type='email' 
                        />

                        <TextInput 
                            label="Password" 
                            name="password" 
                            type='password' 
                        />

                        <TextInput 
                            label="Repeat Password" 
                            name="repeatPassword" 
                            type='password' 
                        />

                        
                        <button type='submit'>Create</button>

                        <button onClick={handleReset}>Reset form</button>

                    </Form>
                )
            }  
            
        </Formik>
    </div>
  )
}
