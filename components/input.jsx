import  Form from "react-bootstrap/Form"

const styles={
    inputBox:{
        display:"flex",
    },

    input:{
        marginTop:"10px",
        width:"100%",
        height:"100%",
        background:"transparent",
        border:"none",
        outline:"none",
    }
}

function Input({label, type="text",name,placeholder="",register}){
    return(
        <>
            <Form.Group className="mb-3" controlId={name} style={styles.inputBox}>
                <Form.Label >{label}</Form.Label>
                <Form.Control style={styles.input} type={type}  placeholder={placeholder} {...register} />
            </Form.Group>  
        </>          
    )
}

export default Input;