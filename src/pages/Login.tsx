import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons, useIonRouter, IonIcon } from "@ionic/react";
import { logoGoogle, options } from "ionicons/icons";
import { Redirect } from "react-router";
import { supabase } from '../lib/supabaseClient'

const Login: React.FC = () => {
 const navigation = useIonRouter();

      const doLogin = () => {
    navigation.push('/app', 'forward', 'replace')
 }


 const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${window.location.origin}/app`
        }
    })

    
 }
 return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
             <IonTitle>Login </IonTitle>
         </IonToolbar>
        </IonHeader>
         <IonContent fullscreen >
            <IonButton onClick={signInWithGoogle} expand= "full" fill="outline" shape= "round">
                <IonIcon icon = {logoGoogle}/>
                Continue via Google
            </IonButton>
            </IonContent>
    </IonPage>

   );

}   

export default Login;