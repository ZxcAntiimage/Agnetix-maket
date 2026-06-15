"use client"

import ClickSpark from "@/components/ClickSpark";
import LightRays from "@/components/LightRays";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <div className="wrapper bg-[#000314] min-h-screen text-white w-full">
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="relative w-full h-225 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <LightRays
              raysOrigin="top-center"
              raysColor="radial-gradient(circle_at_center, #FFBFF1 0%, rgba(136, 0, 255, 0.29) 62%, rgba(0, 3, 20, 0) 100%)"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={3}
              followMouse
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays w-full h-full"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full"
          >
            <Header />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 w-full"
        >
          <Main />
        </motion.div>

        <div className="relative z-10 w-full">
          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
}