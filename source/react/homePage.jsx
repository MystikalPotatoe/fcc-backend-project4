import React from 'react';
import { renderToString } from 'react-dom/server';
import Heading from './heading';

export default function myRender() {
    return renderToString(<Heading name='Home'/>);
}
