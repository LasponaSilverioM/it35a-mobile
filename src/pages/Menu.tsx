import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonItem, IonIcon, IonMenuToggle, IonButton } from '@ionic/react';
import { homeOutline, logOutOutline } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Menu: React.FC = () =>{

  const path = [
    {name: 'Home', url: '/app/home', icon: homeOutline},
    {name: 'About', url: '/app/about', icon: homeOutline}
  ]

  return(
    <IonPage>
      <IonSplitPane contentId="main">

        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar> 
              <IonTitle>
                Menu
              </IonTitle>
            </IonToolbar>                    
          </IonHeader>

          <IonContent>
            {path.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start"></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonButton routerLink="/" routerDirection="back" expand="full">
              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              Logout
            </IonButton>

          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          {/* FIXED: lowercase "home" */}
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app/about" component={About} />

          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );

};

export default Menu;