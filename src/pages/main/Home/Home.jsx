import Advertisement from "../../../components/main/Home/Advertisement";
import Categories from "../../../components/main/Home/Categories";
import HomeCard from "../../../components/main/Home/HomeCard";
import HomeSlider from "../../../components/main/Home/HomeSlider";
import "swiper/css";
import "swiper/css/pagination";
import Mall from "../../../components/main/Home/Mall";
import DailyDiscover from "../../../components/main/Home/DailyDiscover";
import TopProducts from "../../../components/main/Home/TopProducts";

const Home = () => {
  return (
    <div className="my-8 container">
      <div className="flex flex-col gap-10">
        <HomeSlider />
        <HomeCard />
        <Advertisement />
        <Categories/>
        <Mall/>
        <TopProducts/>
        <DailyDiscover/>
      </div>
    </div>
  );
};

export default Home;
