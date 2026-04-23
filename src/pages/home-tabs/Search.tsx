import { IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import {  useState} from 'react';

const Search: React.FC = () => {

const data =  [

'ariel',
'achas',
'diether',
'banban',
'yanyan',
'aldrinn',
];
let [results, setResults] = useState([...data]);
const handleInput = (event: Event)=>{
let query = '';

const target = event.target as HTMLIonSearchbarElement;
if (target) query = target.value!.toLowerCase();
setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));

};

   return(
    <IonPage>
        <IonHeader>             
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Search</IonTitle>
            </IonToolbar>

        <IonSearchbar debounce={1000} onIonInput={(event) => handleInput(event)}>
        </IonSearchbar>
        </IonHeader>
        <IonContent className="ion-padding" >
{results.map((result) => (
  <IonItem>{result}</IonItem>

))}

        </IonContent>
    </IonPage>

   );

}

export default Search;