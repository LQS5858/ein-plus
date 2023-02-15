import { debounce } from '../../src/utils/common'
function setSize () {
  let size = 'pc'
  const excuteSize = debounce(() => {
    const screenSize = document.body.clientWidth
    const ua = navigator.userAgent?.toLowerCase()
    if (/ipad/.test(ua) || (screenSize < 880 && screenSize >= 775)) {
      size = 'ipad'
    } else if (screenSize < 775) {
      size = 'h5'
    } else if (screenSize < 1400) {
      try {
        size = 'notebook'
      } catch (error) {
        console.error(error);
      }
    } else {
      size = 'pc'
    }
  }, 500)
  excuteSize()
  window.addEventListener('resize', excuteSize)
  return size
}


export default setSize()
