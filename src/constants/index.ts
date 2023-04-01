export * from './colors';
export * from './navebar';

export const GOOGLA_API_KEY = 'AIzaSyBheiY1amTUU_Y_RH_O-SllTrcyhvJ_ClE';

export const Location = {
  lng: 121.45310823866673,
  lat: 25.04686361394273,
};

export const EMAIL_SERVICE_ID = 'service_32hdmo8';
export const EMAIL_TEMPLATE_ID = 'template_3ktnn4h';
export const EMAIL_USER_ID = 'user_MsuM3ECGgrTkYZzJVS8QW';

export type UserType = {
  uid: string;
  userName: string;
  photoUrl: string;
  loggedIn: boolean;
};

export type DataType = {
  [key: string]: {
    isAdmin: boolean;
    name: string;
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
  };
};
