import { BannerPerfil } from "./components/base/banner";
import { InformacionUser } from "./components/base/informacionUser";
import { SubMenu } from "./components/subMenu";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 45 }, 
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1, 
      ease: [0.43, 0.13, 0.23, 0.96], 
      when: "beforeChildren",
      staggerChildren: 0.2, 
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: {
      duration: 0.8, 
      ease: [0.6, 0.05, 0.1, 1],
    },
  },
};

const PerfilPage = () => {
  return (
    <motion.main
      className="w-[99%] bg-[#0F0F0F] p-6 rounded-lg ml-2 mt-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: 1200 }} 
    >
      <motion.div
        className="bg-[#242121] p-4 rounded-lg backdrop-blur-md"
        variants={childVariants}
      >
        <motion.div variants={childVariants}>
          <BannerPerfil />
        </motion.div>

        <motion.div variants={childVariants}>
          <InformacionUser
            name="Alejandro VillaLobos"
            email="VillaLobos@vara.gmail.com"
            level={5}
            description="Hi, I’m Josh! I’m passionate about creating impactful user experiences and leveraging technology to drive positive social change.
            Through this platform, I’ve completed several certifications in design and programming, while contributing to environmental causes 
            like reforestation and beach cleanups. I’m always excited to learn new skills and make a difference in my community."
          />
        </motion.div>

        <motion.div variants={childVariants}>
          <SubMenu />
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default PerfilPage;
