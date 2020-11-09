import { RouteComponentProps } from 'react-router';

import { ICovidStoreState } from '../../types/models';

export interface IPostsProps extends ICovidStoreState, RouteComponentProps<any> {
  onLoad: () => void;
}

export type IPostsDispatchProps = Pick<IPostsProps, 'onLoad'>;