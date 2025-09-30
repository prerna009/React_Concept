import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
