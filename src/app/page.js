import BooksData from "@/components/bookdata/BooksData";
import Banner from "@/components/home/Banner";
import CuratedGenres from "@/components/home/CuratedGenres";
import NewsletterSection from "@/components/home/NewsletterSection";
import TrendingCurations from "@/components/home/TrendingCurations";



export default async function Home() {


  return (
    <div>
      <Banner />
      <CuratedGenres />
      <BooksData />
      <TrendingCurations />
      <NewsletterSection />
    </div>
  );
}