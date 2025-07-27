
import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [React.createElement(
            'h1',
            { key: 'key1' },
            'I am h1'), React.createElement(
                'h2',
                { key: 'key2' },
                'I am h2')])
);
const rootElement = createRoot(document.getElementById('root'));
rootElement.render(parent)