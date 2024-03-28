import Image from "next/image";
import Rings from "@/assets/img/wedding.png"

const Footer = () => {
  return (
    <>
      <section id="wedding-location" className="just-married min-h-[617px]">
        <div className="background-img">
          {/* <Image src={Photo1} alt="" layout='fill' objectFit='cover'/> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15668.637275676168!2d106.9949162!3d10.9513353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e6ae01db4715%3A0x371f84904ffc1bf1!2zTkjDgCBIw4BORyBHw5ROIMSQ4buSTkcgTkFJ!5e0!3m2!1svi!2s!4v1711305786360!5m2!1svi!2s" 
            width="600" height="617" 
            style={{ "border": "0" }} 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
            allowFullScreen={true}
          />  
        </div>
        <div className="container hidden">
          <div className="row">
            <div className="col-sm-12 text-center">
                <div className="block-content front-p">
                  <h2 className="typo">Just married</h2>
                  <h2 className="text-6xl text-alex-brush">Quang Minh ♥️ Minh Thư</h2>
                </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer pt-70 pb-[3rem]">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="text-6xl text-alex-brush">
                <span>🤵🏻 Quang Minh </span> 
                <Image src={Rings} alt="" width="30" />
                <span> Minh Thư 👰🏻‍♀️</span>
              </p>
              <p>Sự hiện diện của Quý Khách là niềm vinh hạnh cho gia đình chúng tôi!</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
