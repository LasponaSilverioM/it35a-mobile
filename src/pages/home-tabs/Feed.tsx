import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Feed: React.FC = () => {
   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton>

                    </IonMenuButton>
                </IonButtons>
                <IonTitle>Feed </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
            <h1>Feed</h1>
        </IonContent>
    </IonPage>

   );

}

export default Feed;