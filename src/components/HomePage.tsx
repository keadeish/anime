import { useEffect, useState } from "react";
import "../App.css";
import { IUserData } from "../utils/animeStructure";
export function HomePage(): JSX.Element {
    const [daysConsumed, setDaysConsumed] = useState(Number)
    const [episodesWatched, setEpisodesWatched] = useState(Number)
    const [chaptersRead, setChaptersRead] = useState(Number)
    async function UserInfo() {

        const response = await fetch("https://api.jikan.moe/v4/users/Jump_Reaper/full");
        const userDataJSON: IUserData = await response.json();
        const daysConsumed: IUserData | number = userDataJSON.data.statistics.anime.days_watched + userDataJSON.data.statistics.manga.days_read;
        const episodesWatched: IUserData | number = userDataJSON.data.statistics.anime.episodes_watched
        const totalChaptersRead: IUserData | number = userDataJSON.data.statistics.manga.chapters_read
        setDaysConsumed(daysConsumed)
        setEpisodesWatched(episodesWatched)
        setChaptersRead(totalChaptersRead)
    }

    useEffect(() => {
        UserInfo();
    }, [])

    return <>
        <div id="header">KAL</div>
        <div id="image-background">
            <img id="ukiyo" src="/images/ukiyojpg.jpg" alt="" />
            <div id="centered"><b>{episodesWatched.toLocaleString("en-US")}</b> Episodes Watched</div>
            <div id="centered2"><b>{Math.round(daysConsumed).toLocaleString("en-US")}</b> Days Consumed</div>
            <div id="centered3"><b>{chaptersRead.toLocaleString("en-US")}</b> Chapters Read</div>
            <img id="arrow" src="/images/chevron.svg" alt="" />

        </div>
        <div id="footer"> <a className="links" href="https://github.com/keadeish">GitHub </a>| <a className="links" href="https://twitter.com/Psypreme">Twitter</a> | <a className="links" href="https://www.instagram.com/psychician/">Instagram</a> | <a className="links" href="https://myanimelist.net/profile/Jump_Reaper">MAL</a></div>
    </>
}
// CHANGE FOOTER LOCATION