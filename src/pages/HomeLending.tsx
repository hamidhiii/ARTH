import GreenSection from "@/components/GreenSection/GreenSection";
import HeaderBanner from "@/components/HeaderBanner/HeaderBanner";
import OfferSection from "@/components/OfferSection.tsx/OfferSection";
import SolutionsSection from "@/components/SolitionsSection/SolutionsSection";
import TariffsSection from "@/components/TariffsSection/TariffsSection";

export default function HomeLending() {
  return (
    <>
       <HeaderBanner/> 
       <OfferSection/>
       <TariffsSection/>
       <SolutionsSection/>
       <GreenSection/>
    </>
  )
}
