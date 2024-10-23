import { Image } from "@nextui-org/react";
import overview1 from "../../../public/img/overview1.png";
import { LogoGoogle } from "./components/logoGoogle";
import { LikeButton } from "./components/like";
import { ShareButton } from "./components/share";
import { Description } from "./components/Description";
import { DetailCourse } from "./components/detailsCourse";
import { FrecuentyQuestion } from "./components/frecuentlyQuestion";
import { InformationCourse } from "./components/InfoCouser";
import { RaitingCourse } from "./components/raitingCourse";
import { HabilitiesCard } from "./components/habilitiesCard";
import { Suggested } from "./components/suggested";
import { motion } from "framer-motion";

// Variantes de animación para hacerla más fluida y atractiva
const variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, // Empieza más pequeño y desde abajo
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1, // Termina en su tamaño original
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }, // Suave y elegante
  }
};

export const OverviewPage = () => {
  return (
    <main className="grid grid-cols-[1.4fr_1fr] bg-[#242121] px-4 pb-5 gap-x-6 ml-2 rounded-md py-3 mt-3">
      
      {/* Columna izquierda */}
      <motion.section 
        className="flex flex-col"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.25 }}
      >
        <motion.div variants={variants}>
          <Image src={overview1} className="rounded-none" />
        </motion.div>

        <motion.div variants={variants} className="flex justify-between mt-4">
          <LogoGoogle />
          <div className="flex flex-row items-center gap-x-2">
            <LikeButton numLike="20" />
            <ShareButton shared="20" />
          </div>
        </motion.div>

        <motion.div variants={variants}>
          <Description descrition="Roles claros y definidos: los administradores tienen más responsabilidad 
            de contenidos, becas, patrocinadores y la verificación de acciones sociales. Los usuarios solo interactúan con las certificaciones, acciones sociales y tokens desde su perspectiva" />
        </motion.div>

        <motion.div variants={variants}>
          <DetailCourse numLesson={2} duration={2} level={2} />
        </motion.div>

        <motion.div variants={variants}>
          <FrecuentyQuestion questions={["How long does it take to learn?", "How much does ux/ui"]} />
        </motion.div>
      </motion.section>


      <motion.section 
        className="flex flex-col"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.25 }}
      >
        <motion.div variants={variants}>
          <InformationCourse numberArticles={8} hourDemand={56} numberDownloads={6} precio={149.99} />
        </motion.div>

        <motion.div variants={variants}>
          <RaitingCourse rating={5.0} enrolled={12000} />
        </motion.div>

        <motion.div variants={variants}>
          <HabilitiesCard habilities={["UX/UI", "UX/UI", "UX/UI", "UX/UI", "UX/UI", "UX/UI"]} />
        </motion.div>

        <motion.div variants={variants}>
          <Suggested />
        </motion.div>
      </motion.section>
    </main>
  );
};
