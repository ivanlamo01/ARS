import Alert from 'react-bootstrap/Alert';
import { useRouter } from 'next/navigation';

function Check({variant,text, duration=0, link}){
    const router= useRouter();
    if(duration!==0 && link){
        setTimeout(
            ()=>{
                router.push(link)
            }, duration
        )
    }
    return <Alert variant={variant}> {text}</Alert>

}

export default Check;
