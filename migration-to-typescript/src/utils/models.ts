type SourceCategory = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
type SourceLang = 'ar' | 'de' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh' | 'en' | 'es' | 'fr' | 'he' | 'it';
type sourceCountry =
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za'
    | 'mx';

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: SourceCategory;
    language: SourceLang;
    country: sourceCountry;
}

export interface IArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

interface INewsResponse {
    status: 'ok' | 'error';
}

export interface ISourcesResponse extends INewsResponse {
    sources: ISource[];
}

export interface IHeadLinesResponse extends INewsResponse {
    totalResults: number;
    articles: IArticle[];
}

export interface IViewClass {
    drawNews: (data: IHeadLinesResponse) => void;
    drawSources: (data: ISourcesResponse) => void;
}

export interface IDrawable<T> {
    draw: (data: T) => void;
}
