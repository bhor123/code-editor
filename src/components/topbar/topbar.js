import React from 'react';
import Classes from './topbar.module.css';
import clsx from 'clsx';

function TopBar({ currEditor, setCurrEditor, runCode, changeTheme, theme}) {
    return (
        <>
            <ul className={Classes.tabs}>

                <li
                    className={clsx(Classes.html, (currEditor === 'html' && Classes.active))}
                    onClick={() => { setCurrEditor("html") }}>
                    Html
                </li>

                <li
                    className={clsx(Classes.html, (currEditor === 'css' && Classes.active))}
                    onClick={() => { setCurrEditor("css") }}>
                    Css
                </li>

                <li
                    className={clsx(Classes.html, (currEditor === 'javascript' && Classes.active))}
                    onClick={() => { setCurrEditor("javascript") }}>
                    Javascript
                </li>
                <span className={Classes.right}>
                    <select value={theme} className={Classes.select} onChange={changeTheme}>
                        <option value="monokai">Dark</option>
                        <option value="xcode">Light</option>
                    </select>
                    <button className={Classes.run} onClick={() => runCode()}>Run</button>
                </span>
            </ul>

        </>
    )
}

export default TopBar;