
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.tsx'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>   {/* Redux ın tüm projede aktif olabilmesi içim provider ile sardım */}
    <App />
  </Provider>
)
