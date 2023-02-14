import { useState } from "react"
import { whatIsAnime, whyAnime, iDontLikeAnime, whatIsManga } from "./questions"

export function AnimeFAQ(): JSX.Element {

    const [selected, setSelected] = useState<null | number>()

    function toggle(i: number): void {
        console.log(selected)
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return <>
        <div className="wrapper">
            <div className="accordion">
                {faqData.map((item, i) =>
                    <div className="item" key={i}>
                        <div className="title" onClick={() => toggle(i)}>
                            <p>{item.question}</p>
                            <span id="collapse">{selected === i ? "-" : "+"}</span>
                        </div>
                        <div className={selected === i ? "description show" : "description"}> {item.answer}
                        </div>
                    </div>)}

            </div>
        </div>
    </>
}

//fix the minus button changing colours
//export faq
const faqData = [{ question: "What is Anime?", answer: whatIsAnime }, { question: "What is Manga?", answer: whatIsManga }, { question: "Why Anime?", answer: whyAnime }, { question: "I don't like Anime", answer: iDontLikeAnime }]