import React, { useState } from 'react'

function Summary(props) {
  const { productCount, total } = props
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <section id="selectedOption">
          <h5>選擇運費</h5>
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value)
            }}
          >
            {/* 第一個是state的初始值 */}
            <option value="">請選擇</option>
            <option value="200">郵局 $+200</option>
            <option value="250">快遞 $+250</option>
          </select>
        </section>
        <div className="row">
          <div className="col col-style">
            共 {productCount} 項目
          </div>
        </div>

        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">
            ${total + selectedOption * 1}
          </div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}

export default Summary
