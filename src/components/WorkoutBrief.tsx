import { IonAvatar } from '@ionic/react';
import './WorkoutBrief.css';

const WorkoutBrief: React.FC = () => {
  let muscleGroups = [0,0,0,0,"edit"];

  return (
    <div>
      <h1>Push Workout</h1>
      <div className="muscle-groups">
        {
          muscleGroups.map(() => 
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          )
        }
      </div>
    </div>
  );
}

export default WorkoutBrief;