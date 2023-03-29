import { Location } from 'history';
import { LanguagetypeMAP } from 'constants/navebar';

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
