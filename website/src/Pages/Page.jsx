import Hero from "./Hero"
import Slider from "../Components/Slider";
import MasnoryGallery from "./MasnoryGallery";
import BlogCard from "./BlogCard";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Page = () => {
  return (
    <>
      <Hero/>
      <Slider/>
      <MasnoryGallery/>
      <BlogCard/>
      <Services/>
      <ContactUs/>
    </>
  )
}

export default Page
