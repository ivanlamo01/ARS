import  Form from "react-bootstrap/Form"
import Input from "../components/input";
import {Container } from "react-bootstrap";
import Check from '../Components/Check';
import ButtonWhitLoading from "../components/loadButton";


export default function signUp() {
    return (
      <div>
      <div style={style.separador}>
          <h1 style={style.h1}>BIENVENIDO/A!</h1>
      </div>
      <Container style={style.container}>
        <Form 
          onSubmit={onSubmit}
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
          <ButtonWhitLoading variant="primary" type="submit" loading={loading} style={style.button}>
            Registrarse
          </ButtonWhitLoading>
          {alert && <Check {...alert} />}
        </Form>
        <div>
          {
            registerErrors.map((error,i)=>(
              <div key={i}>
                {error}
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}
    
  