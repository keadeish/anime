import './App.css'
import { AnimeFAQ } from './components/AnimeFAQ';
import { AnimeList } from './components/AnimeList';
import { HomePage } from "./components/HomePage";
function App(): JSX.Element {
  return <>
    <HomePage />
    <AnimeFAQ />
    <AnimeList />
  </>
}

export default App;
