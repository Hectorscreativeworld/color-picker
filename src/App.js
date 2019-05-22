import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 125,
    Sat: 125,
    Light: 50
  }
  HueSlider = event => {
    console.log(event.target.value)
    this.setState({
      hue: event.target.value
    })
  }
  SatSlider = event => {
    console.log(event.target.value)
    this.setState({
      Sat: event.target.value
    })
  }
  LightSlider = event => {
    console.log(event.target.value)
    this.setState({
      Light: event.target.value
    })
  }
  render() {
    return (
      <>
        <h1 class="MainTitle">Cool Color Picker</h1>
        <main
          class="MainContainer"
          style={{
            backgroundColor: `hsl(${this.state.hue}, ${this.state.Sat}%, ${
              this.state.Light
            }%)`
          }}
        >
          <h2>Hue</h2>

          <div>
            <input
              className="HueSlider"
              type="range"
              id="start"
              name="volume"
              min="0"
              max="255"
              onChange={this.HueSlider}
            />
            <label for="volume" />
          </div>
          <h2>Saturation</h2>
          <div>
            <input
              className="HueSlider"
              type="range"
              id="start"
              name="volume"
              min="0"
              max="255"
              onChange={this.SatSlider}
            />
          </div>

          <h2>Lightness</h2>
          <div>
            <input
              className="HueSlider"
              type="range"
              id="start"
              name="volume"
              min="0"
              max="100"
              onChange={this.LightSlider}
            />
          </div>
        </main>
      </>
    )
  }
}

export default App
