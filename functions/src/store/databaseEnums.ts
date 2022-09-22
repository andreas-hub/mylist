export enum MovieStatus {
    DvdReleased = 1,
    Released,
    Upcoming,
    Unknown,
}

export enum MovieUserStatus {
    Completed = 1,
    PlanToWatch,
    OnHold,
    Dropped,
}

export enum TVStatus {
    Finished = 1,
    Airing,
    Upcoming,
    Unknown,
}

export enum TVUserStatus {
    Completed = 1,
    Watching,
    PlanToWatch,
    OnHold,
    Dropped,
}

export enum ComicStatus {
    Finished = 1,
    Publishing,
    Upcoming,
    Hiatus,
    Unknown,
}

export enum ComicUserStatus {
    Completed = 1,
    Reading,
    PlanToRead,
    OnHold,
    Dropped,
}

export enum Videography {
    LiveAction = 1,
    Animation,
    Anime,
}

export enum TvType {
    OVA = 1,
    Web,
    TV,
    Special,
}

export enum ComicType {
    Manga = 1,
    Manhwa,
    Manhua,
    Doujinshi,
    Comic,
    OneShot,
    Novel,
    Unknown,
}

export enum AgeRating {
    G = 1,
    PG,
    R,
    R18,
}

export enum Tag {
    Webtoon = 1,
    Shonen,
    Shoujo,
    Seinen,
    Josei,
    Hentai,
    Ecchi,
    Isekai,
    RPG,
    Regression,
    MartialArts,
    Wuxia,
}

export enum AuthorRole {
    Writer = 1,
    Artist,
}
