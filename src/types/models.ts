export interface ICovidData {
    Countries: any[];
    Date: Date;
    Global: any;
}

export interface ICovidStoreState {
  items: ICovidData[] | null;
  error: any;
  loading: boolean;
}