import React from "react";
import ErrorBoundary from "./ErrorBoundary.js";

import StudentEntry from "./StudentEntry.js";
import StudentList from "./StudentList.js";
import { Grid, Paper } from "@material-ui/core";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { data: [] };
    this.state = { data: tableInfo.data };
  }
  // STEP 14 BELOW
  onAddStudent = info => {
    const data = this.state.data.slice();
    data.push(info);
    this.setState({ data });
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <h1>CIT 382 19W Assignment 4</h1>
          <Grid container justify="center">
            <Grid>
              <StudentList data={this.state.data} columns={tableInfo.columns} />
            </Grid>
            <Grid>
              <Paper className="StudentEntry">
                <StudentEntry addCallBack={this.onAddStudent} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}
const tableInfo = {
  columns: [
    { title: "First", field: "first" },
    { title: "Last", field: "last" },
    { title: "Age", field: "age", type: "numeric" },
    { title: "UO Student", field: "student", type: "boolean" },
    { title: "UO ID", field: "id", type: "numeric" }
  ],
  data: [
    {
      first: "First1",
      last: "Last1",
      age: 21,
      student: true,
      id: 951488823
    },
    {
      first: "First2",
      last: "Last2",
      age: 31,
      student: false
    }
  ]
};
