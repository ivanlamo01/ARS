import Form from 'react-bootstrap/Form'
import style from '../modules/input.module.css'

const styles = {
  inputBox: {
    display: 'flex'
  },
  label: {
    position: 'absolute',
    marginTop: '10px'
  },
  input: {
    marginTop: '10px',
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    ':focus~.label': {
      top: '-5px'
    },
    ':valid~.label': {
      top: '-5px'
    }

  }
}

function Input ({ label, type = 'text', name, placeholder = '', register }) {
  return (
    <>
      <Form.Group className={style.inputBox} controlId={name} style={styles.inputBox}>
        <Form.Label style={styles.label} className={style.label}>{label}</Form.Label>
        <Form.Control className={style.input} style={styles.input} type={type} placeholder={placeholder} {...register} />
      </Form.Group>
    </>
  )
}

export default Input
