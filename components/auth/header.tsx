import { FaUnlock } from "react-icons/fa6";

interface HeaderProps{
    label:string
}

export const Header = ({label}:HeaderProps)=>{
    return(
        <div className="w-full flex flex-col gap-y-4 justify-center items-center">
            <h1 className="flex gap-4 text-3xl">
            <FaUnlock />

                Auth
            </h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}