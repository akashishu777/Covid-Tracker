export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ICovidStoreState {
  items: any[] | null;
  error: any;
  loading: boolean;
}