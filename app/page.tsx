"use client";

import Loading from "./components/loading";
import HeroBanner from "./components/hero-banner";
import OurLoveStory from "./components/our-love-story";
import WeddingDate from "./components/wedding-date";
import WeddingEvents from "./components/wedding-events";
import PhotoAlbum from "./components/photo-album";
import GiftRegistry from "./components/gift-registry";
import OurBestFriends from "./components/our-best-friends";
import WhereWeStay from "./components/where-we-stay";
import Footer from "./components/footer";

import '@/assets/css/base.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/fonts.css'
import '@/assets/css/main.css'

export default function Home() {
  return (
   <div>
      <Loading />
      <div className="wrapper">
         <HeroBanner />
         <OurLoveStory />
         <WeddingDate />
         <WeddingEvents />
         <PhotoAlbum />
         <GiftRegistry />
         <OurBestFriends />
         <WhereWeStay />
         <Footer />
      </div>
    </div>
  );
}
