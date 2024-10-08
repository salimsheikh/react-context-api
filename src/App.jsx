
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './index.css';

function App() {
  return (
    <UserContextProvider>
      <div className='container'>
        <h1>React with Context API</h1>
        <Profile />
        <Login />
      </div>
    </UserContextProvider>
  )
}

export default App
