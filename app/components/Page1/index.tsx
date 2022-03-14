import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/index';

import { moneyCourceRequest } from '../../ducks/page1/actions';

function Page1() {
    
    return (<div>
        <div>Page1</div>
        <div><Button>Запрос</Button></div>
    </div>)
}


export default Page1