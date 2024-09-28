// Components/anime-trending.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingAnime } from './../rtk/Slices/anime-tranding-slice';

const TrendingAnimeList = () => {
  const dispatch = useDispatch();
  
  const { trendingAnimes, status, error } = useSelector((state) => state.animeTrending);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrendingAnime());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div className="text-center">Loading...</div>;
  if (status === "failed") return <div className="text-center">Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="bg-gray-200 rounded p-4 mb-4 shadow-lg">
        <h2 className="text-5xl text-black glow">Trending Animes</h2>
      </div>
      <ul>
        {trendingAnimes && trendingAnimes.length > 0 ? (
          trendingAnimes.map((anime, index) => (
            <li key={anime.id} className="flex m-2">
              <a href={`https://hianime.to/${anime.id}?ref=search`} target="_blank" rel="noopener noreferrer" className="flex w-full backdrop-blur-md bg-white/30 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-2"> {/* Added backdrop-blur and bg color */}
                <div className="flex-shrink-0 p-2">
                  <img className="rounded" src={anime.img} alt={anime.name} style={{ width: '150px', height: '200px' }} />
                </div>
                <div className="flex-1 p-4">
                  <p className="text-5xl">{index + 1}</p>
                  <p className="text-2xl">{anime.name}</p>
                </div>
              </a>
            </li>
          ))
        ) : (
          <p className="text-center">No trending animes available</p>
        )}
      </ul>
    </div>
  );
};

export default TrendingAnimeList;
