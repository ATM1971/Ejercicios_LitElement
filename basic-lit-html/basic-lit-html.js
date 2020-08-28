import { html, render } from 'lit-html';

const myTemplate = name =>
  html`
    <p>
      Hello, ${name}
    </p>
  `;

render(myTemplate('lit-html'), document.body);