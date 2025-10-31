import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Transfer: React.FC = () => {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({ cuenta: '', monto: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.cuenta && formData.monto) setShowAlert(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Transferencia</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número de cuenta destino</IonLabel>
          <IonInput
            name="cuenta"
            type="text"
            value={formData.cuenta}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Monto a transferir</IonLabel>
          <IonInput
            name="monto"
            type="number"
            value={formData.monto}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleSubmit}>
          Enviar
        </IonButton>

        <IonButton
          expand="block"
          fill="outline"
          color="medium"
          className="ion-margin-top"
          onClick={() => history.push('/home')}
        >
          Volver al inicio
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Transferencia exitosa"
          message={`Se enviaron $${formData.monto} a la cuenta ${formData.cuenta}.`}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Transfer;
