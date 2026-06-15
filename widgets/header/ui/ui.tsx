"use client"
import BorderGlow from "@/components/BorderGlow";
import { icHeader, icHeader2, icHeader3, icHeader4, icLogo, icVector } from "@/shared/api";
import Image from "next/image";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import GradientText from "@/components/GradientText";
import { CometCard } from "@/components/ui/comet-card";
import { useEffect, useState } from "react";
import Dock from "@/components/Dock";
import {
  Home,
  Info,
  Briefcase,
  Mail,
} from "lucide-react";

export default function Header(){

    const icons = [icHeader, icHeader2, icHeader3, icHeader4];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const update = () => {
        setIsMobile(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
        media.removeEventListener("change", update);
    };
    }, []);
    const dockItems = [
  {
    icon: <Home size={20} />,
    label: "Features",
    onClick: () => {},
  },
  {
    icon: <Info size={20} />,
    label: "About",
    onClick: () => {},
  },
  {
    icon: <Briefcase size={20} />,
    label: "Services",
    onClick: () => {},
  },
  {
    icon: <Mail size={20} />,
    label: "Contact",
    onClick: () => {},
  },
];

    return(
        <header className="w-full max-w-300 mx-auto mt-8 px-4">
            <nav className="flex items-center justify-between w-full gap-4">
                <Image src={icLogo} alt="logo" loading="lazy" />
                <div className="hidden lg:flex">
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#120F17"
                    borderRadius={28}
                    glowRadius={60}
                    glowIntensity={2.9}
                    coneSpread={25}
                    animated
                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                    className="w-107.75 h-11.5 flex items-center justify-center overflow-hidden"
                >
                    <div className="flex flex-row items-center justify-center gap-6 px-4 w-full h-full">
                    <Select>
                        <SelectTrigger className="w-19.75 h-7.25 bg-transparent border-none text-white p-0 shadow-none focus:ring-0">
                        <SelectValue placeholder="Features" />
                        </SelectTrigger>
                    </Select>

                    <span className="text-[16px] text-white cursor-pointer hover:text-purple-300 transition-colors">
                        About us
                    </span>

                    <span className="text-[16px] text-white cursor-pointer hover:text-purple-300 transition-colors">
                        Services
                    </span>

                    <span className="text-[16px] text-white cursor-pointer hover:text-purple-300 transition-colors">
                        Contact
                    </span>
                    </div>
                </BorderGlow>
                </div>

                <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-100">
                <Dock
                    items={dockItems}
                    panelHeight={68}
                    baseItemSize={48}
                    magnification={70}
                />
                </div>
                
                <div className="hidden lg:flex w-25 justify-end">
                <Button
                    variant="outline"
                    className="text-white text-base font-medium px-[22.5px] py-[10.5px] w-31.5 h-10 rounded-[24px] bg-[#9000FF]! hover:bg-[#aa3ffc]!"
                >
                    Contact Us
                </Button>
                </div>
            </nav>
            <div className="mt-24 flex flex-col items-center justify-center w-full">
                <h1 className="max-w-180 text-center text-[64px] font-semibold text-white leading-[1.1] tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    <span>Say goodbye to manual</span>
                    <span>tasks, Hello to</span>
                    <span className="inline-flex text-base ">
                        <GradientText
                            colors={["#9000FF", "#6A00D6", "#130335"]}
                            animationSpeed={6}
                            showBorder={false}
                            className="font-bold text-[52px] leading-none"
                        >
                            AI
                        </GradientText>
                    </span>
                </h1>
                <h3 className="mt-6 mb-8 text-center max-w-150.5 text-lg text-white">
                    Automate repetitive tasks, analyze data instantly, and integrate with your favorite apps—so you can focus on what truly matters.
                </h3>
                <Button variant={"outline"} className="flex flex-row items-center gap-2 w-50 h-11 bg-white/90! rounded-[38px] hover:bg-neutral-200/90! shadow-2xl shadow-black mb-10.25">
                    <Image src={icVector} alt="vector" loading="lazy" />
                    <span className="text-[#130335] text-base font-medium">Explore Features</span>
                </Button>

                <div className="flex flex-row items-center gap-16">
                    {icons.map((icon, index)=> (
                        <CometCard key={index}>
                            <Image src={icon} alt="" loading="lazy" />
                        </CometCard>
                    ))}
                </div>
            </div>
        </header>
    )
}
