import { ChangeEvent, useState } from "react";


export const useForm = <T>(initValues: T) => {

    const [registerData, setRegisterData] = useState(initValues);

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(prev => ({
            ...prev,
            [evt.target.name]: evt.target.value,
        }))
    }

    const resetForm = () => {
        setRegisterData(initValues);
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...registerData,
        registerData,
        isValidEmail,
        resetForm,
        onChange
    }
}