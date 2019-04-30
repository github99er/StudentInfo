import React from "react";
import MaterialTable from "material-table";
import {
  Search,
  ViewColumn,
  SaveAlt,
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
  Check,
  FilterList,
  Remove
} from "@material-ui/icons";

import { Edit, Delete } from "@material-ui/icons";

export default class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          icons={{
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
            ViewColumn: ViewColumn
          }}
          actions={[
            {
              iconName: "delete",
              icon: Delete,
              tooltip: "delete Student info",
              iconProps: { icon: <Delete /> },
              // CODE CREDIT FOR ONCLICK => https://mbrn.github.io/material-table/#/docz-examples-03-example-actions
              onClick: (event, rowData) => {
                console.log(
                  "You clicked & DELETED user " +
                    rowData.first +
                    " " +
                    rowData.last
                );
                alert(
                  "You clicked & DELETED user " +
                    rowData.first +
                    " " +
                    rowData.last
                );
              }
            },
            {
              iconName: "Edit",
              icon: Edit,
              tooltip: "edit Student info",
              iconProps: { icon: <Edit /> },
              // CODE CREDIT FOR ONCLICK => https://mbrn.github.io/material-table/#/docz-examples-03-example-actions
              onClick: (event, rowData) => {
                console.log(
                  "You clicked & EDITED user " +
                    rowData.first +
                    " " +
                    rowData.last
                );
                alert(
                  "You clicked & EDItED user " +
                    rowData.first +
                    " " +
                    rowData.last
                );
              }
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
          // using props instead of state; step 6;
          columns={this.props.columns}
          data={this.props.data}
          title="Student Information"
        />
      </div>
    );
  }
}

// https://github.com/mbrn/material-table/issues/188
const ActionIconComponent = props => <div>{props.icon}</div>;

/*const tableInfo = {
  columns: [
    { title: "First", field: "first" },
    { title: "Last", field: "last" },
    { title: "Age", field: "age", type: "numeric" },
    { title: "UO Student", field: "uo", type: "boolean" },
    { title: "UO ID", field: "id", type: "numeric" }
  ],
  data: [
    {
      first: "First1",
      last: "Last1",
      age: 21,
      uo: true
    },
    {
      first: "First2",
      last: "Last2",
      age: 31,
      uo: false
    }
  ]
};*/
