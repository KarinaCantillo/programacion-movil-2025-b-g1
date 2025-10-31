// Home.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonText,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>MiBanco</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-text-center">
        <IonText color="dark">
          <h2>Bienvenido, Karina</h2>
          <p>Tu saldo disponible:</p>
        </IonText>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>$2.450.000</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Saldo actualizado al día de hoy.</IonCardContent>
        </IonCard>

        <IonButton expand="block" color="success" onClick={() => history.push('/transfer')}>
          Realizar transferencia
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
