// export enum UserType {
//   User = "user",
//   Admin = "admin",
//   Demo = "demo",
// }

export enum LoginType {
  Standard = "standard",
  Google = "google",
}

export interface IUser {
  fullname?: string;
  username: string;
  password: string;
  email: string;
  type: string;
  avatar?: string;
  disabled?: string;
  lastLoginIn?: Date;
  loginType?: LoginType;
}
