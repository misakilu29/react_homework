import { useState, useEffect } from 'react'
import AgeComputer from '../components/AgeComputer'

function Age(props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const spinner = (
    <>
      <div
        className="spinner-grow text-primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-secondary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-success"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  const display = (
    <>
      <AgeComputer />
    </>
  )

  return (
    <>
      <h1>年齡判斷</h1>
      {isLoading ? spinner : display}
    </>
  )
}

export default Age
