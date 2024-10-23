import { Image } from "@nextui-org/react"
import overview1 from "../../../public/img/overview1.png"
import { LogoGoogle } from "./components/logoGoogle"
import { LikeButton } from "./components/like"
import { ShareButton } from "./components/share"
import { Description } from "./components/Description"
import { DetailCourse } from "./components/detailsCourse"
import { FrecuentyQuestion } from "./components/frecuentlyQuestion"
import { InformationCourse } from "./components/InfoCouser"
import { RaitingCourse } from "./components/raitingCourse"
import { HabilitiesCard } from "./components/habilitiesCard"
import { Suggested } from "./components/suggested"
export const OverviewPage = () => {
    return (
      <main className="grid grid-cols-[1.4fr_1fr] bg-[#242121] px-4 pb-5 gap-x-6 ml-2 rounded-md py-3 mt-3">
        
        {/* Para la columna izquierda */}
        <section className="flex flex-col">
          <div>
            <Image src={overview1} className="rounded-none" />
            <div className="flex justify-between mt-4">
              <LogoGoogle />
              <div className="flex flex-row items-center gap-x-2">
                <LikeButton numLike="20" />
                <ShareButton shared="20" />
              </div>
            </div>
            <Description descrition="Roles claros y definidos: los administradores tienen más responsabilidad 
              de contenidos, becas, patrocinadores y la verificación de acciones sociales. Los usuarios solo interactúan con las certificaciones, acciones sociales y tokens desde su perspectiva" />
          </div>
  
          <DetailCourse numLesson={2} duration={2} level={2} />
          <FrecuentyQuestion questions={["How long does it take to learn?", "How much does ux/ui"]} />
        </section>
  
        {/* Para la columna derecha */}
        <section className="flex flex-col">
          <InformationCourse numberArticles={8} hourDemand={56} numberDownloads={6} precio={149.99} />
          <RaitingCourse rating={5.0} enrolled={12000} />
          <HabilitiesCard habilities={["UX/UI", "UX/UI", "UX/UI", "UX/UI", "UX/UI", "UX/UI"]} />
          <Suggested />
        </section>
      </main>
    );
  };
  