import profileImage from "../assets/images/Profile/my-profile.jpeg";

export const LNAME = process.env.REACT_APP_LNAME ? process.env.REACT_APP_LNAME : '';
export const FNAME = process.env.REACT_APP_FNAME ? process.env.REACT_APP_FNAME : '';
export const BRAND_NAME = process.env.REACT_APP_BRAND_NAME ? process.env.REACT_APP_BRAND_NAME : 'Portfolio Website';
export const YEAR = process.env.REACT_APP_YEAR ? process.env.REACT_APP_YEAR : '';
export const LINKEDIN = process.env.REACT_APP_LINKEDIN ? process.env.REACT_APP_LINKEDIN : 'https://www.linkedin.com/';
export const EMAIL = process.env.REACT_APP_EMAIL ? process.env.REACT_APP_EMAIL : '#';
export const GITHUB = process.env.REACT_APP_GITHUB ? process.env.REACT_APP_GITHUB : 'https://github.com/';
export const PROFILE_SRC = profileImage;
