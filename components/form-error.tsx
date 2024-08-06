import { FaTriangleExclamation } from "react-icons/fa6";

interface FormErrorProps{
    message?:string;
}

export const Formerror=({message}:FormErrorProps)=>{
    if (!message) {
        return null
    }
    return (
        <div className="gap-x-2 text-destructive bg-destructive/15 p-3 rounded-md flex items-center text-sm">
            <FaTriangleExclamation className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}