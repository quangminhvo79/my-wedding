
import Image from "next/image";
import Photo1 from "@/assets/img/logo/1.png"
import Photo2 from "@/assets/img/logo/2.png"
import Photo3 from "@/assets/img/logo/3.png"
import Photo4 from "@/assets/img/logo/4.png"

const GiftRegistry = () => {
  return (
    <section id="gift" className="gift  pt-120 pb-120 mb-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 text-center mb-100">
              <h1 className="title">Gift registry</h1>
              <p className="lead size-m mt-20">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
          </div>
        </div>
        <div className="row relative">
          <svg className="block-dashed-ver" version="1.1"  
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" y="0px" width="50px" height="400px" xmlSpace="preserve">
              <path className="dashed-line" stroke-width="1"  d="M30 0 v600 400"/>
          </svg>
          <svg className="block-dashed-hr" version="1.1"  
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="700px" xmlSpace="preserve">
              <path className="dashed-line" stroke-width="1"  d="M30 0 v600 400"/>
          </svg>
          <div className="circle-dashed  bg middle">
            <div className="round-circle before">
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                  <circle cx="50%" cy="50%" r="50"/>
              </svg>
              <i className="icon-gift"></i>
            </div>
          </div>
          <div className="col-sm-5 mt-50">
            <div className="block-content text-right">
              <Image src={Photo1} alt="" layout='fill' objectFit='contain' className="gift-reg"/>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-2 mt-50">
            <div className="block-content text-left">
              <Image src={Photo2} alt="" layout='fill' objectFit='contain' className="gift-reg"/>
            </div>
          </div>
          <div className="col-sm-5 mt-50">
            <div className="block-content text-right">
              <Image src={Photo3} alt="" layout='fill' objectFit='contain' className="gift-reg"/>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-2 mt-50">
            <div className="block-content text-left">
              <Image src={Photo4} alt="" layout='fill' objectFit='contain' className="gift-reg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GiftRegistry;