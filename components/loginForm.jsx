"use client"
import  Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import Input from "./input";
import Container from  "react-bootstrap/Container";
import Alert from './Check';
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import {Button, Spinner } from "react-bootstrap";
import { login } from "../services/userServices";
import { useRouter } from 'next/navigation'
import style from "../modules/login.module.css"
import { BorderBottom } from "react-bootstrap-icons";

const styles ={
    button:{
        backgroundColor: "#202d56",
        width: "100%" ,
        height: "70px" ,
    },
    icon:{
        position:"absolute",
        right:"8px",
        fontSize: "1.2em",
        color:"#162938",
        lineHeight:"57px",
    },
    input:{
        width: "100%" ,
        height:"50px",
        borderBottom:"2px solid #162938",
    }
}

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
        
            <div className={style.logform}>
                <Container className={style.container} id="cont">
                    <h1 >Login</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div  style={styles.input}>
                        <span style={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                        </span>
                        <Input label="Email"  type='email'  register={{...register("email", { required: true })}} style={{marginTop:"10px"}}/>
                    </div>

                    {errors.email && (
                        <div>
                            <span>This field is required</span>
                        </div>)}


                    <div  style={styles.input}>
                        <span style={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                        </span>
                        <Input label="Password"  type='password'  register={{...register("email", { required: true })}} style={{marginTop:"10px"}}/>
                    </div>
                    {errors.password && (
                        <div>
                            {errors.password?.type === "required" && <span>This field is required</span> }
                            {errors.password?.type === "minLength" && <span>*Debe tener al menos 6 caracteres</span> }
                        </div>)}

                        <Button   disabled={loading} style={styles.button} type="submit">
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
