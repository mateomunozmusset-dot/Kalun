import Hero from "@/components/home/Hero";
import EssenceGrid from "@/components/home/EssenceGrid";
import CollectionsShowcase from "@/components/home/CollectionsShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HistoryTeaser from "@/components/home/HistoryTeaser";
import CraftsmanshipProcess from "@/components/home/CraftsmanshipProcess";
import Testimonials from "@/components/home/Testimonials";
import InstagramGrid from "@/components/home/InstagramGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <EssenceGrid />
      <CollectionsShowcase />
      <FeaturedProducts />
      <HistoryTeaser />
      <CraftsmanshipProcess />
      <Testimonials />
      <InstagramGrid />
    </>
  );
}
