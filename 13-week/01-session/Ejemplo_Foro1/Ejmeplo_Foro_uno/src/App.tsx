import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import AccesibilidadUX from './pages/ValidacionUX';

/* Ionic core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Custom Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Ruta principal muestra la página AccesibilidadUX */}
        <Route exact path="/ValidacionUX" component={AccesibilidadUX} />
        {/* Redirige la raíz "/" hacia ValidacionUX */}
        <Redirect exact from="/" to="/ValidacionUX" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
