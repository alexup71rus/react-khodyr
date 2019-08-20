import React from 'react';

export default ({ items }) => <ul>
  {
    items.map((item, i) => {
      return <li key={i}><a href={item.href}>{item.title}</a></li>
    })
  }
</ul>;
