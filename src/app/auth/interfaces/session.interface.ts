export interface Session {
  id:         number;
  authorized: boolean;
  userId:     number;
  role:       string;
}
