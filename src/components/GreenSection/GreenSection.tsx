import Text from "../OfferSection.tsx/Text";
import GreenCard from "./GreenCard";


export default function GreenSection() {
  return (
    <section className="bg-[#05966936] py-[80px]">
        <div className=" justify-center">
        <Text 
        title="Green Technology Ecosystem" 
        description="Comprehensive solutions for environmental sustainability" 
      />
        </div>
        <GreenCard/>
    </section>
  )
}
