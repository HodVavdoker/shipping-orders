import classes from './BuildControls.module.css';
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label :  'זיתים', type :'זיתים' ,},
    {label :  'תירס', type :'תירס' ,},
    {label :  'פטריות', type : 'פטריות',},
    {label :  'בצל', type : 'בצל',},
    {label :  'עגבניה', type : 'עגבניה',},
    {label :  'פלפל', type : 'פלפל',},
    {label :  'בולגרית', type : 'בולגרית',},

];

const buildControls = (props) =>(

    <div className = {classes.BuildControls}>
            {controls.map(ctrl =>(
            <BuildControl key = {ctrl.label}
                          label = {ctrl.label}
                         />))}
    </div>
);
export default buildControls;