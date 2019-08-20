import React from 'react';

export default ({ items }) => <ul>
  {
    items.map(item => {
      return <li><a href={item.href}>{item.title}</a></li>
    })
  }
</ul>;
