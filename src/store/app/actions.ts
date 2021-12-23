/**
 * TOSHIBA
 * Copyright(c) TOSHIBA 2021 All Rights Reserved.
 *
 * File Name	: actions.ts
 * Package	: store
 * Author	: Sajith Rajan
 * Created At	: 01-12-2021
 * Purpose	: ApiListPage Actions.
 *
 * [Change history]
 *
 * Modified By	:
 * Date		:
 * Description	:
 */
import { action } from "typesafe-actions";
import { AppActionTypes, AuthData } from "./types";

export const init = () => action(AppActionTypes.INITIALIZE);

export const setAuthenticationData = (authData: AuthData) =>
  action(AppActionTypes.SET_AUTHENTICATION_DATA, authData);

export const clearAuthenticationData = () =>
  action(AppActionTypes.CLEAR_AUTHENTICATION_DATA);
