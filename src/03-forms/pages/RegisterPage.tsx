import { FormEvent } from 'react';
import  '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { 
        name, 
        email, 
        password, 
        repeatPassword,
        isValidEmail,
        resetForm,
        onChange} = useForm({name:'', email: '', password:'', repeatPassword:''});


    const onSubmit = (evt: FormEvent<HTMLFormElement>)=> {
        evt.preventDefault();
    }

  return (
    <div>
        <h1>Register page</h1>


        <form noValidate onSubmit={onSubmit}>
            {/* name */}
            <input 
                type="text" 
                value={name} 
                placeholder='Name' 
                name='name' 
                onChange={(ev) => onChange(ev)}
                className={`${name.trim().length <= 0 && 'has-error'}`} 
            />
            { name.trim().length <= 0 && <span>Este campo es obligatorio!!!</span> }

            {/* email */}
            <input 
                type="email" 
                value={email} 
                placeholder='Email' 
                name='email'  
                onChange={onChange} 
                className={`${!isValidEmail(email) && 'has-error'}`} 
            />
            { !isValidEmail(email) && <span>El email no es válido...</span> }

            {/* password */}
            <input 
                type="password" 
                value={password} 
                placeholder='Password' 
                name='password' 
                onChange={onChange} 
            />
            { password.trim().length <= 0 && <span>Este campo es obligatorio!!!</span> }
            { password.trim().length < 6 && password.trim().length > 0 && <span>Debe tener mínimo 6 caracteres</span> }

            {/* repeatPassword */}
            <input 
                type="password" 
                value={repeatPassword} 
                placeholder='Repeat password' 
                name='repeatPassword' 
                onChange={onChange} 
            />
            { repeatPassword.trim().length <= 0 && <span>Este campo es obligatorio!!!</span> }
            { repeatPassword.trim().length > 0 && password !== repeatPassword && <span>Las contraseñas deben ser identicas</span> }

            <button type='submit'>Create</button>

            <button onClick={resetForm}>Reset form</button>

        </form>
    </div>
  )
}
