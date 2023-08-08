import Alert from 'react-bootstrap/Alert';
import { useRouter } from 'next/navigation'

function Check({variant,text, duration=0, link}){
    const navigate= useRouter();
    if(duration!==0 && link){
        setTimeout(
            ()=>{
                navigate.push(link)
            }, duration
        )
    }
    return <Alert variant={variant}> {text}</Alert>

}

export default Check;
