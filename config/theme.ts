export type ThemeProps = {
  name: string;
  body: string;
  text: string;
  dark: string;
  secondaryText: string;
  accentColor: string;
  accentBright: string;
  projectCard: string;
  skinColor: string;
  skinColor2: string;
  imageDark: string;
  imageClothes: string;
  avatarMisc: string;
  avatarShoes: string;
}

export const lightTheme: ThemeProps = {
  name: "light",
  body: "#FFFFFF",
  text: "#343434",
  dark: "#000000",
  secondaryText: "#7F8DAA",
  accentColor: "#126e82",
  accentBright: "#4b778d",
  projectCard: "#DCE4F2",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#dce4f2",
  imageClothes: "#dce4f2",
  avatarMisc: "#e9ecf2",
  avatarShoes: "#ccd2e3",
};

export const darkTheme: ThemeProps = {
  name: "dark",
  body: "#1D1D1D",
  text: "#FFFFFF",
  dark: "#000000",
  secondaryText: "#8D8D8D",
  accentColor: "#126e82",
  accentBright: "#4b778d",
  projectCard: "#292A2D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#292A2D",
  imageClothes: "#000000",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
};