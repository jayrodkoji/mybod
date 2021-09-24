import { IonButton, IonIcon } from '@ionic/react';
import { playCircle } from 'ionicons/icons';
import './StartWorkout.css';

const StartWorkoutButton: React.FC = () => {
  return (
    <IonButton className="start-button">
      <IonIcon slot="start" icon={playCircle} />
      Start Workout
    </IonButton>
  );
}

export default StartWorkoutButton;