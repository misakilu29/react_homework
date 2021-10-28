import React from 'react'

const Content = ({ list }) => (
  <div>
    {list.map((item) => {
      return <div>{item}</div>
    })}
  </div>
)

export default Content
