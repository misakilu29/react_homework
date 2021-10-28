import { useState } from 'react'
import '../menu.css'

function Nav() {
  // -1代表一開始沒有被按的項目
  const [activeIndex, setActiveIndex] = useState(-1)

  const menuItems = ['貓貓', '狗狗', '其他']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              className={i === activeIndex ? 'active' : ''}
              onClick={() => {
                setActiveIndex(i)
              }}
            >
              {v}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Nav
