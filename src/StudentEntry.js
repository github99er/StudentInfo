import React from "react";
import { TextField, Checkbox, Button } from "@material-ui/core";
import NumericInput from "react-numeric-input";

export default class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", first: "", last: "", age: "", student: false };
  }
  onAgeChange = (asNum, asString) => {
    console.log(asNum);
    console.log(asString);

    /*ERROR BELOW*/
    this.setState({ age: asString });
    //console.log(this.state.asString);
  };

  onReset = () => {
    //console.log(this.state);
    this.setState({ id: "", first: "", last: "", age: "", student: false });
    console.log("State after RESET!", this.state);
  };

  onSave = () => {
    const { id, first, last, age, student } = this.state;
    console.log(id == this.state.id);
    console.log("hello");
    if (last.length > 0) {
      this.props.addCallBack(this.state);
      console.log(student + "this is the bool");
    } else {
      console.log("Last name length < 0");
    }

    //console.log();
  };

  onChange = e => {
    // console.log(!this.state.student);
    // console.log(this.state.student + "before student state change");
    //console.log(this.state.first);
    const name = e.target.name;
    const value = e.target.value;

    // console.log(this.state.first);
    //if (name === "first") {
    //  console.log("true");
    this.setState({ [name]: value });
    // console.log(name)
    // console.log([name] + "this is name");
    // console.log(this.state.first);
    // } else if (name === "last") {
    //  this.setState({ [name]: value });
    //} else if (name === "id") {
    //   console.log(this.state.id + "this is id before SS");
    //  this.setState({ [name]: value });
    // console.log(this.state.id + "this is id after SS");
    if (name === "checkbox") {
      //  console.log(!this.state.student);
      console.log(this.state.student + "before student state change");
      this.setState({ student: !this.state.student });

      console.log(this.state.student + "this is state");
      //console.log(!this.state.student);
      console.log(this.state.student + "after student state change");
    }

    //console.log(value)
    // console.log(this.state.first);
    // console.log(e.target.type);
  };

  render() {
    return (
      <div className="Table">
        <tr className="Row">
          <td className="Cell"> First </td>
          <td className="Cell">
            <TextField
              name="first"
              title="First"
              onChange={this.onChange}
              value={this.state.first}
            >
              {" "}
            </TextField>{" "}
          </td>
        </tr>
        <tr className="Row">
          <td className="Cell"> Last </td>
          <td className="Cell">
            <TextField
              onChange={this.onChange}
              name="last"
              title="First"
              value={this.state.last}
            >
              {" "}
            </TextField>
          </td>
        </tr>
        <tr className="Row">
          <td className="Cell"> Age </td>
          <td className="Cell">
            {/* ERROR BELOW */}
            <NumericInput
              min="1"
              max="120"
              //valueAsString = {this.props.value}
              //valueAsNumber = {parseInt(this.props.value)}
              value={this.state.age}
              onChange={this.onAgeChange}

              /*onChange = {this.onAgeChange(this.props.value)}*/
              //onChange={this.onAgeChange(this.props.valueAsString, this.props.valueAsNumber)}
            />
          </td>
        </tr>
        <tr className="Row">
          <td className="Cell">UO Student </td>
          <td className="Cell">
            {/* CHECKED = checkbox prop for currentVALUE */}
            <Checkbox
              name="checkbox"
              onChange={this.onChange}
              checked={this.state.student}
            />{" "}
          </td>
        </tr>
        <tr className="Row">
          <td className="Cell"> UO ID </td>
          <td className="Cell">
            <TextField
              name="id"
              onChange={this.onChange}
              title="UO ID"
              value={this.state.id}
            />
          </td>
        </tr>
        <br />

        <tr className="Row">
          <td className="Cell" />
          <td className="Cell">
            <Button
              onClick={this.onReset}
              variant="contained"
              color="secondary"
            >
              {" "}
              Reset{" "}
            </Button>
            &nbsp;
            <Button onClick={this.onSave} variant="contained" color="primary">
              {" "}
              Save{" "}
            </Button>
          </td>
        </tr>
      </div>
    );
  }
}
