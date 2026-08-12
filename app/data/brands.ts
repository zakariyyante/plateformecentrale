export interface Brand {
  id: string;
  name: string;
  logo: string; // path to /public/ image
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "bwin",
    name: "bwin",
    logo: "/brands/bwin_dark.png",
    rating: 9.9,
    bonus: "VOTRE MISE REMBOURSÉE JUSQU'À 100€",
    url: "https://track.bwin.com/visit?clickid=",
    isMobile: true,
    votes: 4852,
  }
];
