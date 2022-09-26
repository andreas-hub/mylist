export interface ImgurUploadImage {
    'data': ImgurImage,
    'success': boolean,
    'status': number
}

export interface ImgurImage {
    'id': string,
    'title': string | null,
    'description': string | null,
    'datetime': number,
    'type': string,
    'animated': boolean,
    'width': number,
    'height': number,
    'size': number,
    'views': number,
    'bandwidth': number,
    'vote': string | null,
    'favorite': boolean,
    'nsfw': boolean | null,
    'section': string | null,
    'account_url': string | null,
    'account_id': number,
    'is_ad': boolean,
    'in_most_viral': boolean,
    'has_sound': boolean,
    'tags': [],
    'ad_type': number,
    'ad_url': string,
    'edited': string,
    'in_gallery': boolean,
    'deletehash': string,
    'name': string | null,
    'link': string
}

export interface TVMazeEpisode {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    rating: {
        average: number,
    },
    image: {
        medium: string,
        original: string,
    },
    summary: string,
}
