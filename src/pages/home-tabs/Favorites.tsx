import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Favorites: React.FC = () => {
   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton>
                    </IonMenuButton>               
                <IonTitle>Favorite</IonTitle>
           </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
            <h1>Favorites</h1>
        </IonContent>
    </IonPage>

   );

}

export default Favorites;