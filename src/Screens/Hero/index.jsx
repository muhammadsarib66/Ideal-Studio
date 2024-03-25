import Slider from "react-slick";
import Heroimg1 from "../../assets/heroImg2.jpg"
import Heroimg3 from "../../assets/HeroImg3.jpeg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactTyped } from "react-typed";
import Button from "../../components/Button";

function Fade() {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    width: "100%",
    
  };
  return (
    <section className="">

    <div className="  relative">
        <div className='absolute flex justify-center  w-full items-center pt-48 z-10 '>
        <div className="flex gap-4 flex-col items-center justify-center capitalize text-white font-bold text-xl">
        <h2>Bring music to life </h2>
        <h1 className=" font-bold text-center text-2xl md:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7B16D9] to-[#E75827]  ">
        
        <ReactTyped
          strings={["We can record anything", "No Studio Yet No Problem", "Lets Make Your Voice Superb"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />

      </h1>
      
      <div className="pt-10">
      <a href="https://youtube.com" target="_blank" rel="noopener">
        

      <Button title="Book Now"  style='rounded-full px-5 py-3 text-sm md:text-2xl md:px-8 md:py-4 cursor-pointer bg-gradient-to-r from-purple-600 to-red-600 hover:text-black hover:bg-gradient-to-r hover:from-[#9023B5] hover:to-[#DE5235] text-white'/>
      </a>
      </div>
      </div>

        </div>
      <Slider className="w-[100%]  md:h-screen overflow-hidden" {...settings}>
       {[Heroimg1,Heroimg3].map((item ,ind)=> {
        return(
        <div key={ind} className=" w-[100%] h-screen  ">
          <img className=" object-cover w-full h-full" src={item}  alt="item"/>
        </div>
       )})}      
      </Slider>
    </div>
    </section>

  );
}

export default Fade;
