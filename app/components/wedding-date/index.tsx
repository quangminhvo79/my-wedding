import Image from "next/image";
import BackgroundWeddinDate from "@/assets/img/KBI00873.jpg"
import BackgroundWeddinDateNoBg from "@/assets/img/KBI00873-no-bg.png"

const WeddingDate = () => {
  return (
    <section className="date pt-[200px] pb-[150px] overlay relative min-h-[570px]">
      <h2 className="indent">Wedding date</h2>
      <div className="h-full">
        <Image src={BackgroundWeddinDate} alt="" layout='fill' objectFit='cover'/>
      </div>
      <div className="absolute w-full top-0 text-center z-[9]">
        <h2 className="text-kristi text-[#ffffff9c] text-[22vw]">Save the date</h2>
      </div>
      <div className="absolute !z-[100] top-0 w-full h-[570px]">
        <Image src={BackgroundWeddinDateNoBg} alt="" layout='fill' objectFit='cover'/>
      </div>
      <div className="absolute !z-[101] bottom-[4rem] left-0 w-full">
        <div className="font-bold text-center">
          <p className="text-[5vw] sm:text-[3rem] mb-[2rem] text-white">Saturday, 30th March, 2024</p>
          <p className="countdown !font-bold text-white"></p>
        </div>
      </div>
    </section>
  )
}

export default WeddingDate;