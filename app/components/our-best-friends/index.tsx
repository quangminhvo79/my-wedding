import Image from "next/image";
import Photo1 from "@/assets/img/13.png"
import Photo2 from "@/assets/img/12.png"

const OurBestFriends = () => {
  const quote = "Friendship... is not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything."
  return (
    <section id="friend" className="friend bg-grey pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-100">
            <h1 className="title">Our best friends</h1>
            <p>We are lucky to have them in our side</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4  col-sm-offset-2 text-center">
            <div className="img-round">
              <div className="img">
                <Image src={Photo1} alt="" layout='fill' objectFit='contain'/>
              </div>
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                <circle cx="50%" cy="50%" r="50" />
              </svg>
            </div>
          </div>
          <div className="col-sm-4  text-center">
            <div className="img-round ">
              <div className="img">
                <Image src={Photo2} alt="" layout='fill' objectFit='contain'/>
              </div>
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                <circle cx="50%" cy="50%" r="50" />
              </svg>
            </div>
          </div>
          <div className="col-sm-4 col-sm-offset-2 text-center">
            <h2 className="heavy mt-20">Lisa Anderton<br/><span>Bridesmaid </span></h2>
          </div>
          <div className="col-sm-4  text-center">
            <h2 className="heavy mt-20">Jimmy Nicholson<br/><span>Groomsman </span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center mt-50">
            <div className="circle-dashed bg green relative">
              <div className="round-circle  green before">
                <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                  <circle cx="50%" cy="50%" r="50"/>
                </svg>
                <i className="icon-quote"></i>
              </div>
            </div>
            <div className="block-quote">
              <blockquote className="mt-20">{quote}</blockquote>
              <h2 className="heavy uppercase mt-20">We love you Lisa and Jimmy</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBestFriends;