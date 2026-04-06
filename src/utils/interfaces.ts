import { Document } from "@contentful/rich-text-types";

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
    json: Document;
  };
}

export interface IWorkingField {
  name: string;
}

export interface IProject {
  name: string;
  link?: string;
  leader: { name: string };
  description: { json: Document };
  actionFieldsCollection: { items: IWorkingField[] };
  graduates: number;
  underGraduates: number;
  initDate: string;
  endDate?: string;
}

export interface IValues {
  mission: { json: Document };
  vision: { json: Document };
  values: string[];
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
