import EinThrottleButton from './index.jsx'

EinThrottleButton.install = app => {
  app.component(EinThrottleButton.name, EinThrottleButton)
}

export default EinThrottleButton