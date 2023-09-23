import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import formData from '../data/custom-form.json'
import { SelectInput, TextInput } from '../components';

const initialValues: { [key:string] : any } = {};
const validations: { [key:string] : any } = {}

for (const input of formData) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {

        if(rule.type === 'required') {
            schema = schema.required('Campo requerido');
        }

        if(rule.type === 'minLength') {
            schema = schema.min(rule.value as number, `Minimo de ${rule.value as number} caracteres`);
        }

        if(rule.type === 'email') {
            schema = schema.email('Debe ser un email');
        }
    }

    validations[input.name] = schema;
}

const validationSchema = Yup.object({...validations});


export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values)=>{
                console.log('values', values);
            }}
        >
            {(formik)=>(
                <Form noValidate>
                    <span>Hola Mundo</span>
                    {
                        formData.map(({label, type, name, placeholder, options})=>{

                            if(type.includes("input") || type.includes("email")){
                                return <TextInput 
                                    key={name}
                                    type={type as any} 
                                    label={label} 
                                    name={name} 
                                    placeholder={placeholder} 
                                />
                            }else if (type.includes("select")){
                                return(
                                    <SelectInput 
                                        key={name}
                                        label={label} 
                                        name={name} 
                                    >
                                        <option value="">Pick something</option>
                                        {
                                            options?.map(({id, label})=>(
                                                <option key={id} value={label}>{label}</option>
                                            ))
                                        }
                                    </SelectInput>
                                )
                            }
                            
                        })
                    }
                    <button type="submit">Create</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
