import React from "react";
import { Text, Button } from "./..";

interface Props {
  className?: string;
  uiuxDesign?: string;
  jayeshpatil?: string;
  p10nov2023?: string;
  design?: string;
}

export default function HomeColumnuiux({
  uiuxDesign = "UI/ UX Design",
  jayeshpatil = "Farah Trigui",
  p10nov2023 = "9 Avr, 2024",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Button shape="round" className="min-w-[196px] font-inter sm:px-5">
        {uiuxDesign}
      </Button>
      <div className="flex w-[71%] justify-between gap-5">
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
  );
}
