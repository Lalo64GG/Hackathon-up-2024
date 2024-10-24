import React from "react";
import { motion } from "framer-motion";
import { SliderEvents } from "./components/SliderEvents";
import challengeImage from "../../../public/img/challengeImage.png";
import EventCard from "./components/eventCard";
import { Organized } from "./components/organized";
import EventDetails from "./eventDetailt";

const EventosPage: React.FC = () => {
  // Variantes de animación moderna
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 0px 15px rgba(191, 237, 84, 0.8)",
      transition: {
        duration: 0.5,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotateY: 10,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const glowingEffect = {
    initial: { textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" },
    hover: {
      textShadow: "0px 0px 20px rgba(255, 255, 255, 0.9)",
      transition: { yoyo: Infinity, duration: 1.2 }
    }
  };

  return (
    <main className="w-[99%] bg-[#0F0F0F] p-6 rounded-lg mt-3 ml-2 overflow-hidden">
      <motion.div
        className="bg-[#242121] p-6 rounded-lg backdrop-blur-md relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-[2fr,3fr] gap-6"
          variants={containerVariants}
        >
          {/* Columna un poco más grande (2/5 del total) */}
          <motion.section className="col-span-1" variants={itemVariants}>
            <SliderEvents />
          </motion.section>

          {/* Columna más grande (3/5 del total) */}
          <motion.section
            className="relative flex flex-col col-span-1"
            variants={itemVariants}
          >
            <motion.img
              src={challengeImage}
              className="h-48 rounded-lg shadow-2xl cursor-pointer"
              alt="Challenge Image"
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.p
              className="mt-4 text-2xl font-bold text-center text-white"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={glowingEffect.hover}
            >
              Reforestation Camping at National Park
            </motion.p>
            <motion.p className="mt-2 text-sm text-gray-300" variants={itemVariants}>
              Join us to plant 500 trees at National Park. This activity will help restore
              green areas and fight against climate change.
            </motion.p>

            <motion.div variants={itemVariants}>
              <EventCard />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Organized />
            </motion.div>
            <motion.div variants={itemVariants}>
              <EventDetails />
            </motion.div>

            <motion.button
              className="bg-[#BFED54] text-black mt-8 py-2 px-6 rounded-full font-bold shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Apply
            </motion.button>
          </motion.section>
        </motion.div>

        {/* Background parallax effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ background: "url('/path-to-background.png') no-repeat center/cover" }}
          initial={{ y: "-10%" }}
          animate={{ y: "10%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
        />
      </motion.div>
    </main>
  );
};

export default EventosPage;
