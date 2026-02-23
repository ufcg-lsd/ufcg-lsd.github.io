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

export interface IMainBanner {
  image: { url: string };
}

export interface IPageHeader {
  id: string;
  title: string;
  text: {
    json: any;
  };
}

export interface IWorkingField {
  name: string;
}

export interface IProfessor {
  name: string;
  role: string;
  photo: {
    url: string;
  };
  email?: string;
  linkedin?: string;
  github?: string;
  lattes?: string;
  workingFieldsCollection: { items: IWorkingField[] };
}
