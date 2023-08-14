"use client"
import  Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import Input from "../../../components/input";
import Container from  "react-bootstrap/Container";
import Alert from '../../../components/Check';
import { useState } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import {Button, Spinner } from "react-bootstrap";
import { login } from "../../../services/userServices";
import { useRouter } from 'next/navigation'
import style from "../../../modules/login.module.css"


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"});
    const [alert,setAlert] = useState({variant:"",text:""})
    const[loading, setLoading] = useState(false)
    const {handleLogin} = useAuthContext()
    const navigate = useRouter()
    

    const onSubmit = async (data) =>{
        setLoading(true)
        try {
            const user = await login(data);
            if(user?.token){
                setLoading(false)
                handleLogin(user)
                navigate.push("/")
            }else{           
                setLoading(false);
                setAlert({variant:"danger", text: "Usuario o contraseña incorrectos"});
            }
        } catch (e) {
            console.log(e)
            setLoading(false);
            setAlert({variant:"danger", text: "Error del servidor"});        } 
    };
    

    return (
        <>
            <div>
                <Container className={style.container}>
                <h1 className={style.h1}>Login</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className={style.input}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                        </span>
                        <Input label="E-mail"  type='email' autoComplete="username"  register={{...register("email", { required: true })}} className={style.label}/>
                            {errors.email && (
                                <div>
                                    <span>This field is required</span>
                                </div>)}
                    </div>
                    
                            
                            
                    <Input label="Contraseña" type="password" autoComplete="current-password" register={{...register("password", { required: true, minLength:6})}} className={style.label}/>
                        {errors.password && (
                            <div>
                                {errors.password?.type === "required" && <span>This field is required</span> }
                                {errors.password?.type === "minLength" && <span>*Debe tener al menos 6 caracteres</span> }
                            </div>)}

                        <Button   disabled={loading} className={style.button} type="submit">
                            {loading && <Spinner animation="border" size="sm"/>}
                            Iniciar sesion
                        </Button>

                        {alert && <Alert {...alert} />}
                </Form>
                </Container>
            </div>
        </>
    );
}


export default Login;
