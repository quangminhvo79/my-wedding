
import Image from "next/image";
import Photo1 from "@/assets/img/14.jpg"
import Photo2 from "@/assets/img/15.jpg"
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from "react";
import QRMinh from "@/assets/img/qr-minh.jpg"
import QRThu from "@/assets/img/qr-thu.jpeg"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WhereWeStay = () => {
  const [openThu, setOpenThu] = useState(false);
  const [openMinh, setOpenMinh] = useState(false);

  const handleOpenThu = () => {
    setOpenThu(true);
  };

  const handleCloseThu = () => {
    setOpenThu(false);
  };

  const handleOpenMinh = () => {
    setOpenMinh(true);
  };

  const handleCloseMinh = () => {
    setOpenMinh(false);
  };

  return (
    <section className="accom pt-120 pb-120 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-100">
              <h1 className="text-6xl">Gửi lời chúc đến Quang Minh và Minh Thư</h1>
              <p className="hidden">Accommodation - information below</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-sm-offset-1 text-center">
              <div className="block-img">
                <a onClick={handleOpenMinh} className="venobox">
                    <div className="background-img">
                      <Image src={Photo1} alt="" layout='fill' objectFit='contain'/>
                    </div>
                </a>
              </div>
              <a onClick={handleOpenMinh} className="but mt-30">
                <span>QR code</span>
                <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                    <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                </svg>
              </a>
          </div>
          <div className="col-sm-5 text-center">
            <div className="block-img">
              <a onClick={handleOpenThu} className="venobox">
                  <div className="background-img" >
                    <Image src={Photo2} alt="" layout='fill' objectFit='contain'/>
                  </div>
              </a>
            </div>
            <a onClick={handleOpenThu} className="but mt-30">
              <span>QR code</span>
              <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                  <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Dialog
        open={openThu}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseThu}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Image src={QRMinh} alt={""} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openMinh}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseMinh}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Image src={QRThu} alt={""} />
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default WhereWeStay;