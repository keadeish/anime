export interface animeObject {
    mal_id: 0;
    url: "string";
    images: {
        jpg: {
            image_url: "string";
            small_image_url: "string";
            large_image_url: "string";
        };
        webp: {
            image_url: "string";
            small_image_url: "string";
            large_image_url: "string";
        };
    };
    trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
    };
    approved: true;
    titles: ["string"];
    title: "string";
    title_english: "string";
    title_japanese: "string";
    title_synonyms: ["string"];
    type: "TV";
    source: "string";
    episodes: 0;
    status: "Finished Airing";
    airing: true;
    aired: {
        from: "string";
        to: "string";
        prop: {
            from: {
                day: 0;
                month: 0;
                year: 0;
            };
            to: {
                day: 0;
                month: 0;
                year: 0;
            };
            string: "string";
        };
    };
    duration: "string";
    rating: "G - All Ages";
    score: 0;
    scored_by: 0;
    rank: 0;
    popularity: 0;
    members: 0;
    favorites: 0;
    synopsis: "string";
    background: "string";
    season: "summer";
    year: 0;
    broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
    };
    producers: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
    licensors: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
    studios: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
    genres: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
    explicit_genres: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
    themes: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
    demographics: [
        {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
        }
    ];
}
export interface animeStructure {
    data: animeObject[];
    pagination: {
        last_visible_page: 0;
        has_next_page: true;
        items: {
            count: 0;
            total: 0;
            per_page: 0;
        };
    };
}
export interface randomAnimeStructure {
    data: {
        mal_id: 0;
        url: "string";
        images: {
            jpg: {
                image_url: "string";
                small_image_url: "string";
                large_image_url: "string";
            };
            webp: {
                image_url: "string";
                small_image_url: "string";
                large_image_url: "string";
            };
        };
        trailer: {
            youtube_id: "string";
            url: "string";
            embed_url: "string";
        };
        approved: true;
        titles: ["string"];
        title: "string";
        title_english: "string";
        title_japanese: "string";
        title_synonyms: ["string"];
        type: "TV";
        source: "string";
        episodes: 0;
        status: "Finished Airing";
        airing: true;
        aired: {
            from: "string";
            to: "string";
            prop: {
                from: {
                    day: 0;
                    month: 0;
                    year: 0;
                };
                to: {
                    day: 0;
                    month: 0;
                    year: 0;
                };
                string: "string";
            };
        };
        duration: "string";
        rating: "G - All Ages";
        score: 0;
        scored_by: 0;
        rank: 0;
        popularity: 0;
        members: 0;
        favorites: 0;
        synopsis: "string";
        background: "string";
        season: "summer";
        year: 0;
        broadcast: {
            day: "string";
            time: "string";
            timezone: "string";
            string: "string";
        };
        producers: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
        licensors: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
        studios: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
        genres: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
        explicit_genres: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
        themes: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
        demographics: [
            {
                mal_id: 0;
                type: "string";
                name: "string";
                url: "string";
            }
        ];
    };
}

export interface IUserData {
    data: Data
}

export interface Data {
    mal_id: number
    username: string
    url: string
    images: Images
    last_online: string
    gender: string
    birthday: string
    location: string
    joined: string
    statistics: Statistics
    external: External[]
}

export interface Images {
    jpg: Jpg
    webp: Webp
}

export interface Jpg {
    image_url: string
}

export interface Webp {
    image_url: string
}

export interface Statistics {
    anime: Anime
    manga: Manga
}

export interface Anime {
    days_watched: number
    mean_score: number
    watching: number
    completed: number
    on_hold: number
    dropped: number
    plan_to_watch: number
    total_entries: number
    rewatched: number
    episodes_watched: number
}

export interface Manga {
    days_read: number
    mean_score: number
    reading: number
    completed: number
    on_hold: number
    dropped: number
    plan_to_read: number
    total_entries: number
    reread: number
    chapters_read: number
    volumes_read: number
}

export interface External {
    name: string
    url: string
}
