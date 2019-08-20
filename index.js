import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './Menu';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      manu: [
        {
          title: 'Github',
          href: 'https://github.com/alexup71rus',
        },
        {
          title: 'StackBlitz',
          href: 'https://stackblitz.com/@alexup71rus',
        },
        {
          title: 'CodePen',
          href: 'https://codepen.io/5ubjpogqdv6dcjz/',
        },
        {
          title: 'YouTube',
          href: 'https://www.youtube.com/channel/UC9TnazUh1CaQZWrpSf33XZA',
        },
        {
          title: 'Kwork',
          href: 'https://kwork.ru/user/alexup71rus',
        },
        {
          title: 'Telegram',
          href: 'tg://resolve?domain=alexup71rus',
        },
        {
          title: 'Email',
          href: 'mailto:admin@khodyr.ru',
        },
      ]
    };
  }

  render() {
    return (
      <div className="section">
        <nav className="navigation">
          <Menu items={this.state.manu} />
        </nav>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
