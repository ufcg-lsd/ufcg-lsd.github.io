export interface INavItem {
  id: string;
  text: string;
  link: string;
  color: string;
  order: number;
}

export interface IContact {
  text: string;
  id: string;
  link: string;
}

export interface IHomePost {
  text: string;
  background: string;
  thumb: { url: string };
  link: string;
  layout: string;
  hero: boolean;
  priority: number;

}
