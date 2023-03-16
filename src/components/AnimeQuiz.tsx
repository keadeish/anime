import { Footer } from "./Footer";
import { Header } from "./Header";
import { characterStructure } from "../utils/characterStructure";
import { useEffect, useState } from "react";

export function AnimeQuiz(): JSX.Element {
  const [firstAnime, setFirstAnime] = useState("");
  const [firstAnimeImage, setFirstAnimeImage] = useState("");
  const [secondAnime, setSecondAnime] = useState("");
  const [secondAnimeImage, setSecondAnimeImage] = useState("");

  async function characterData() {
    const response = await fetch("https://api.jikan.moe/v4/top/characters");
    const characterJSON: characterStructure = await response.json();
    const firstCharacter: characterStructure | string =
      characterJSON.data[20].name;
    const firstAnimeImageURL: characterStructure | string =
      characterJSON.data[20].images.jpg.image_url;
    const secondCharacter: characterStructure | string =
      characterJSON.data[19].name;
    const secondAnimeImageURL: characterStructure | string =
      characterJSON.data[9].images.jpg.image_url;
    console.log(firstCharacter, "/", secondCharacter); //make function that stores an array and removes a character from it, and then inserts them into first/second characters at random
    console.log(characterJSON.data[20].favorites);
    setFirstAnime(firstCharacter);
    setSecondAnime(secondCharacter);
    setFirstAnimeImage(firstAnimeImageURL);
    setSecondAnimeImage(secondAnimeImageURL);
  }

  useEffect(() => {
    characterData();
  }, []);

  return (
    <>
      <div className="aniMangaWrapper">
        <Header />
        <div className="QuizBorder">
          <p className="QuizTitle">
            <b>Who Is More Popular?</b>
          </p>
        </div>
        <img id="animeImage1" src={firstAnimeImage} alt="" />
        <img id="animeImage2" src={secondAnimeImage} alt="" />
        <Footer />
      </div>
    </>
  );
}
