import Image from "next/image";
import PrimaryImage from "@/assets/img/1.jpg"
import Logo from "@/assets/img/MT_logo.png"

const HeroBanner = () => {
  return (
    <section className="hero overlay">
      <div className="background-img">
        <Image src={PrimaryImage} alt="" layout='fill' objectFit='contain'/>
      </div>
      <header className="header default">
        <div className=" left-part">
          <a className="scroll" href="#hero">
            <Image src={Logo} alt="" objectFit='contain' height="54"/>
          </a>
        </div>
        <div className="right-part">
          <nav className="main-nav">
            <div className="toggle-mobile-but">
              <a href="#" className="mobile-but" >
                  <div className="lines"></div>
              </a>
            </div>
            <ul className="mt-0 mb-2">
              <li><a className="scroll" href="#story">Love story</a></li>
              <li><a className="scroll" href="#wedding">The wedding</a></li>
              <li><a className="scroll" href="#album">Photo album</a></li>
              <li><a className="scroll" href="#gift">Gifts</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="inner-hero">
        <div className="container hero-content">
          <div className="row mt-[20rem]">
            <div className="col-sm-12 text-center">
              <h1 className="text-[10rem] text-alex-brush U mb-20">
                <div className="flex sm:flex-row flex-col justify-center items-center space-y-3 space-x-3">
                  <span className="leading-[6rem] mr-2">Minh</span>  
                  <Image src={Logo} alt="" objectFit='contain' height="80"/>
                  <span className="leading-[10rem]">Thư</span> 
                </div>
              </h1>
              <div className="block-date-hero">
                <div className="circle-dashed bg-n">
                  <div className="round-circle">
                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                      <circle cx="50%" cy="50%" r="50" />
                    </svg>
                    <i className="icon-heart"></i>
                  </div>
                </div>
                <ul>
                  <li>Save the date</li>
                  <li>Thứ bảy 30th, 2024</li>
                </ul>
              </div>
              <p className="mt-20 text-4xl">Nhà hàng Golf Đồng Nai, thị trấn Trảng Bom, Huyện Trảng Bom, tỉnh Đồng Nai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner;