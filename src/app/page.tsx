import Banner from "@/components/Banner";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
