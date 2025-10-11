import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';
import { Layout } from '../layouts/layout';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

const Home: React.FC = () => {
 
return <Layout>
<Login/>
</Layout>
 
};

export default Home;
