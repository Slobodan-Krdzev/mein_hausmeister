export interface SecondSectionPostType {
    id: number,
    text: string
}

export interface CardCarousellServiceType {
    id: number,
    label: string,
    icon: string
}

export interface FinderContactType {
    id: number,
    tag: { color: string, label: string},
    image: string,
    name: string,
    adress: string,
    location: string
}

export interface PhoneSectionListingItemType {
    id: number,
    icon: string,
    title: string,
    desc: string
}