import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  imageoneOne?: string;
  uiuxDesign?: string;
  jayeshpatil?: string;
  p10nov2023?: string;
  design?: string;
}

export default function HomeColumn({
  imageoneOne = "",
  uiuxDesign = "UI/ UX Design",
  jayeshpatil = "Farah Trigui",
  p10nov2023 = "9 Avr, 2024",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex h-[454px] items-start justify-center self-stretch bg-[url(/public/images/img_frame_76.png)] bg-cover bg-no-repeat px-14 py-[67px] md:h-auto md:p-5">
        <img src={imageoneOne} alt="imageone_one" className="mb-8 h-[288px] w-[90%] rounded-[5px] object-cover" />
      </div>
      <div className="relative mb-6 ml-[26px] mt-[-38px] flex w-[72%] flex-col items-start gap-[34px] pb-[51px] md:ml-0 md:pb-5">
        <Button shape="round" className="min-w-[196px] font-inter sm:px-5">
          {uiuxDesign}
        </Button>
        <div className="flex w-[71%] justify-between gap-5 md:w-full">
          <div className="flex w-[45%] items-start justify-center gap-2.5">
            <div className="mt-1.5 h-[9px] w-[9px] rounded bg-deep_orange-400" />
            <Text as="p">{jayeshpatil}</Text>
          </div>
          <div className="flex w-[44%] items-start justify-center gap-2.5">
            <div className="mt-1.5 h-[9px] w-[9px] rounded bg-deep_orange-400" />
            <Text as="p">{p10nov2023}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
