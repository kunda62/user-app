import { Action, ActionReducer } from "@ngrx/store";
import { userReducer } from "./reducers";
import { UserEffects } from "./effects";
import { UserState } from "./user.model";

export interface AppState {
  users: UserState
}

export interface AppStore {
  users: ActionReducer<UserState, Action>
}

export const appStore: AppStore = {
  users: userReducer
} 

export const appEffects = [UserEffects];
