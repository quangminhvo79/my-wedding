
import Image from "next/image";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from "react";
import GiftBlue from "@/assets/img/gift_blue.png"
import GiftPink from "@/assets/img/gift_pink.png"
import QRMinh from "@/assets/img/qr-minh.png"
import QRThu from "@/assets/img/QRThu.jpeg"

import Floral1 from "@/assets/img/floral/1.png"

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
    <section id="gift" className="accom pt-120 pb-120 ">
      <div className="container">
        <div className="row">
          <div className="flex flex-row mb-[20px] justify-center items-center">
            <Image src={Floral1} className="mr-1" alt="" width="40" height="100"/>
            <h1 className="text-[7vw] sm:text-[3vw] text-center whitespace-nowrap">Hộp quà yêu thương</h1>
            <Image src={Floral1} className="scale-x-[-1] ml-2" alt="" width="40" height="100"/>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-around mt-[7rem]">
          <div className="flex justify-center items-center flex-col cursor-pointer sm:mb-0 mb-[7rem]">
            <div className="font-bold text-4xl mb-[3rem]">Mừng cưới chú rể</div>
            <Image src={GiftBlue} alt="" width="170" height="400" onClick={handleOpenMinh}/>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="font-bold text-4xl mb-[3rem]">Mừng cưới cô dâu</div>
            <Image src={GiftPink} alt="" width="200" height="400" onClick={handleOpenThu}/>
          </div>
        </div>
      </div>
      <Dialog
        open={openMinh}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseMinh}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="text-center">
          <Image src={QRMinh} alt={""} />
          <div className="text-4xl font-bold">Võ Quang Minh</div>
          <div className="text-4xl font-bold">Ngân hàng Vietcombank</div>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openThu}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseThu}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="text-center">
          <Image src={QRThu} alt={""} />
          <div className="text-4xl font-bold">Nguyễn Trần Minh Thư</div>
          <div className="text-4xl font-bold">Ngân hàng Vietcombank</div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default WhereWeStay;