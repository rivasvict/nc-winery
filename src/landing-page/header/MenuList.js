import React from 'react';
import './MenuList.scss'

const menu = [
  {
    name: 'Home',
    url: '#'
  },
  {
    name: 'Visit us',
    url: '#'
  },
  {
    name: 'Our wine',
    url: '#'
  },
  {
    name: 'About us',
    url: '#'
  },
  {
    name: 'Certifications',
    url: '#'
  },
  {
    name: 'Contact',
    url: '#'
  },
]

function MenuList() {
const menuDom = menu.map((menuItem) => <a href={menuItem.url}><li>{menuItem.name}</li></a>)
  return (
    <div className='menu-list'>
      <ul>
        {menuDom}
      </ul>
    </div>
  )
}

export default MenuList;