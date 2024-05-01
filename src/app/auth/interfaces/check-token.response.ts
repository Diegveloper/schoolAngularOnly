import { User } from "./user.interface";

export interface CheckTokenResponse {
  id: number;
  user: User;
  token: string

}
