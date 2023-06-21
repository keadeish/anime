import { useEffect, useState } from "react";
import "../App.css";
import { IUserData } from "../utils/animeStructure";
import { Footer } from "./Footer";
import { Header } from "./Header";
export function HomePage(): JSX.Element {
  const [daysConsumed, setDaysConsumed] = useState(Number);
  const [episodesWatched, setEpisodesWatched] = useState(Number);
  const [chaptersRead, setChaptersRead] = useState(Number);

  async function UserInfo() {
    const response = await fetch(
      "https://api.jikan.moe/v4/users/jump_reaper/full"
    );
    const userDataJSON: IUserData = await response.json();
    const daysConsumed: IUserData | number =
      userDataJSON.data.statistics.anime.days_watched +
      userDataJSON.data.statistics.manga.days_read;
    const episodesWatched: IUserData | number =
      userDataJSON.data.statistics.anime.episodes_watched;
    const totalChaptersRead: IUserData | number =
      userDataJSON.data.statistics.manga.chapters_read;
    console.log(userDataJSON.data.statistics.manga.days_read)
    setDaysConsumed(daysConsumed);
    setEpisodesWatched(episodesWatched);
    setChaptersRead(totalChaptersRead);
  }

  useEffect(() => {
    UserInfo();
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); ////scrolls to the bottom of the page
  };

  return (
    <>
      <Header />
      <div id="image-background">
        <img id="ukiyo" src="/images/ukiyojpg.jpg" alt="" />
        <div id="centered">
          <b>{episodesWatched.toLocaleString("en-US")}</b> Episodes Watched
        </div>
        <div id="centered2">
          <b>{Math.round(daysConsumed).toLocaleString("en-US")}</b> Days
          Consumed
        </div>
        <div id="centered3">
          <b>{chaptersRead.toLocaleString("en-US")}</b> Chapters Read
        </div>
        <img
          id="arrow"
          src="/images/chevron.svg"
          alt=""
          onClick={handleClick}
        />
      </div>
      <Footer />
    </>
  );
}
// CHANGE FOOTER LOCATION
