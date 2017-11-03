'use strict';
import React from 'react';

export default function heading(props) {
    const outputStyles = {
        color: 'blue',
        backgroundColor: 'orange',
    };

    return (
        <h1 style={outputStyles}>Image Abstraction Layer App - {props.name}</h1>
    );
}
