import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeaturedAnime } from "../rtk/Slices/FeaturedAnimes-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; 

function DarkModeToggle({ toggleDarkMode, darkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 px-4 py-2 rounded-full shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

function FeaturedAnime() {
  const dispatch = useDispatch();
  const { featuredanime, status, error } = useSelector(
    (state) => state.animeFeatured
  );

  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("topAiringAnimes");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFeaturedAnime());
    }
  }, [dispatch, status]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (status === "loading") return <div className="text-center">Loading...</div>;
  if (status === "failed") return <div className="text-center">Error: {error}</div>;

  const renderSwiper = (animeList) => (
    <Swiper
      slidesPerView={3} 
      centeredSlides={true} 
      initialSlide={1} 
      spaceBetween={30} 
      grabCursor={true} 
      effect={"coverflow"} 
      autoplay={{ delay: 2000, disableOnInteraction: false }} 
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200, 
        modifier: 1,
        slideShadows: false, 
      }}
      modules={[EffectCoverflow, Autoplay]} 
      className="swiper-container h-full"
    >
      {animeList && animeList.length > 0 ? (
        animeList.map((anime) => (
          <SwiperSlide key={anime.id} className="flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg transition-transform transform hover:scale-105 p-4">
              <img
                src={anime.img}
                alt={anime.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-2 text-gray-800 dark:text-white text-center">
                {anime.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-2">
                {anime.details} {/* Add any details here if available */}
              </p>
              <div className="flex justify-center space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Watch Now</button>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Detail</button>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <p className="text-center">No animes available</p>
      )}
    </Swiper>
  );

  const renderActiveCategory = () => {
    switch (activeCategory) {
      case "topAiringAnimes":
        return renderSwiper(featuredanime.topAiringAnimes);
      case "mostPopularAnimes":
        return renderSwiper(featuredanime.mostPopularAnimes);
      case "mostFavoriteAnimes":
        return renderSwiper(featuredanime.mostFavoriteAnimes);
      case "latestCompletedAnimes":
        return renderSwiper(featuredanime.latestCompletedAnimes);
      default:
        return null;
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-transparent dark:bg-gray-600 min-h-screen py-11 px-4 relative flex flex-col items-center">
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <div className="relative bg-transparent w-full max-w-7xl h-auto flex items-center justify-center mb-0">
          <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center space-x-4 z-10">
            {["topAiringAnimes", "mostPopularAnimes", "mostFavoriteAnimes", "latestCompletedAnimes"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`mt-4 px-4 py-2 text-white rounded-full transition ${
                    activeCategory === category
                      ? "bg-yellow-800 dark:bg-gray-900"
                      : "bg-gray-500 dark:bg-gray-700"
                  }`}
                >
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </button>
              )
            )}
          </div>

          {renderActiveCategory()}
        </div>
      </div>
    </div>
  );
}

export default FeaturedAnime;
