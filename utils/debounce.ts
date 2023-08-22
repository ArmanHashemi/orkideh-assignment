// this function prevent request when user typing
export function debounce (func: Function, delay: number) {
  let timeoutID: number | null = null
  return function (...args: any[]) {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
