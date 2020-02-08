import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jn-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
