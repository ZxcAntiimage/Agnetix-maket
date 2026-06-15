"use client"
import LogoLoop from "@/components/LogoLoop";
import Parallax from "@/components/Parallax";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { icCard1, icCard2, icCard3, icCard4, icCard5, icCompany, icCompany2, icCompany3, icCompany4, icEmail, icHotIwWork, icHotIwWork2, icHotIwWork3, icPhone, icSpeaker, icTeaching, icUpload } from "@/shared/api";
import { PricingSection } from "@/widgets/pricingSelection";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

export default function Main(){

    const techLogos = [
    {
        node: <Image src={icCompany} alt="Ephicent" className="h-8 sm:h-10 w-auto object-contain" />, 
        title: "Ephicent", 
        href: "/"
    },
    {
        node: <Image src={icCompany2} alt="2020inc" className="h-8 sm:h-10 w-auto object-contain" />, 
        title: "2020inc", 
        href: "/"
    },
    {
        node: <Image src={icCompany3} alt="Arise Health" className="h-8 sm:h-10 w-auto object-contain" />, 
        title: "Arise Health", 
        href: "/"
    },
    {
        node: <Image src={icCompany4} alt="Tooghether" className="h-8 sm:h-10 w-auto object-contain" />, 
        title: "Tooghether", 
        href: "/"
    }
];

const cards = [
    {
        img: icUpload,
        title: "Upload Your Data",
        subtitle: "Our AI automatically processes and prepares your information for analysis."
    },
    {
        img: icTeaching,
        title: "AI processes & learns",
        subtitle: "AI analyzes patterns, classifies data, and learns from inputs to automate tasks."
    },
    {
        img: icSpeaker,
        title: "Get results instantly",
        subtitle: "Receive structured outputs, actionable insights, or automated actions workflow needs."
    }
]
const cards2 = [
    {
        img: (
        <div className="w-full h-full overflow-hidden rounded-xl">
            <Image
            src={icCard1}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            />
        </div>
        ),
        title: "AI Workflow Builder",
        subtitle: "Drag-and-drop interface to create custom automation flows."
    },
    {
        img: (
        <div className="w-full h-full overflow-hidden rounded-xl">
            <Image
            src={icCard2}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            />
        </div>
        ),
        title: "Smart Analytics",
        subtitle: "Real-time data and performance tracking with actionable insights."
    },
    {
        img: (
        <div className="w-full h-full overflow-hidden rounded-xl">
            <Image
            src={icCard3}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            />
        </div>
        ),
        title: "24/7 Automation",
        subtitle: "Runs in the background, even while you sleep."
    },
    {
        img: (
        <div className="w-full h-full overflow-hidden rounded-xl">
            <Image
            src={icCard4}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            />
        </div>
        ),
        title: "Multi-Platform Integrations",
        subtitle: "Connect your favorite tools: Slack, CRM, Google Sheets, Zapier, and more."
    },
    {
        img: (
        <div className="w-full h-full overflow-hidden rounded-xl">
            <Image
            src={icCard5}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            />
        </div>
        ),
        title: "Enterprise-Grade Security",
        subtitle: "Your data is protected with end-to-end encryption."
    },
]

const [activeStep, setActiveStep] = useState<number>(0);
    const steps = [
    {
        id: 0,
        label: "Connect Your Tools",
        subtitle: "Connect Your Tools",
        description:
        "Easily link your favorite apps and platforms — like Google Sheets, Slack, CRM tools, or custom APIs — in just a few clicks.",
        img: icHotIwWork,
    },

    {
        id: 1,
        label: "Define Your Rules",
        subtitle: "Define Your Rules",
        description:
        "Set conditions, triggers, and actions using a simple visual interface without writing any code.",
        img: icHotIwWork2,
    },

    {
        id: 2,
        label: "Let AI Handle the Rest",
        subtitle: "Let AI Handle the Rest",
        description:
        "Once configured, AI continuously monitors, analyzes, and executes workflows automatically.",
        img: icHotIwWork3,
    },
    ];
const currentStep = steps[activeStep];
    return(
        <main className="mt-10 sm:mt-12 lg:mt-14 w-full mx-auto px-4 text-center overflow-x-hidden">
            <span className="text-[#A7A7A7] text-base sm:text-lg md:text-[20px] font-medium">
                Trusted by <span><ShinyText
                text="10,000+ "
                speed={3}
                delay={0}
                color="#A7A7A7"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
            /></span> Businesses Worldwide
            </span>
            <div className="w-full mt-6">
                <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    ariaLabel="Technology partners"
                />
            </div>
            <div className="w-full mt-16 sm:mt-24 lg:mt-39 flex justify-center">
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5 w-full max-w-7xl mx-auto">
                    {cards.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{
                        opacity: 0,
                        y: 100,
                        }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        }}
                        viewport={{
                        once: true,
                        amount: 0.2,
                        }}
                        transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        }}
                    >
                        <SpotlightCard
                        className="custom-spotlight-card w-full sm:w-72 lg:w-95 h-auto min-h-90 lg:h-111.75 px-6 sm:px-8 py-8 sm:py-10 bg-radial from-[#9000FF] to-[#270258] flex flex-col"
                        spotlightColor="rgba(186, 110, 244, 0.2)"
                        >
                        <Image
                            src={item.img}
                            alt=""
                            loading="lazy"
                            className="object-contain w-12 h-12 sm:w-14 sm:h-14"
                        />

                        <div className="mt-auto flex flex-col text-left max-w-full sm:max-w-55.25">
                            <span className="text-2xl sm:text-[28px] lg:text-[35px] text-white font-medium mb-3 sm:mb-5">
                            {item.title}
                            </span>

                            <span className="text-sm sm:text-base text-white leading-6">
                            {item.subtitle}
                            </span>
                        </div>
                        </SpotlightCard>
                    </motion.div>
                    ))}
                </div>
                </div>
            <div className="mt-8 mb-16 sm:mb-24 lg:mb-50 mx-auto max-w-139.25">
                <ScrollReveal
                    as="p"
                    enableBlur
                    baseOpacity={0.15}
                    baseRotation={2}
                    blurStrength={5}
                    containerClassName="text-center"
                    textClassName="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed"
                >
                    AI unlocks efficiency—let automation do the work while you focus on what matters.
                </ScrollReveal>
            </div>
            <div className="w-full flex flex-col max-w-300 justify-center mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4">
                        <ShinyText
                        text="Everything You Need to Automate Your Business"
                        speed={2.5}
                        delay={0}
                        color="#fff"
                        shineColor="#D6C5FF"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                        className="max-w-full lg:max-w-137.25 flex-wrap text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[117%] tracking-[-2%] text-left"
                        />
                        <div className="w-full max-w-full lg:max-w-95.75 flex-wrap text-left lg:mb-16">
                            <ScrollReveal
                                as="p"
                                baseOpacity={0.2}
                                blurStrength={4}
                                textClassName="text-base sm:text-lg text-white leading-6"
                            >
                                Automate repetitive tasks, analyze data instantly, and integrate with your favorite apps—so you can focus on what truly matters.
                            </ScrollReveal>
                        </div>
                </div>
                <div className="w-full mt-10 sm:mt-16"> 
                    <BentoGrid className="w-full mx-auto"> 
                        {cards2.map((item, index) => ( 
                        <BentoGridItem 
                            key={index} 
                            title={item.title} 
                            description={item.subtitle} 
                            header={item.img}
                            className={index === 3 ? "md:col-span-2" : ""}
                        /> 
                        ))} 
                    </BentoGrid> 
                </div>
            </div>
            <div className="w-full mt-20 sm:mt-32 lg:mt-50 flex flex-col mb-16 sm:mb-20 lg:mb-25 mx-auto max-w-300">
                <div className="mx-auto mb-10 sm:mb-16 flex flex-col text-center max-w-2xl">
                    <ShinyText
                    text="How It Works"
                    speed={2.5}
                    delay={0}
                    color="#fff"
                    shineColor="#D6C5FF"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    className="text-center text-[36px] sm:text-[44px] lg:text-[56px] font-medium leading-[117%] tracking-[-2%] mb-6"
                    />

                    <ScrollReveal
                        as="p"
                        baseOpacity={0.2}
                        blurStrength={4}
                        containerClassName="text-center"
                        textClassName="text-base sm:text-lg text-white leading-6"
                    >
                        How It Works in 3 Simple Steps
                    </ScrollReveal>
                </div>

                <div className="w-full p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 bg-[#00041A] rounded-[24px] sm:rounded-[32px] overflow-x-auto">
                    {steps.map((step, index) => {
                    const isActive = activeStep === step.id;

                    return (
                        <div
                        key={step.id}
                        className="flex flex-row items-center w-full sm:w-auto"
                        >
                        <button
                            onClick={() => setActiveStep(step.id)}
                            className="focus:outline-none w-full sm:w-auto"
                        >
                            <SpotlightCard
                            className={`custom-spotlight-card w-full sm:w-auto sm:min-w-64 lg:w-89.5 h-12 px-4 sm:px-6 border rounded-[38px] flex flex-row items-center gap-3 cursor-pointer transition-all duration-300 ${
                                isActive
                                ? "bg-[#A682FC]/23! border-white/20"
                                : "bg-white/5 border-white/10"
                            }`}
                            spotlightColor="rgba(186, 110, 244, 0.2)"
                            >
                            <div
                                className="w-6 h-6 text-center text-white text-base font-medium rounded-full leading-6 shrink-0"
                                style={{
                                background: isActive
                                    ? "radial-gradient(circle, #FFBFF1 0%, #9000FF 57%, #270258 93%)"
                                    : "#8B8899",
                                }}
                            >
                                {step.id + 1}
                            </div>

                            <span className="text-sm sm:text-base text-white font-medium whitespace-nowrap truncate">
                                {step.label}
                            </span>
                            </SpotlightCard>
                        </button>

                        {index < steps.length - 1 && (
                            <Separator
                            orientation="vertical"
                            className="mx-2 sm:mx-4 h-8 bg-white/10 hidden sm:block"
                            />
                        )}
                        </div>
                    );
                    })}
                </div>

                <SpotlightCard
                    key={activeStep}
                    className="custom-spotlight-card mt-6 sm:mt-8 w-full lg:min-h-125 p-6 sm:p-10 bg-[#A682FC]/23! border border-white/10 rounded-[24px] sm:rounded-[38px]"
                    spotlightColor="rgba(186, 110, 244, 0.2)"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 animate-in fade-in duration-500">
                    <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                        <div
                        className="w-16 h-16 sm:w-22.5 sm:h-22.5 rounded-full flex items-center justify-center text-white text-2xl sm:text-[40px] font-medium mb-8 sm:mb-12"
                        style={{
                            background:
                            "radial-gradient(circle, #FFBFF1 0%, #9000FF 57%, #270258 93%)",
                        }}
                        >
                        {currentStep.id + 1}
                        </div>

                        <ShinyText
                        text={currentStep.subtitle}
                        speed={2.5}
                        delay={0}
                        color="#fff"
                        shineColor="#D6C5FF"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                        className="text-2xl sm:text-[28px] lg:text-[35px] font-medium mb-4"
                        />

                        <span className="text-base sm:text-lg text-white leading-7 max-w-full lg:max-w-150">
                        {currentStep.description}
                        </span>

                        <Button className="mt-8 sm:mt-10 w-fit rounded-full px-8 text-[#130335]! text-base font-medium">
                        Explore Features
                        </Button>
                    </div>
                        <Image
                        src={currentStep.img}
                        alt={currentStep.subtitle}
                        loading="lazy"
                        className="w-full h-auto object-contain"
                        />
                    </div>
                </SpotlightCard>
                </div>
            <div className="flex flex-col w-full bg-[#080B26]!">
                <div className="w-full max-w-137.25 flex flex-col justify-center mx-auto mt-16 sm:mt-20 lg:mt-25 mb-10 sm:mb-12 lg:mb-16 text-left">
                    <ShinyText
                        text="Everything you need, priced just right."
                        speed={2.5}
                        delay={0}
                        color="#fff"
                        shineColor="#D6C5FF"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                        className="text-[32px] sm:text-[40px] lg:text-[56px] flex-wrap font-medium leading-[117%] tracking-[-2%] mb-6"
                    />
                    <ScrollReveal
                        as="p"
                        baseOpacity={0.2}
                        blurStrength={4}
                        textClassName="text-base sm:text-lg text-white leading-6"
                    >
                        Manage all your projects in one place with a tool that's simple, powerful, and built to fit your budget.
                    </ScrollReveal>
                </div>
                <PricingSection/>
            </div>
            <div className="mt-16 sm:mt-20 lg:mt-25 mx-auto w-full max-w-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8 px-0 sm:px-8 lg:px-32.5 py-12 sm:py-16 lg:py-25">
                <div className="flex flex-col text-left w-full max-w-full lg:max-w-105">
                    <ShinyText
                        text="Contact us"
                        speed={2.5}
                        delay={0}
                        color="#fff"
                        shineColor="#D6C5FF"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                        className="text-[32px] sm:text-[40px] lg:text-[56px] flex-wrap font-medium leading-[117%] tracking-[-2%] mb-6"
                    />
                    <ScrollReveal
                        as="p"
                        baseOpacity={0.2}
                        blurStrength={4}
                        containerClassName="mb-12 sm:mb-16 lg:mb-18.25"
                        textClassName="text-base sm:text-lg text-white leading-6"
                    >
                        Adwords Keyword research for beginners when you embark on your first PPC journey.
                    </ScrollReveal>
                    <Separator className="bg-[#FFBFF1] mb-12 sm:mb-16 lg:mb-18.25" />
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row items-center gap-4">
                            <Image src={icEmail} alt="email" loading="lazy" />
                            <div className="flex flex-col">
                                <span className="text-[13px] text-[#BC70F7] font-medium mb-2.5">Email</span>
                                <span className="text-base sm:text-lg text-[#FDFDFD] font-medium">54 Royel Street, London</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Image src={icPhone} alt="phone" loading="lazy" />
                            <div className="flex flex-col">
                                <span className="text-[13px] text-[#BC70F7] font-medium mb-2.5">Phone</span>
                                <span className="text-base sm:text-lg text-[#FDFDFD] font-medium">54 Royel Street, London</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="w-full max-w-2xl mx-auto lg:mx-0">
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <Input type="text"
                            placeholder="Enter name"
                            className="w-full h-16 bg-[#06091F] border-white/10 text-white px-5 mb-4"/>
                            <Input  type="email"
                            placeholder="Your email"
                            className="w-full h-16 bg-[#06091F] border-white/10 text-white px-5 mb-4"/>
                            <SpotlightCard  className="custom-spotlight-card mb-6 overflow-hidden" spotlightColor="rgba(232, 128, 238, 0.2)">
                                <Textarea placeholder="Write your text..." className="w-full min-h-44 bg-transparent border-0 resize-none text-white"/>
                            </SpotlightCard>
                            <NoiseBackground 
                            containerClassName="w-full p-2 rounded-full"
                            gradientColors={[
                            "rgb(255, 100, 150)",
                            "rgb(100, 150, 255)",
                            "rgb(255, 200, 100)",
                            ]}>
                                <Button  className="bg-white! w-full h-14 rounded-full flex items-center justify-center" variant="outline">
                                    <span className="text-[#130335] font-medium tex-base">Send Now</span>
                                </Button>
                            </NoiseBackground>
                        </Field>
                    </FieldGroup>
                </FieldSet></div>
            </div>
        </main>
    )
}