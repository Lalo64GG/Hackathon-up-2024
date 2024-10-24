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

export const OverviewPage = () => {
  // Variantes de elementos con animación personalizada
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom,
        duration: 0.8, // Duración más larga para una animación más lenta
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.main
      className="grid grid-cols-[1.4fr_1fr] bg-[#242121] px-4 pb-5 gap-x-6 ml-2 rounded-md py-3 mt-3"
      initial="hidden"
      animate="visible"
    >
      {/* Para la columna izquierda */}
      <section className="flex flex-col">
        <motion.div
          variants={itemVariants}
          custom={0} // Retraso inicial
          initial="hidden"
          animate="visible"
        >
          <Image src={overview1} className="rounded-none" />
        </motion.div>

        <motion.div
          className="flex justify-between mt-4"
          variants={itemVariants}
          custom={0.6} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <LogoGoogle />
          <div className="flex flex-row items-center gap-x-2">
            <LikeButton numLike="20" />
            <ShareButton shared="20" />
          </div>
        </motion.div>

        <motion.div
          className="mt-4"
          variants={itemVariants}
          custom={1.2} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <Description
            descrition="Roles claros y definidos: los administradores tienen más responsabilidad 
            de contenidos, becas, patrocinadores y la verificación de acciones sociales. Los usuarios solo interactúan con las certificaciones, acciones sociales y tokens desde su perspectiva"
          />
        </motion.div>

        <motion.div
          className="mt-4"
          variants={itemVariants}
          custom={1.8} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <DetailCourse numLesson={2} duration={2} level={2} />
        </motion.div>

        <motion.div
          className="mt-4"
          variants={itemVariants}
          custom={2.4} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <FrecuentyQuestion
            questions={["How long does it take to learn?", "How much does ux/ui"]}
          />
        </motion.div>
      </section>

      {/* Para la columna derecha */}
      <section className="flex flex-col">
        <motion.div
          className="mb-4"
          variants={itemVariants}
          custom={0.3} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <InformationCourse
            numberArticles={8}
            hourDemand={56}
            numberDownloads={6}
            precio={149.99}
          />
        </motion.div>

        <motion.div
          className="mb-4"
          variants={itemVariants}
          custom={0.9} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <RaitingCourse rating={5.0} enrolled={12000} />
        </motion.div>

        <motion.div
          className="mb-4"
          variants={itemVariants}
          custom={1.5} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <HabilitiesCard habilities={["UX/UI", "UX/UI", "UX/UI", "UX/UI", "UX/UI", "UX/UI"]} />
        </motion.div>

        <motion.div
          className="mb-4"
          variants={itemVariants}
          custom={2.1} // Retraso intercalado
          initial="hidden"
          animate="visible"
        >
          <Suggested />
        </motion.div>
      </section>
    </motion.main>
  );
};
