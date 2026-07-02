import Banner from "@/components/home/Banner";
import NewsletterSection from "@/components/home/NewsletterSection";
import TrendingCurations from "@/components/home/TrendingCurations";



export default async function Home() {


  return (
    <div>
      <Banner />
      <TrendingCurations />
      <NewsletterSection />
    </div>
  );
}