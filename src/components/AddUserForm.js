import React from 'react';

// Step 10-1: Because forms will need state for the values in the input fields, so we'll make our component a class component.
export class AddUserForm extends React.Component {
  constructor(props) {
    super(props);

    // Step 10-1: Setup the state for our form. We'll have 4 inputs, "name", "email", "phone" and "website"
    this.state = {
      name: '',
      email: '',
      phone: '',
      website: ''
    };

    // Step 10-2: Since we'll be passing the "handleChangeName" method into the input field, we'll need to bind the reference of this component to it
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  // Step 10-2: This "handleNameChange" method will be passed in to the input field to handle any change events to the input value.
  handleNameChange(e) {
    // Step 10-2: Grab the value from the target, which in this case will be the input field
    const name = e.target.value;
    // Step 10-2: Update the state to reflect what is currently inputted into the field
    this.setState({name});
  }

  // Step 10-1: Render a basic form for now.
  render() {
    return (
      <form>
        Form Here
      </form>
    );
  }
}
