import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import React from 'react';
import './Login.css'; // ¡Necesitas crear este archivo CSS!

import { Register } from './Register';

export const Login: React.FC = () => {
    // Usamos useIonRouter para manejar la navegación en Ionic React
    const router = useIonRouter();

    // Función para navegar a la pantalla de Registro
    const goToRegister = () => {
        // Navega a la ruta "/register" que definiremos en App.tsx
        router.push('./Register'); 
    };

    return (
        // Usamos IonPage e IonContent porque este componente actúa como una "página" completa
        <IonPage className="login-page-container">
            <IonContent fullscreen>
                
                {/* Las formas azules se manejan con CSS en Login.css */}
                <div className="top-curve"></div>
                <div className="bottom-curve"></div>
                
                <div className="login-content">
                    {/* Contenedor del Logo y Texto */}
                    <div className="logo-text-container">
                        
                        {/* El texto del logo (Recetas Colombianas) */}
                        <div className="logo-text">
                            <span className="logo-main">Recetas</span>
                            <span className="logo-sub">Colombianas</span>
                        </div>
                        
                        {/* Imagen de la Arepa (Asegúrate de que la ruta sea correcta) */}
                        <img 
                            src="/assets/img/arepa.png" // Revisa esta ruta en tu proyecto
                            alt="Arepa colombiana" 
                            className="arepa-img" 
                        />
                    </div>

                    {/* Botón de Inicio de Sesión */}
                    <IonButton 
                        expand="block" 
                        className="login-button" 
                        onClick={goToRegister} // <--- ¡AQUÍ ESTÁ LA NAVEGACIÓN!
                    >
                        Iniciar sesión
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};