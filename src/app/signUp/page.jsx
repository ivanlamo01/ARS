"use client"
import  Form from "react-bootstrap/Form"
import {Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { fetchUsers } from "../../../services/userServices";
import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import Check from '../../../components/check';
import ButtonWhitLoading from "../../../components/loadButton";

export default function signUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"});
  const [alert,setAlert] = useState({variant:"",text:""})
  const[loading, setLoading] = useState(false)
  const navigate = useRouter()
  
 /* useEffect(() => {
    if(isAuthenticated){
      setLoading(false)
      setAlert({variant:"success",text:"Usuario registrado correctamente"})
      setTimeout(() => {
        navigate.push("/")}
        , 2500);}
    },[isAuthenticated,navigate])
  */
 
    /*
  useEffect(() => {
    if(registerErrors.length > 0){
      setLoading(false)}},[registerErrors])
    
       <div>
          {
            registerErrors.map((error,i)=>(
              <div key={i}>
                {error}
              </div>
            ))
          }
        </div>
    
    
      */
  const onSubmit = handleSubmit(async (values) =>{
    setLoading(true)
    signup(values)
  })
  
    return (
      <div>
      <div >
          <h1 >BIENVENIDO/A!</h1>
      </div>
      <Container >
        <Form 
          onSubmit= {onSubmit}
          >
          <Input label="Nombre de ususario" autoComplete="new" register={{...register("userName", { required: true })}}/>
            {errors.userName && (
              <div>
                  {errors.userName?.type === "required" && <span>This field is required</span> }
                  {errors.userName?.type === "unique" && <span>Este usuario ya esta registrado</span> }
              </div>)}

          <Input label="E-mail"  type='email' autoComplete="newEmail" register={{...register("email", { required: true })}} />
            {errors.email && (
              <div>
                  {errors.email?.type === "required" && <span>This field is required</span> }
                  {errors.email?.type === "unique" && <span>Este usuario ya esta registrado</span> }
              </div>)}
          <Input label="Contraseña" type="password" autoComplete="newPassword" id="password" register={{...register("password", { required: true,pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}(?=.*[$&+,:;=?@#|'<>.^*()%!-])/})}} />
            {errors.password && (
              <div>
                {errors.password?.type === "required" && <span>This field is required</span> }
                {errors.password?.type === "pattern" && <span>La contraseña debe tener al menos una letra mayuscula, una minuscula, un numero y un caracter especial</span> }
              </div>)}
          <ButtonWhitLoading variant="primary" type="submit" loading={loading}>
            Registrarse
          </ButtonWhitLoading>
          {alert && <Check {...alert} />}
        </Form>
      </Container>
    </div>
  );
}
    
  