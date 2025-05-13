import Advertisement from "../../../components/main/Home/Advertisement";
import HomeCard from "../../../components/main/Home/HomeCard";
import HomeSlider from "../../../components/main/Home/HomeSlider";

const Home = () => {
  return (
    <div className="my-8 container">
      <div className="flex flex-col gap-10">
        <HomeSlider />
        <HomeCard />
        <Advertisement />
      </div>
    </div>
  );
};

export default Home;
