export function throttle (fn, delay) {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      timer = clearTimeout(timer)
    }, delay);
    fn.apply(this, arguments)
  }
}

export function debounce (fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = clearTimeout(timer)
    }, delay);
  }
}

export const setMinWidth = () => {
  let isSetMinWidth = import.meta.env.VITE_APP_SET_MINWIDTH
  const dom = document.getElementById('app')
  if (!dom) return
  if (String(isSetMinWidth) === '0') return
  dom.style.minWidth = "1200px";
}
/**
 * @description 移除最小宽度
 * @returns
 */
export function removeMinWidth () {
  const dom = document.getElementById('app')
  if (!dom) return
  dom?.removeAttribute('style')
}


export const optionalChaining = (obj, ...rest) => {
  let tmp = obj
  for (let i of rest) {
    tmp = tmp?.[i]
  }
  return tmp ?? ''
}