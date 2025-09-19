import Text from "../OfferSection.tsx/Text";
import SolutionCard from "./SolutionCard";

export default function SolutionsSection() {
  return (
    <section className="bg-[#05966936] py-[80px]">
        <div className="max-w-[1400px] justify-center">
        <Text 
        title="AIRTH Solutions" 
        description="AI-powered drone technology addressing environmental challenges" 
      />
      <SolutionCard/>
        </div>
    </section>
  )
}
