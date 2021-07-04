import "./App.css";
import 'semantic-ui-css/semantic.min.css'//dashboardda kullanmak için ben ekledim
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { Route } from 'react-router-dom';

function App() {
  return (
    // mini router dersi : Route icine hangi componenti verirseniz onu return ediyor
    // path="" kismi location belirtiyor /dashboard verirsem /dashboard a gidip orada cagirir bu sayfayi
    // path="/" bu home path diye geciyor ana sayfa bildimigz
// SORUN : dashboard icinde router calistimisz bu oyle olmamali
// Route componenti sadece app icinde paths belirler
// Eger bu component icinde baska bir component render etmeniz gerekirse
// direkt cagirip ekleyebilirsnz
// burayi daha fazla toparlayabilirm ama dokunmycm ders akisi ve kod akisi cok bozulmasn

    <div className="App">
      <Route path='/'>
     <Navi/>
      <Container className="main">
          <Dashboard />
      </Container>
      </Route>
    </div>
  );
}


export default App;
