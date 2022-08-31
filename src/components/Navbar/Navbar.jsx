import React from 'react';
import { Tooltip } from 'flowbite-react';
import './Navbar.scss';
import ResetButton from '../ResetButton/ResetButton';
import FetchButton from '../FetchButton/FetchButton';
import ShareButton from '../ShareButton/ShareButton';
import HistoryButton from '../HistoryButton/HistoryButton';

export default function Navbar() {
  const toolTipStyle = {
    maxWidth: 300,
    color: 'white' 
  };

  return (
    <div className='istex-footer text-istcolor-green-light'>
      <div className='pt-3 pb-1 flex justify-center'>
        <Tooltip 
         content={(
            <div style={ toolTipStyle }>
              Effacez tout pour redémarrer avec un formulaire vide
            </div>
          )}
        >
          <ResetButton />
        </Tooltip>
        <Tooltip 
          content={(
            <div style={ toolTipStyle }>
              Récupérez l'état en cours de votre formulaire
            </div>
          )}
        >
          <FetchButton />
        </Tooltip>
        <Tooltip
          content={(
            <div style={ toolTipStyle }>
              Activez cette fonctionnalité en complétant le formulaire et partagez votre corpus avant de le télécharger
            </div>
          )}
        >
          <ShareButton />
        </Tooltip>
        <Tooltip 
         content={(
            <div style={ toolTipStyle }>
              Accédez à l'historique de vos 30 derniers téléchargements
            </div>
          )}
        >
          <HistoryButton />
        </Tooltip>
      </div>
    </div>
  );
}
