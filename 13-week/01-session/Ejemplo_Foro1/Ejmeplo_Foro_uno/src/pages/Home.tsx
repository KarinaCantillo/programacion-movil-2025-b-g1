import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonButton,
  IonAlert,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a MiApp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-text-center">
        <IonText color="dark">
          <h2>Diseñada para una experiencia simple y accesible</h2>
        </IonText>

        <IonButton
          expand="block"
          color="primary"
          className="ion-margin-top"
          onClick={() => setShowAlert(true)}
          aria-label="Botón de acción principal"
          aria-description="Presiona para realizar una acción"
        >
          Presionar
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="✅ Acción realizada"
          message="Gracias por interactuar con la app"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;

