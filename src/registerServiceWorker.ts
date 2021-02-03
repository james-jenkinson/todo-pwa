export const register = (): void => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  } else {
    console.log('service workers not supported')
  }
}
