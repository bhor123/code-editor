import React from 'react';
// import Classes from "./editor.module.css";

function Output({ html }) {

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <iframe
                id="Iframe"
                title="Output"
                style={{ width: '100%', height: '100%' }}
                srcDoc={html}
                frameBorder="0">
            </iframe>
        </div>
    );
}

export default Output;
