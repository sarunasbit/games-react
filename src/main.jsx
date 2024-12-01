import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import 'bootstrap/dist/css/bootstrap.css'
import { AppProvider } from './context';
import { BrowserRouter as Router} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </StrictMode>,
)
