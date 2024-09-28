// App.jsx
import './App.css';
import TrendingAnimeList from './Components/anime-trending';
import Footer from './Components/shared/Footer';
import Header from './Components/shared/Header';
import Welcome from './Components/shared/Welcome';
import FeaturedAnime from './Components/FeaturedAnime';
function App() {
  return (
    <>
      <Header/>
      <Welcome/>
      <FeaturedAnime/>
      <TrendingAnimeList />
      <Footer/>
    </>
  );
}

export default App;
