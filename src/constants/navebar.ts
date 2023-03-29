import { Location } from 'history';
import { getLanguage } from 'method';

export const Languagetype = {
  TraditionalChinese: 0,
  SimplfiedChinese: 1,
  English: 2,
};

export const LanguagetypeMAP = {
  [Languagetype.TraditionalChinese]: 'tw',
  [Languagetype.SimplfiedChinese]: 'cn',
  [Languagetype.English]: 'en',
};

export const distinguishLan = (arr: Array<string>, location: Location): string => {
  const value = getLanguage(location);
  switch (value) {
    case Languagetype.TraditionalChinese: {
      return arr[Languagetype.TraditionalChinese];
    }
    case Languagetype.SimplfiedChinese: {
      return arr[Languagetype.SimplfiedChinese];
    }
    case Languagetype.English: {
      return arr[Languagetype.English];
    }
    default:
      return arr[Languagetype.TraditionalChinese];
  }
};
