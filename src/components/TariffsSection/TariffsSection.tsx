import Text from "../OfferSection.tsx/Text";
import TariffsCard from "./TariffsCard";

export default function TariffsSection() {
  return (
    <section className="bg-[#05966936] py-[80px]">
       <div className="">
       <Text title="Tariffs"
        description="Airth unites technology with environmental protection."/>
        <TariffsCard/>
       </div>
    </section>
  )
}
