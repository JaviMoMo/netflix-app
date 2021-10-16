export interface NetflixModel {
    nav: Nav;
    hero: Hero;
    films: Films;
    series: Series;
}

export interface Nav {
    logo: Img;
    title: string;
    home: string;
    search: string;
}

export interface Img {
    src: string;
    alt: string;
}

export interface Hero {
    title: string;
    gallery: Gallery[];
} 

export interface Films {
    title: string;
    imgGallery: Img[];
}

export interface Series {
    title: string;
    imgGallery: Img[];
}

export interface Gallery {
    number: string;
    film: Img;
}



