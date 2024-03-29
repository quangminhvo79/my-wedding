import Image, { StaticImageData } from "next/image";
import Photo1 from "@/assets/img/album/KBI00888.jpg"
import Photo2 from "@/assets/img/album/KBI01102.jpg"
import Photo3 from "@/assets/img/album/KBI01375.jpg"
import Photo4 from "@/assets/img/album/KBI01412.jpg"
import Photo5 from "@/assets/img/album/KBI01674.jpg"
import Photo6 from "@/assets/img/album/KBI01915.jpg"
import Photo7 from "@/assets/img/album/KBI01967.jpg"
import Photo8 from "@/assets/img/album/KBI02165.jpg"
import Photo9 from "@/assets/img/album/KBI02235.jpg"

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PhotoAlbum = () => {
  const photos1 = [Photo1, Photo2, Photo3]
  const photos2 = [Photo4, Photo5, Photo6]
  const photos3 = [Photo7, Photo8, Photo9]

  const [open, setOpen] = React.useState<StaticImageData>();

  return (
    <section id="album" className="album pt-120">
      <div className="container">
        <div className="row mb-30">
          <h2 className="indent">Photo album</h2>
          {
            photos1.map((photo, index) => {
              return (
                <div key={`photo1-${index}`} className="col-md-4 col-sm-4 col-xs-12 " >
                  <div className="block-img">
                    <a onClick={() => setOpen(photo)} >
                      <div className="background-img">
                        <Image src={photo} alt="" layout='fill' objectFit='contain'/>
                      </div>
                    </a>
                  </div>
                </div>
              )})
          }
        </div>
        <div className="row mb-30">
          {
            photos2.map((photo, index) => {
              return (
                <div key={`photo1-${index}`} className="col-md-4 col-sm-4 col-xs-12 " >
                  <div className="block-img">
                    <a onClick={() => setOpen(photo)} >
                      <div className="background-img">
                        <Image src={photo} alt="" layout='fill' objectFit='contain'/>
                      </div>
                    </a>
                  </div>
                </div>
              )})
          }
        </div>
        <div className="row mb-30">
          {
            photos3.map((photo, index) => {
              return (
                <div key={`photo1-${index}`} className="col-md-4 col-sm-4 col-xs-12 " >
                  <div className="block-img">
                    <a onClick={() => setOpen(photo)} >
                      <div className="background-img">
                        <Image src={photo} alt="" layout='fill' objectFit='contain'/>
                      </div>
                    </a>
                  </div>
                </div>
              )})
          }
        </div>
      </div>
      <Dialog
        open={Boolean(open)}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(undefined)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          {open && (
            <Image src={open} alt={""} 
              className="max-[775px]:w-[70vw] max-[775px]:h-auto min-[776px]:w-auto min-[776px]:h-[85vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default PhotoAlbum;