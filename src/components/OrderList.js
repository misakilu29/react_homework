import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  // counts -> 陣列
  const { productsInOrder, setProductsInOrder } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {productsInOrder.map((product, i) => {
          return (
            <ProductItem
              key={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              price={product.price}
              count={product.count}
              remove={() => {
                const newProduct = [
                  ...productsInOrder,
                ].filter((v, i) => {
                  return v.id !== product.id
                })
                setProductsInOrder(newProduct)
              }}
              setCount={(newCount) => {
                //react 是陣列 或是 狀態時候 三步驟處理如下：
                //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
                //今天要改變狀態一定要透過setState 並新開陣列 講義virtual dom
                const newProductsInOrder = [
                  ...productsInOrder,
                ]

                //2. 運算處理：更新陣列中對應商品數量
                // 更新陣列中本商品索引值，如果小於1以1來更新
                newProductsInOrder[i].count =
                  newCount < 1 ? 1 : newCount

                //3. 設定回原本的狀態
                setProductsInOrder(newProductsInOrder)
              }}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
