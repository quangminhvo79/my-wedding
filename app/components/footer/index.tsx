import Image from "next/image";
import Photo1 from "@/assets/img/17.jpg"

const Footer = () => {
  return (
    <>
      <section className="just-married pt-200 pb-200 overlay">
        <div className="background-img">
          <Image src={Photo1} alt="" layout='fill' objectFit='cover'/>
        </div>
        <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                  <div className="block-content front-p">
                    <h2 className="typo">Just married</h2>
                    <h2 className="heavy uppercase mt-10 light">Sara Miller &amp; Ben Shneider</h2>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <footer className="footer pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="uppercase text-6xl">🤵🏻 Quang Minh ♥️ Minh Thư 👰🏻‍♀️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
