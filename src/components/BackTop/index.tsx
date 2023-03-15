import './index.less'
import { useAppSelector } from 'store/hooks'

export default function BackTop() {
  const isShow = useAppSelector((state) => state.backTop.isShow)

  // 返回顶部
  const backTop = () => {
    let scrollTop, speed
    const timer = setInterval(() => {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 实现一个先快后慢的效果
      speed = Math.floor(scrollTop / 10)
      document.documentElement.scrollTop = scrollTop - speed
      if (speed === 0) {
        clearInterval(timer)
        return
      }
    }, 16)
  }
  return (
    <>
      {
        isShow
          ? <div className='back-top' onClick={() => backTop()}>
            <div>
              <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6579" width="28" height="28"><path d="M868 545.5L536.1 163c-12.7-14.7-35.5-14.7-48.3 0L156 545.5c-4.5 5.2-0.8 13.2 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" p-id="6580" fill="#ffffff"></path></svg>
            </div>
          </div>
          : ""
      }
    </>
  )
}
