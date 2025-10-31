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
  const [alertMessage, setAlertMessage] = useState("");

  const handleFeedback = (type: string) => {
    if (type === "buena") {
      setAlertMessage("¡Nos alegra saber que tu experiencia fue positiva!  Gracias por tu tiempo.");
    } else if (type === "regular") {
      setAlertMessage("Gracias por tu opinión. Seguiremos mejorando para ofrecerte una mejor experiencia. ");
    } else {
      setAlertMessage("Lamentamos los inconvenientes. Tus comentarios nos ayudan a mejorar.");
    }
    setShowAlert(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Validación de UX</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-text-center">
        <IonText color="dark">
          <h2>Queremos saber cómo fue tu experiencia en esta app</h2>
          <p>Tu opinión nos ayuda a mejorar continuamente la usabilidad y accesibilidad.</p>
        </IonText>

        <div style={{ marginTop: '30px' }}>
          <IonButton expand="block" color="success" onClick={() => handleFeedback("buena")}>
            😊 Buena experiencia
          </IonButton>

          <IonButton expand="block" color="warning" onClick={() => handleFeedback("regular")}>
            😐 Regular
          </IonButton>

          <IonButton expand="block" color="danger" onClick={() => handleFeedback("mala")}>
            😞 Mala experiencia
          </IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Gracias por tu retroalimentación"
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
