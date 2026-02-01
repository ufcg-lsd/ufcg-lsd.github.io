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
  id: string;
  post: { url: string; width: number; height: number };
  link: string;
}
