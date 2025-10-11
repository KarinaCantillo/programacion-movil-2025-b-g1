import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// 1. IMPORTAR TUS COMPONENTES DESDE LA CARPETA 'components'
import { Login } from './components/Login';       // Tu nueva pantalla de inicio/landing
import { Register } from './components/Register'; // Tu pantalla de registro

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// ... (resto de tus imports de CSS) ...

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        
        {/* RUTA 1: LOGIN (Esta es la nueva pantalla de inicio) */}
        <Route exact path="/login">
          <Login />
        </Route>
        
        {/* RUTA 2: REGISTRO (Pantalla a la que navegas desde el botón) */}
        <Route exact path="/register">
          <Register />
        </Route>

        {/* RUTA 3: HOME (Tu página existente) */}
        <Route exact path="/home">
          <Home />
        </Route>

        {/* RUTA POR DEFECTO: REDIRECCIÓN */}
        {/* Redirigimos la ruta raíz "/" a nuestra nueva pantalla de Login */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;