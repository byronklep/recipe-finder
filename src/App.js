import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} />
    </Router>
  )
}

export default App
