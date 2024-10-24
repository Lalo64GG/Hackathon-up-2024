import perfilImg from "../../../../../public/img/perfil.png"
import bannerPerfil from "../../../../../public/img/BannerPerfil.png"
export const BannerPerfil = () =>{
  
    return (
        <div className="relative">
          <img src={bannerPerfil} className="w-full mb-12"/>
          <img src={perfilImg} alt="Emoji" className="absolute w-32 h-32 left-3 bottom-[-3rem]"/>
        </div>
  
    )
}