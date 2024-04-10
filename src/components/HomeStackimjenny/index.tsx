import React from "react";
import { Heading, RatingBar, Text, Img } from "./..";

interface Props {
  className?: string;
  hello?: string;
  imjenny?: React.ReactNode | string;
  somepeople?: string;
  ifyoucould?: string;
  creative?: string;
}

export default function HomeStackimjenny({
  hello = "Hello!",
  imjenny = (
    <>
      I’m Farah,Product Designer
    </>
  ),
  somepeople = "*some people call me UI/UX Designer but i'm also full stack developper :p*",
  ifyoucould = "if you could combine both art and software you will have an approximate prespective of me :))",
  creative = "creative",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="absolute left-0 right-0 top-[3%] m-auto flex w-[55%] flex-col">
        <div className="flex flex-col items-center gap-2.5">
          <div className="relative h-[64px] w-[16%]">
            <div className="absolute bottom-[0.00px] left-[0.00px] m-auto flex w-[95%] justify-center rounded-[22px] bg-white-A700_19">
              <Text size="md" as="p" className="!font-medium tracking-[-0.45px] !text-gray-900">
                {hello}
              </Text>
            </div>
            <Img
              src="images/img_settings.svg"
              alt="settings_one"
              className="absolute right-[0.00px] top-[0.00px] m-auto h-[28px] w-[27px]"
            />
          </div>
          <Heading size="md" as="h1" className="text-center !text-[90px] leading-[100%] tracking-[-1.43px]">
            {imjenny}
          </Heading>
        </div>
        <Img
          src="images/img_settings_pink_a200.svg"
          alt="settings_three"
          className="relative z-[1] ml-[31px] mt-[-30px] h-[88px] w-[10%] md:ml-0"
        />
      </div>
      <div className="absolute right-[11%] top-[0.00px] m-auto flex w-[58%] items-start justify-end md:relative md:flex-col">
        <Img
          src="images/img_434334961_80572.png"
          alt="image"
          className="relative z-[2] h-[866px] w-[65%] object-cover md:w-full"
        />
        <Text
          as="p"
          className="relative ml-[-30px] mt-[306px] !font-urbanist !font-medium italic tracking-[-0.30px] !text-black-900 md:ml-0"
        >
          {somepeople}
        </Text>
      </div>
      <div style={{marginBottom:"250px"}}className="absolute bottom-[0.00px] left-0 right-0 m-auto h-[600px] w-[600px] rounded-[400px] bg-pink-100" />
      <div className="absolute left-0 right-0 top-[38%] m-auto flex w-full items-center justify-between gap-5 md:relative md:flex-col">
        <div className="flex w-[25%] flex-col gap-6 md:w-full">
          <Img src="images/img_user.svg" alt="user_one" className="h-[36px] w-[36px]" />
          <Text size="s" as="p" className="tracking-[-0.38px]">
            {ifyoucould}
          </Text>
        </div>
        <div className="flex w-[11%] flex-col items-center gap-4 md:w-full">
          <RatingBar value={1} isEditable={true} size={32} className="flex justify-between self-stretch" />
          <Heading as="h2" className="text-center tracking-[-0.70px]">
            {creative}
          </Heading>
        </div>
      </div>
    </div>
  );
}
