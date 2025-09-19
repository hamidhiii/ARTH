// Text.tsx
interface TextProps {
    title: string
    description: string
  }
  
  export default function Text({ title, description }: TextProps) {
    return (
      <div className=" text-center">
        <h3 className="font-bold text-[36px] leading-10">{title}</h3>
        <p className="font-normal text-[20px] leading-7 text-[#4B5563] mt-[40px]">{description}</p>
      </div>
    )
  }
  