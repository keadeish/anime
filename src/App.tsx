import './App.css'
import { AnimeFAQ } from './components/AnimeFAQ';
import { AnimeQuiz } from './components/AnimeQuiz';
import { HomePage } from "./components/HomePage";
function App(): JSX.Element {
  return <>
    <HomePage />
    <AnimeFAQ />
    {/* <AnimeQuiz /> */}
  </>
}

export default App;
