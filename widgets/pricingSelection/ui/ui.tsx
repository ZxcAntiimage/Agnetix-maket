import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import { icStick } from "@/shared/api";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export default function PricingSection() {
  const tiers: PricingTier[] = [
    {
      name: "Premium",
      price: "$100",
      description: "Get started for free Agentix.",
      features: [
        "Offer Multiple pricing tiers",
        "Clear differentiation; clearly outline",
        "clear different; clearity",
        "Get started for free Agentixl.",
      ],
      isPopular: false,
    },
    {
      name: "Popular",
      price: "$300",
      description: "Get started for free Agentix.",
      features: [
        "Offer Multiple pricing tiers",
        "Clear differentiation; clearly outline",
        "clear different; clearity",
        "Get started for free Agentix.",
      ],
      isPopular: true,
    },
    {
      name: "Pro",
      price: "$600",
      description: "Get started for free Agentixtxt.",
      features: [
        "Offer Multiple pricing tiers",
        "Clear differentiation; clearly outline",
        "clear different; clearity",
        "Get started for free Agentix.",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="w-full min-h-screen py-24 px-4 flex flex-col items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full items-center">
        {tiers.map((tier: PricingTier, index: number) => (
          <SpotlightCard
            key={index}
            className={`
              custom-spotlight-card 
              w-full 
              rounded-[24px] 
              p-8 
              flex 
              flex-col 
              items-start
              text-left 
              border
              transition-all 
              duration-300
              ${
                tier.isPopular
                  ? "bg-linear-to-b from-[#9000FF] to-[#270258] border-[#A682FC]/30 min-h-145"
                  : "bg-[#0B0D26]/40 border-white/5 min-h-125"
              }
            `}
            spotlightColor={tier.isPopular ? "rgba(255, 191, 241, 0.15)" : "rgba(166, 130, 252, 0.08)"}
          >
            {tier.isPopular && (
              <div className="mb-4 flex justify-start shrink-0">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center border border-white/20 shadow-lg"
                  style={{
                    background: "radial-gradient(circle, #FFBFF1 0%, #9000FF 60%, #270258 100%)"
                  }}
                >
                 <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>
            )}
            
            <span className={`text-sm font-medium tracking-wide ${tier.isPopular ? "text-[#FFBFF1]" : "text-[#BA6EF4]"}`}>
              {tier.name}
            </span>

            <h3 className="text-[40px] font-semibold text-white leading-none mt-3 mb-3">
              {tier.price}
            </h3>

            <p className="text-sm mb-6 text-white/60">
              {tier.description}
            </p>

            <div className="w-full h-px bg-white/10 mb-6" />

            <ul className="space-y-4 mb-8 w-full flex-1">
              {tier.features.map((feature: string, fIdx: number) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-[#9000FF] flex items-center justify-center shrink-0 border border-white/20 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  <span className="opacity-90 leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`
                w-full 
                h-12 
                rounded-full 
                text-sm 
                font-medium 
                transition-all 
                duration-200
                border
                ${
                  tier.isPopular
                    ? "bg-white text-[#270258] hover:bg-white/90 border-transparent shadow-md"
                    : "bg-transparent text-white border-white/20 hover:bg-white/10"
                }
              `}
            >
              Contact us
            </Button>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}