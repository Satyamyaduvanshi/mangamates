// App.jsx
import './App.css';
import TrendingAnimeList from './Components/anime-trending';
import Footer from './Components/shared/Footer';
import Header from './Components/shared/Header';
import Welcome from './Components/shared/Welcome';
function App() {
  return (
    <>
      <Header/>
      <Welcome/>
      <TrendingAnimeList />
      <Footer/>
    </>
  );
}

export default App;
