import React from "react";
import { Img, Heading, Button, Text, Slider } from "../../components";
import HomeColumnuiux from "../../components/HomeColumnuiux";
import HomeStackimjenny from "../../components/HomeStackimjenny";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function HomePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <div style={{marginLeft:"30px"}}className="flex w-full flex-col items-center bg-white-A700 p-[52px] md:p-2">
        <div className="mx-auto mb-[5px] mt-[11px] flex w-full max-w-[1801px] flex-col items-center self-stretch">
          <div   className="relative h-[1800px] self-stretch md:h-auto">
            <div className="flex w-full flex-col gap-[840px] md:gap-[649px] sm:gap-[433px]">
              <div className="relative left-[400px] flex items-start gap-[49px] md:flex-col">
                <Text size="xl" as="p" className="!font-urbanist !text-black-900">
                  Farah Trigui{" "}
                </Text>
                <div className="h-[51px] w-px bg-black-900 md:h-px md:w-[51px]" />
                <div className="mt-[7px] flex">
                  <Text size="md" as="p" className="!text-black-900">
                  <a href="https://farahtriguiportfolio.netlify.app" className="text-black hover:text-pink-500">Home</a></Text>
                </div>
                <Text size="md" as="p" className="mt-1.5 !text-black-900">
                <a href="https://www.linkedin.com/in/farah-trigui-a4474821a/" className="text-black hover:text-pink-500">LinkedIn</a>
                </Text>
              </div>
              <div  className="relative h-[883px] md:h-auto">
                <div className="w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={4000}
                    responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                    renderDotsItem={(props: DotsItem) => {
                      return props?.isActive ? (
                        <div className="mr-[11.32px] h-[15px] w-[60px] rounded-[7px] bg-pink_A200" />
                      ) : (
                        <div className="mr-[11.32px] h-[15px] w-[15px] rounded-[7px] bg-indigo_50" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e: EventObject) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="mx-auto flex flex-col items-center gap-[47px] rounded-[50px] bg-pink-100 p-[39px] sm:p-5">
                          <div className="mt-2.5 flex w-[76%] items-center justify-between gap-5 md:w-full md:flex-col">
                            <Text
                              size="xl"
                              as="p"
                              className="mb-[39px] self-end !font-vastshadow tracking-[-0.75px] !text-gray-50"
                            >
                              <span className="font-urbanist font-medium text-gray-50">My</span>
                              <span className="font-urbanist font-medium text-pink_A200">Services</span>
                            </Text>
                            <Text style={{marginTop:"20px"}} size="s" as="p" className="w-[70%] tracking-[-0.38px] !text-white-A700 md:w-full">
                              From creating visually stunning websites to designing engaging landing pages, my services
                              are aimed at maximizing your online presence and driving conversions.Let's
                              collaborate to bring your digital vision to life.
                            </Text>
                          </div>
                          <div className="flex w-[83%] justify-center px-[21px] pb-[21px] md:w-full sm:px-5 sm:pb-5">
                            <div className="mb-16 flex w-[97%] justify-center gap-[45px] md:w-full md:flex-col">
                              <div className="relative h-[508px] w-full md:h-auto">
                                <Img
                                  src="images/img_frame_60.png"
                                  alt="image"
                                  className=" w-full object-cover"
                                />
                                <Button
                                  color="blue_gray_900"
                                  size="sm"
                                  shape="circle"
                                  className="absolute bottom-[0.00px] right-[0.00px] m-auto w-[114px] rotate-[90deg] !rounded-[57px]"
                                >
                                  <Img src="images/img_icon_outlined.svg" />
                                </Button>
                              </div>
                              <div className="relative h-[508px] w-full md:h-auto">
                                <Img
                                  src="images/img_frame_60_508x416.png"
                                  alt="image_one"
                                  className="w-full object-cover"
                                />
                                 <Button
                                  color="blue_gray_900"
                                  size="sm"
                                  shape="circle"
                                  className="absolute bottom-[0.00px] right-[0.00px] m-auto w-[114px] rotate-[90deg] !rounded-[57px]"
                                >
                                  <Img src="images/img_icon_outlined.svg" />
                                </Button>
                              </div>
                              <div className="relative h-[508px] w-full md:h-auto">
                                <Img
                                  src="images/img_frame_60_1.png"
                                  alt="image_two"
                                  className=" w-full object-cover"
                                />
                                <Button
                                  color="blue_gray_900"
                                  size="sm"
                                  shape="circle"
                                  className="absolute bottom-[0.00px] right-[0.00px] m-auto w-[114px] rotate-[90deg] !rounded-[57px]"
                                >
                                  <Img src="images/img_icon_outlined.svg" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
            <HomeStackimjenny className="absolute left-[13.00px] top-[2%] m-auto h-[1191px] w-[92%]" />
          </div>
          <div className="mt-[23px] flex w-[72%] justify-center px-[327px] md:w-full md:px-5">
            <Heading style={{marginTop:'80px'}} size="s" as="h1" className="text-center tracking-[-0.96px] !text-blue_gray-800">
              <span className="font-semibold text-blue_gray-800">Lets have a look at my</span>
              <span className="font-semibold text-pink_A200">work</span>
            </Heading>
          </div>
          <div className="mt-[10px] w-[41%] flex-col justify-center gap-[10px]">
            <div className="flex w-full flex-col items-start">
              <div className="flex h-[400px] items-start justify-center self-stretch bg-[url(/public/images/img_frame_76.png)] bg-cover bg-no-repeat px-14 py-[67px] md:h-auto md:p-5">
                <Img style={{marginTop:"57px",marginLeft:"34px"}}
                  src="images/img_image_1.png"
                  alt="imageone_one"
                  className="mb-8 h-[168px] w-[57%] rounded-[5px] object-cover"
                />
              </div>
              <HomeColumnuiux className="relative mb-6 ml-[26px] mt-[-38px] flex w-[72%] flex-col items-start gap-[34px] pb-[52px] md:ml-0 md:w-full md:pb-5" />
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex h-[400px] items-start justify-center self-stretch bg-[url(/public/images/img_frame_76.png)] bg-cover bg-no-repeat px-14 py-[67px] md:h-auto md:p-5">
                <Img style={{marginTop:"57px",marginLeft:"34px"}}
                  src="images/img_image_1_1.png"
                  alt="imageone_one"
                  className="mb-8 h-[168px] w-[57%] rounded-[5px] object-cover"
                />
              </div>
              <HomeColumnuiux className="relative mb-6 ml-[26px] mt-[-38px] flex w-[72%] flex-col items-start gap-[34px] pb-[52px] md:ml-0 md:w-full md:pb-5" />
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex h-[400px] items-start justify-center self-stretch bg-[url(/public/images/img_frame_76.png)] bg-cover bg-no-repeat px-14 py-[67px] md:h-auto md:p-5">
                <Img style={{marginTop:"57px",marginLeft:"34px"}}
                  src="images/img_image_1_2.png"
                  alt="imageone_one"
                  className="mb-8 h-[168px] w-[57%] rounded-[5px] object-cover"
                />
              </div>
              <HomeColumnuiux className="relative mb-6 ml-[26px] mt-[-38px] flex w-[72%] flex-col items-start gap-[34px] pb-[52px] md:ml-0 md:w-full md:pb-5" />
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex h-[400px] items-start justify-center self-stretch bg-[url(/public/images/img_frame_76.png)] bg-cover bg-no-repeat px-14 py-[67px] md:h-auto md:p-5">
                <Img style={{marginTop:"57px",marginLeft:"34px"}}
                  src="images/img_image_1_288x447.png"
                  alt="imageone_one"
                  className="mb-8 h-[168px] w-[57%] rounded-[5px] object-cover"
                />
              </div>
              <HomeColumnuiux className="relative mb-6 ml-[26px] mt-[-38px] flex w-[72%] flex-col items-start gap-[34px] pb-[52px] md:ml-0 md:w-full md:pb-5" />
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
