"use client";

import LightRays from "@/components/LightRays";
import ShinyText from "@/components/ShinyText";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { icLogo, icSocial, icVector } from "@/shared/api";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative w-full overflow-hidden">
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
          className="w-full h-full"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <footer className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 pt-12 lg:pt-20 pb-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <ShinyText
            text="Power Your Operations with Trusted AI"
            speed={2.5}
            delay={0}
            color="#fff"
            shineColor="#D6C5FF"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[115%] tracking-tight mb-6"
          />

          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-3xl leading-7 mb-8">
            Automate emails, data entry, scheduling, and more with cutting-edge
            AI tools designed for growing businesses. Work smarter, not harder.
          </p>

          <Button
            variant="outline"
            className="flex items-center gap-2 h-12 px-6 rounded-full bg-white/90! hover:bg-white! border-none mb-14"
          >
            <Image src={icVector} alt="vector" loading="lazy" />
            <span className="text-[#130335] text-base font-medium">
              Explore Features
            </span>
          </Button>
        </div>

        <Separator className="bg-[#B59BF5]/40 mb-12 lg:mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div>
            <Image
              src={icLogo}
              alt="logo"
              loading="lazy"
              className="w-auto h-10 mb-5"
            />

            <p className="text-white text-base lg:text-lg leading-7 max-w-xs">
              AI Automation Development company.
            </p>
          </div>

          <div>
            <h4 className="text-[#B59BF5] text-lg font-medium mb-5">
              Home
            </h4>

            <ul className="space-y-2">
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Buy crypto
              </li>
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Market
              </li>
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Learn crypto
              </li>
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#B59BF5] text-lg font-medium mb-5">
              Info
            </h4>

            <ul className="space-y-2">
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Buy crypto
              </li>
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Market
              </li>
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Learn crypto
              </li>
              <li className="text-white hover:text-[#B59BF5] transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#B59BF5] text-lg font-medium mb-5">
              Resource
            </h4>

            <ul className="space-y-2">
              <li className="text-white">
                43252 Borer Mountains
              </li>
              <li className="text-white">
                Zackerychester
              </li>
              <li className="text-white">
                Bahamas
              </li>
              <li className="text-white">
                732-528-4945
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-8 lg:my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[#D3D3D3] text-sm text-center md:text-left">
            Copyright © 2025 Fuad. All rights reserved
          </span>

          <Image
            src={icSocial}
            alt="social media"
            loading="lazy"
            className="h-auto w-auto max-w-55"
          />
        </div>
      </footer>
    </div>
  );
}