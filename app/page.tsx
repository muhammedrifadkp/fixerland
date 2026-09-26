import { Hero } from "@/components/Hero";
import { WhyFixerland } from "@/components/WhyFixerland";
import { Story } from "@/components/Story";
import { Services } from "@/components/Services";
import { ActionCards } from "@/components/ActionCards";
import { Reels } from "@/components/Reels";
import { Faq } from "@/components/Faq";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyFixerland />
      <Story />
      <Services />
      <ActionCards />
      <Reels />
      <Faq />
      <Location />
      <Reviews />
      <ContactCTA />
    </>
  );
}
