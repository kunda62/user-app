export interface Users {
  id: number | string;
  name: string;
  eyeColor: boolean;
  age: number;
}

export interface UserState {
  users: Users[];
}