import Advertisement from "../../../components/main/Home/Advertisement";
import HomeCard from "../../../components/main/Home/HomeCard";
import HomeSlider from "../../../components/main/Home/HomeSlider";
import Mall from "../../../components/main/Home/Mall";
import DailyDiscover from "../../../components/main/Home/DailyDiscover";
import TopProducts from "../../../components/main/Home/TopProducts";
import HomeCategories from "../../../components/main/Home/HomeCategories";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="my-8 container">
      <div className="flex flex-col gap-10">
        <HomeSlider />
        <HomeCard />
        <Advertisement />
        <HomeCategories/>
        <Mall/>
        <TopProducts/>
        <DailyDiscover/>
      </div>
    </div>
  );
};

export default Home;
