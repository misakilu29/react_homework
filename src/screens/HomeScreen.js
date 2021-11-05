// import React, { useState, useEffect } from 'react'

// import data from './data'
// import Product from '../components/Product'

// export default function HomeScreen() {
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     const fetchData = async () =>{
//       const { data } = await axios.get('/api/products')
//       setProducts(data)
//     }
//     fetchData()
//   }, [])
//   return (
//     <div className="row center">
//       {products.map((product) => (
//         <div key={product._id} className="card">
//           <Product
//             key={product._id}
//             product={product}
//           ></Product>
//         </div>
//       ))}
//     </div>
//   )
// }
