import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import { chevronForward, ellipsisHorizontal } from 'ionicons/icons';
import StartWorkoutButton from '../components/StartWorkout';
import WorkoutBrief from '../components/WorkoutBrief';
import './Workout.css';

const Workout: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios" className="toolbar">
          <IonButton className="new" slot="start" fill="clear">+NEW</IonButton>
          <IonButton className="your-gym-btn" expand="block">
            YOUR GYM
            <IonIcon className="chevron" icon={chevronForward}></IonIcon>
          </IonButton>
          <IonButton className="ellipsis" slot="end" fill="clear">
            <IonIcon icon={ellipsisHorizontal}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WorkoutBrief />
        <div className="start-workout-button">
          <StartWorkoutButton />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Workout;
