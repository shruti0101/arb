import Hero from "@/components/Hero";
import ProductsSlider from "@/components/ProductsSlider";
import Image from "next/image";
import Process from "@/components/Process";
import IndustriesSection from "@/components/IndustriesSection";
import Count from "@/components/Count";
import About from "@/components/About";
import Category from "@/components/Category";
import Timeline from "@/components/Timeline";
import Excellence from "@/components/Excellence";
import Manufacturing from "@/components/Manufacture";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonial";
import AboutRussia from "@/components/AboutRussia";
export default function Home() {
  return (
<div>

<Hero/>
  <ProductsSlider/>
<Clients/>
  
  {/* <Process/> */}
  <IndustriesSection/>
<AboutRussia/>
  <Category/>
  <Timeline/>
<About/>
  <Excellence/>
    <Count/>
  <Manufacturing/>
  <Testimonials/>

</div>
  );
}
