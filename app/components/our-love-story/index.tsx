import Image from "next/image";
import StoryImage1 from "@/assets/img/2.png"
import StoryImage2 from "@/assets/img/3.png"
import StoryImage3 from "@/assets/img/happy.png"

import Floral5 from "@/assets/img/floral/4.png"

const OurLoveStory = () => {
  const quote = "\"He knelt to the ground and pulled out a ring and said....\""
  return (
    <section id="story" className="story pt-120 pb-120">
      <svg className="section-dashed" 
        version="1.1"  xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="578px" xmlSpace="preserve">
          <path className="dashed-line" stroke-width="1"  d="M30 0 v300"/>
      </svg>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-[12px]">
              <h1 className="title">Our love story</h1>
          </div>
        </div>
        <div className="flex justify-center opacity-[0.8]">
          <Image src={Floral5} alt="" width="150" height="150"/>
        </div>
        <div className="row">
          <div className="text-center mb-50">
            <h2 className="heavy">{"\"I was enchanted to meet you\""}</h2>
          </div>
          <div className="text-center col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
            <div className="img-round">
              <div className="img">
                <Image src={StoryImage1} alt="" layout='fill' objectFit='contain'/>
              </div>
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                <circle cx="50%" cy="50%" r="50" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row story-row md:!h-[160px]">
          <div className="circle-dashed timeline bg">
            <div className="round-circle bg before">
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                <circle cx="50%" cy="50%" r="50"/>
              </svg>
              <i className="icon-heart"></i>
            </div>
          </div>
          <div className="col-sm-5 col-xs-5 h-[110px] md:h-[150px]">
            <div className="text-right couple-story">
              <div className="mb-10 heavy ml-[15x] sm:ml-0">Our first met<br/><span>Nha Trang, 2 July 2023</span></div>
              <p></p>
            </div>
          </div>
        </div>
        <div className="row story-row md:h-[160px]">
          <div className="circle-dashed timeline bg">
            <div className="round-circle bg before">
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                <circle cx="50%" cy="50%" r="50"/>
              </svg>
              <i className="icon-heart"></i>
            </div>
          </div>
          <div className="col-sm-5 col-xs-5 h-[110px] md:h-[150px] md:!float-end">
            <div className="couple-story">
              <div className="mb-10 heavy ml-[15x] sm:ml-0">Our first Dating<br/><span>Sai Gon, 15 July 2023</span></div>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center row story-row">
          <div className="circle-dashed !static w-[65px] h-[65px] bg green !translate-x-[5px] !translate-y-0">
            <div className="round-circle green before">
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                <circle cx="50%" cy="50%" r="50"/>
              </svg>
              <i className="icon-heart"></i>
            </div>
          </div>
          <div className="col-sm-5 w-[400px] max-w-full mb-[20px]">
            <div className="text-center couple-story">
              <h2 className="mb-20 heavy mt-30">
                <span className="font-bold">{quote}</span>
                <span>04 November 2023</span>
              </h2>
              <div>
                <Image src={StoryImage3} className="rounded-[1vw]" alt="" width="400"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
            <div className="img-round">
              <div className="img">
                <Image src={StoryImage2} alt="" layout='fill' objectFit='contain'/>
              </div>
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                <circle cx="50%" cy="50%" r="50" />
              </svg>
            </div>
          </div>
          <div className="text-center col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 mt-30">
            <h2 className="heavy">Happy ending we will get married<br/><span>Counting the days...</span></h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurLoveStory;