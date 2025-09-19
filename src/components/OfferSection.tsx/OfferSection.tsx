import OfferCard from "./OfferCard"
import Text from "./Text"

export default function OfferSection() {
  return (
    <section className="bg-[#05966936] py-[80px]">
     <div className="max-w-[1400px] justify-center">
     <Text 
        title="What do we offer?" 
        description="Airth:
Smart Mapping for a greener future" 
      />

      <OfferCard/> 
     </div>
    </section>
  )
}
