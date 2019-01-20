import React from 'react';

import StandardButton from '../partials/StandardButton';
import ConfirmIcon from '../../icons/built/ConfirmIcon';

export default props => <StandardButton left className="button-confirm" {...props} Icon={ConfirmIcon}/>;