export interface characterStructure {
    data: Daum[]
    pagination: Pagination
}

export interface Daum {
    mal_id: number
    url: string
    images: Images
    name: string
    name_kanji: string
    nicknames: string[]
    favorites: number
    about: string
}

export interface Images {
    jpg: Jpg
    webp: Webp
}

export interface Jpg {
    image_url: string
    small_image_url: string
}

export interface Webp {
    image_url: string
    small_image_url: string
}

export interface Pagination {
    last_visible_page: number
    has_next_page: boolean
    items: Items
}

export interface Items {
    count: number
    total: number
    per_page: number
}
