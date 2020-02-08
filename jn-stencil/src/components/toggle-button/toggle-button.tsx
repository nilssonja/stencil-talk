import { Component, Prop, State, h, getMode } from "@stencil/core";

/**
 * A simple toggle button component. Themable for Material and Lightning.
 */
@Component({
  tag: 'jn-toggle-button',
  styleUrls: {
    bootstrap: './themes/bootstrap.css',
    bonbon: './themes/bonbon.css'
  }
})
export class ToggleButton {

  /* Sets button to toggled state on first render */
  @Prop() defaultToggled: boolean = false;

  /* Tracks wether the button is pressed */
  @State() pressed: boolean = false;

  render() {
    return (
      <button
        class="button button-primary blue morph"
        aria-pressed={this.pressed.toString()}
        onClick={() => this.pressed = !this.pressed}
      >

        {this.pressed ? 'ON' : 'OFF'}
      </button>
    )
  }
}