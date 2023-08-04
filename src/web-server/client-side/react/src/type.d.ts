declare module "*.gif";
declare module "*.jpg";
declare module "*.svg";
declare module "*.scss";
declare module "*.css";
declare module "*.png" {
  const str: string;
  export = str;
}