/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@material/mwc-button';

@customElement('my-button')
export class MyButton extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  @property({type: String})
  label = 'Button';
  override render() {
    return html`<mwc-button outlined label="${this.label}"></mwc-button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
