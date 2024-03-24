import Image from "next/image";
import BackgroundWeddinDate from "@/assets/img/KBI00873.jpg"
import BackgroundWeddinDateNoBg from "@/assets/img/KBI00873-no-bg.png"

const WeddingDate = () => {
  return (
    <section className="date pt-[200px] pb-[150px] overlay relative min-h-[570px]">
      <h2 className="indent">Wedding date</h2>
      <div className="h-full">
        <Image src={BackgroundWeddinDate} alt="" layout='fill' objectFit='cover'/>
        {/* <video controls autoPlay loop muted aria-label="Video player" className="w-full">
          <source src="/videos/QuangMinh_MinhThu_weddingIvitation_30_3.mp4" type="video/mp4" />
        </video> */}
      </div>
      <div className="absolute w-full top-0 text-center">
        <h2 className="text-kristi text-[#564e4e] text-[24rem]">Save the date</h2>
      </div>
      <div className="absolute !z-[100] top-0 w-full h-[570px]">
        <Image src={BackgroundWeddinDateNoBg} alt="" layout='fill' objectFit='cover'/>
        {/* <video controls autoPlay loop muted aria-label="Video player" className="w-full">
          <source src="/videos/QuangMinh_MinhThu_weddingIvitation_30_3.mp4" type="video/mp4" />
        </video> */}
      </div>
      <div className="absolute !z-[101] bottom-[4rem] left-0 w-full">
        <div className="text-center font-bold text-border-white">
          <p className="text-[2rem] mb-[4rem] text-[#564e4e]">Saturday MAR 30th, 2024 - Nhà hàng Golf Đồng nai</p>
          <p className="countdown !font-bold text-[#564e4e]"></p>
        </div>
      </div>
    </section>
  )
}

export default WeddingDate;