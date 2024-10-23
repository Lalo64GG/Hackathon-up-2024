import logoGoole from "../../../../public/img/logo_Google.png"
import { Image } from "@nextui-org/react";
export const LogoGoogle = ()=>{

    return (
        <div className="flex items-center gap-x-2">
           <Image src={logoGoole} width={15} height={15}/>
           <p className="text-md">Certification by Google</p>
        </div>
    )
}