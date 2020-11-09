import React from 'react'
// @ts-ignore
import { DataTable } from 'react-data-components';
import 'react-data-components/css/table-twbs.css';

const columns = [
  { title: 'Country', prop: 'Country'  },
  { title: 'Total Confirmed', prop: 'TotalConfirmed' },
  { title: 'Total Recovered', prop: 'TotalRecovered' },
  { title: 'Total Deaths', prop: 'TotalDeaths' }
];

const DataTableComp = (props: any) => {
  return (
    <DataTable
      keys="name"
      columns={columns}
      initialData={props.data}
      initialPageLength={5}
      initialSortBy={{ prop: 'Country', order: 'ascending' }}
    />
)
}
export default DataTableComp

