import React from 'react';

// Step 6-1: Setup a JSX style object to use for this component
const styles = {
  backgroundColor: '#000',
  borderRadius: '0.25rem',
  color: '#fff',
  padding: '0.5rem 0.75rem',
  fontSize: '0.75rem',
  width: '100%',
  maxWidth: '8rem',
  textAlign: 'center'
};

// Step 6-1: Setup the TimeDisplay component as a class rather than functional since we will be utilizing the life cycle
// methods as well as keeping state within this component
export class TimeDisplay extends React.Component {

  // Step 6-2: variable to hold the setInterval timer created
  timer;
  // Step 6-2: time between the times setInterval will trigger
  timeInterval = 1000;

  constructor(props) {
    super(props);

    // Step 6-1: Create a state that displays the current time
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  // Step 6-2: method to create the setInterval timer and call the function "updateTime" every 1000ms
  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.updateTime();
      }, this.timeInterval);
    }
  }

  // Step 6-2: stop and clear out the setInterval timer
  stopTimer() {
    if (!!this.timer) {
      clearInterval(this.timer);
    }
  }

  // Step 6-2: method to update the time and state
  updateTime() {
    const time = new Date().toLocaleTimeString();
    this.setState({time});
  }

  // Step 6-1: Because we're using a class component, we need to call the "render" method and return HTML elements
  render() {
    return (
      // Step 6-1: Utilize the style object we declared at the top of this file
      <div style={styles}>
        {/* Step 6-1: Display the time in it's current state */}
        {this.state.time}
      </div>
    );
  }
}
