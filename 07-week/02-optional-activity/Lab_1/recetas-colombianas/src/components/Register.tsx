import React from 'react';
// Importamos los componentes clave de Ionic para la estructura de la página
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './Register.css';

// Usamos 'export const' ya que esta es una exportación nombrada, como en tu App.tsx
export const Register: React.FC = () => {
  return (
    // 1. Contenedor principal de la página
    <IonPage>
      
      {/* 2. Barra Superior (Header) */}
      <IonHeader>
        <IonToolbar>
          {/* Botones de acción, colocados al inicio de la barra */}
          <IonButtons slot="start">
            {/* Botón para volver. 
              Ionic maneja el historial, y si no hay historial previo, 
              redirige a '/login' (que definimos como la página principal) 
            */}
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Registro de Nueva Cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* 3. Área de Contenido deslizable */}
      <IonContent fullscreen>
        
        {/* Tu div con el diseño personalizado, ahora dentro del IonContent */}
        {/* Usamos ion-padding para asegurar que haya espacio en la parte superior/inferior si es necesario */}
        <div className="register-container">
          
          <h2 className="register-title">Completa tus datos</h2> 
          
          <input className="register-input" type="text" placeholder="Nombre y apellidos" />
          <input className="register-input" type="tel" placeholder="Teléfono" />
          <input className="register-input" type="email" placeholder="Correo" />
          <input className="register-input" type="password" placeholder="Contraseña" />
          
          <button className="register-button">Registrar</button>
          
          {/* El div con la flecha de regreso (←) ya no es necesario porque usamos IonBackButton */}
        </div>
      </IonContent>
    </IonPage>
  );
};
