import { Location } from 'history';
import { LanguagetypeMAP } from 'constants/navebar';
import data from 'data/index';

export const goSmothTag = (id: string): void => {
  const place = document.getElementById(id);
  place?.scrollIntoView({ behavior: 'smooth' });
};

export const getLanguage = (location: Location): number => {
  const { pathname } = location;
  const path = pathname.substr(1);
  const objMap = Object.values(LanguagetypeMAP);

  if (objMap.includes(path)) {
    const value = objMap.findIndex((val) => val === path);
    return value;
  }
  return 0;
};

export const sanitizeHtml = (html: string): string => {
  const doc = document.createElement('div');
  doc.innerHTML = html;
  return doc.innerHTML;
};

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const filterItems = (
  input: string,
):
  | {
      uid: string;
      enzyme: Array<{
        enzyme: string;
        diploType: string;
        phenoType: string;
      }>;
      medicine: Array<{
        name: string;
        dose: string;
      }>;
    }
  | Record<string, never> => {
  const query = input.toLowerCase();
  const matchingKey = Object.keys(data.data).find((key) => key.toLowerCase().startsWith(query));
  if (matchingKey) {
    return data.data[matchingKey];
  }

  return {};
};
