import Image from "next/image";
import Photo1 from "@/assets/img/6.jpg"
import Photo2 from "@/assets/img/7.jpg"
import Photo3 from "@/assets/img/8.jpg"
import Photo4 from "@/assets/img/9.jpg"
import Photo5 from "@/assets/img/10.jpg"
import Photo6 from "@/assets/img/11.jpg"

const PhotoAlbum = () => {
  return (
    <section id="album" className="album pt-120 pb-120">
      <div className="container">
        <div className="row mb-30">
          <h2 className="indent">Photo album</h2>
          <div className="col-md-4 col-sm-4 col-xs-12 " >
            <div className="block-img">
              <a href="img/6.jpg" className="venobox">
                <div className="background-img">
                  <Image src={Photo1} alt="" layout='fill' objectFit='contain'/>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 " >
            <div className="block-img">
              <a href="img/7.jpg" className="venobox">
                <div className="background-img">
                  <Image src={Photo2} alt="" layout='fill' objectFit='contain'/>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 " >
            <div className="block-img">
              <a href="img/8.jpg" className="venobox">
                <div className="background-img">
                  <Image src={Photo3} alt="" layout='fill' objectFit='contain'/>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 col-sm-4 col-xs-12 " >
            <div className="block-img">
              <a href="img/9.jpg" className="venobox">
                <div className="background-img">
                  <Image src={Photo4} alt="" layout='fill' objectFit='contain'/>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 " >
            <div className="block-img">
              <a href="img/10.jpg" className="venobox">
                <div className="background-img">
                  <Image src={Photo5} alt="" layout='fill' objectFit='contain'/>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 " >
            <div className="block-img">
              <a href="img/11.jpg" className="venobox">
                <div className="background-img">
                  <Image src={Photo6} alt="" layout='fill' objectFit='contain'/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoAlbum;