import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as postsActions from '../../+state/actions/dashbaord.actions';
import { IStoreState } from '../../+state/reducers';
import { ICovidStoreState } from '../../types/models';
import Chart from './chart';
import { IPostsDispatchProps, IPostsProps } from './component.types';
import DataTableComp from './DataTable';

const Container = styled(`div`)({
  width: '70vw',
  margin: '0 auto',
})

class Dashbaord extends Component<IPostsProps> {

  constructor(props: IPostsProps) {
    super(props);
  }

  public componentDidMount(){
    this.props.onLoad();
  }

  public render() {
    const { items, error, loading } = this.props;

    if (error) { return <div>Error...</div>; }
    // tslint:disable-next-line: jsx-self-close
    if (loading) { return <div className={"ui active centered loader"}></div> }

    if (items) {
      return(
        <Container>
            <Chart data={items}/>
            <DataTableComp data={(items as any).Countries}/>
        </Container>
      )
    }
    return null;
  }
}

const mapStateToProps = (state: IStoreState): ICovidStoreState => {
  return {
    items: state.covid.items,
    error: state.covid.error,
    loading: state.covid.loading,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<postsActions.Actions>): IPostsDispatchProps => {
  return {
    onLoad: () => dispatch(postsActions.loadCovidData()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashbaord));