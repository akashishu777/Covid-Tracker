import { ICovidData } from '../../types/models';

export enum ActionTypes {
  COVID_GET_INIT = '[COVID] Get Init',
  COVID_GET_SUCCESS = '[COVID] Get Success',
  COVID_GET_ERROR = '[COVID] Get Error',
  SEARCH = 'SEARCH'
}

interface ISearch {
  readonly type: ActionTypes.SEARCH;
  payload: string;
}

interface ICovidGetInit {
  readonly type: ActionTypes.COVID_GET_INIT;
}

interface ICodidGetSuccess {
  readonly type: ActionTypes.COVID_GET_SUCCESS;
  payload: ICovidData[];
}

interface ICovidGetError {
  readonly type: ActionTypes.COVID_GET_ERROR;
  payload: any;
}

export type Actions = ICovidGetInit | ICodidGetSuccess | ICovidGetError | ISearch;

export function loadCovidData(): ICovidGetInit {
  return {
    type: ActionTypes.COVID_GET_INIT,
  };
}

export function createCovidSuccess(response: ICovidData[]): ICodidGetSuccess {
  return {
    type: ActionTypes.COVID_GET_SUCCESS,
    payload: response,
  };
}

export function createCovidError(response: any): ICovidGetError {
  return {
    type: ActionTypes.COVID_GET_ERROR,
    payload: response,
  };
}

export function search(response: any): ISearch {
  return {
    type: ActionTypes.SEARCH,
    payload: response,
  };
}