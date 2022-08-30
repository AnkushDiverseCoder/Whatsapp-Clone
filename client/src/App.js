import './App.css';
//components
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './components/context/AccountProvider';

function App() {

  const clientId = '910246011165-fij6if97lbuthbg1jocnvs7501n0lu5g.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;
