import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/typography.css';
import { barbell, calendar, heartHalf } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Workout from './pages/Workout';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp className="app">
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/workout">
            <Workout />
          </Route>
          <Route exact path="/recovery">
            <Tab2 />
          </Route>
          <Route path="/log">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/workout" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className="tab-bar" slot="bottom">
          <IonTabButton tab="workout" href="/workout">
            <IonIcon icon={barbell} />
            <IonLabel className="ion-label">WORKOUT</IonLabel>
          </IonTabButton>
          <IonTabButton tab="recovery" href="/recovery">
            <IonIcon icon={heartHalf} />
            <IonLabel className="ion-label">RECOVERY</IonLabel>
          </IonTabButton>
          <IonTabButton tab="log" href="log">
            <IonIcon icon={calendar} />
            <IonLabel className="ion-label">LOG</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
