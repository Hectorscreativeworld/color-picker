import React, { Component } from 'react'

class App extends Component {
  HueSlider = event => {
    console.log(event.target.value)
  }
  SatSlider = event => {
    console.log(event.target.value)
  }
  LightSlider = event => {
    console.log(event.target.value)
  }
  render() {
    return (
      <>
        <h1 class="MainTitle">Cool Color Picker</h1>
        <main class="MainContainer">
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
            <label for="cowbell" />
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
            <label for="cowbell" />
          </div>
        </main>
      </>
    )
  }
}

export default App
