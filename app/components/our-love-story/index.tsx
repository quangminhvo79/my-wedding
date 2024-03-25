import Image from "next/image";
import StoryImage1 from "@/assets/img/2.png"
import StoryImage2 from "@/assets/img/3.png"

const OurLoveStory = () => {
  return (
    <section id="story" className="story pt-120 pb-120">
      <svg className="section-dashed" 
        version="1.1"  xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="578px" xmlSpace="preserve">
          <path className="dashed-line" stroke-width="1"  d="M30 0 v600 400"/>
      </svg>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-100">
              <h1 className="title">Our love story</h1>
              <p>The Story of our love and the Wedding</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center mb-30">
            <h2 className="heavy">{"\"I was enchanted to meet you\""}</h2>
          </div>
          <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center">
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
        <div className="row story-row mt-100 mb-100">
          <div className="circle-dashed timeline bg">
            <div className="round-circle bg before">
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                <circle cx="50%" cy="50%" r="50"/>
              </svg>
              <i className="icon-heart"></i>
            </div>
          </div>
          <div className="col-sm-5 ">
            <div className="couple-story text-right">
              <h2 className="heavy mb-10">Our first met<br/><span>2 July 2023</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-2">
            <div className="couple-story">
              <h2 className="heavy mb-10">Our first Dating<br/><span>15 July 2023</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
            </div>
          </div>
        </div>
        <div className="row story-row mt-100 mb-80 ">
          <div className="circle-dashed timeline bg green">
            <div className="round-circle  green before">
              <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                <circle cx="50%" cy="50%" r="50"/>
              </svg>
              <i className="icon-heart"></i>
            </div>
          </div>
          <div className="col-sm-5 ">
            <div className="couple-story text-right">
              <h2 className="heavy mb-10">How he proposed<br/><span>30 July 2023</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-2">
            <div className="couple-story">
              <h2 className="heavy mb-10">Since then we are together<br/><span>To present</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center">
              <div className="img-round">
                <div className="img">
                  <Image src={StoryImage2} alt="" layout='fill' objectFit='contain'/>
                </div>
                <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                  <circle cx="50%" cy="50%" r="50" />
                </svg>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center mt-30">
              <h2 className="heavy">Happy ending we will get married<br/><span>Counting the days...</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12  text-center mt-100">
              <a href="#wedding-location" className="but">
                <span>Wedding location</span>
                <svg className="but-svg" width="175" height="50" viewBox="0 0 415 120" xmlns="http://www.w3.org/2000/svg">
                  <rect className="but-rect" x="10" y="10" width="400" height="100" rx="6" ry="6"/>
                </svg>
              </a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default OurLoveStory;