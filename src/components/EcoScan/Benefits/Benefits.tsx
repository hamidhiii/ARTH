import Text from "@/components/OfferSection.tsx/Text";
import BenefitsCard from "./BenefitsCard";

export default function Benefits() {
  return (
    <section className="bg-[#05966936] py-12">
        <div className="max-w-[1400px] m-auto bg-gradient-to-r from-[#10B9810D] to-[#3B82F60D] py-12">
        <Text title="Key Benefits" description=""/>
            <BenefitsCard/>
        </div>
    </section>
  )
}
