


export default {
  validate (el, binding) {
    const { instance } = binding || {}
    console.log('el', el.parentNode);
    el?.parentNode?.addEventListener('click', () => {
    })
  }
}