import React from "react";
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
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonIcon,
} from "@ionic/react";
import {
  accessibilityOutline,
  colorPaletteOutline,
  eyeOutline,
  heartOutline,
} from "ionicons/icons";
import { motion } from "framer-motion";

const AccesibilidadUX: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>Accesibilidad en UX</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Accesibilidad en Aplicaciones Móviles</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                La accesibilidad en el desarrollo de aplicaciones móviles es un
                principio esencial para garantizar la inclusión digital y
                ofrecer experiencias equitativas a todos los usuarios,
                independientemente de sus capacidades físicas, sensoriales o
                cognitivas.
              </p>
              <p className="ion-margin-top">
                Según <strong>Aguayo (2025)</strong>, aplicar buenas prácticas
                de accesibilidad no debe verse como un requisito técnico
                aislado, sino como una responsabilidad ética y estratégica dentro
                del diseño centrado en el usuario.
              </p>
            </IonCardContent>
          </IonCard>

          <IonList>
            <IonItem lines="none">
              <IonIcon icon={accessibilityOutline} slot="start" color="primary" />
              <IonLabel>Uso de semántica y atributos ARIA.</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon icon={colorPaletteOutline} slot="start" color="warning" />
              <IonLabel>Contraste correcto y navegación por teclado.</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon icon={eyeOutline} slot="start" color="success" />
              <IonLabel>Pruebas de accesibilidad continuas.</IonLabel>
            </IonItem>
          </IonList>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>💭 Reflexión</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Considero que la accesibilidad debe ser un pilar desde las
                primeras fases del diseño y desarrollo. Muchas veces los equipos
                priorizan el aspecto visual sobre la funcionalidad inclusiva, sin
                comprender que un diseño verdaderamente exitoso es aquel que
                puede ser utilizado por todos.
              </p>
              <p className="ion-margin-top">
                En mi caso, al desarrollar una aplicación móvil en Ionic React,
                comprendí que pequeños detalles —como agregar descripciones a
                los íconos, respetar el contraste de color y permitir la
                navegación con teclado o lector de pantalla— hacen una gran
                diferencia.
              </p>
              <p className="ion-margin-top">
                La accesibilidad, más que un estándar técnico, es una forma de
                empatía digital. Nos recuerda que detrás de cada pantalla hay
                personas diversas, con diferentes formas de interactuar con la
                tecnología.
              </p>
              <IonChip color="tertiary" className="ion-margin-top">
                <IonIcon icon={heartOutline} />
                <IonLabel className="ion-margin-start">
                  Empatía digital e inclusión
                </IonLabel>
              </IonChip>
            </IonCardContent>
          </IonCard>
        </motion.div>
      </IonContent>
    </IonPage>
  );
};

export default AccesibilidadUX;
