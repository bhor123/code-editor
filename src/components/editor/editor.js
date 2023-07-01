import React from 'react';
import AceEditor from "react-ace";
import Classes from "./editor.module.css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import clsx from 'clsx';

function Editor({ currEditor, data, onChangeData, theme }) {
    return (
        <div className={Classes.editor}>
            {currEditor === 'html' &&
                <AceEditor
                    className={clsx(currEditor !== 'html' && Classes.hide)}
                    mode={currEditor}
                    theme={theme}
                    onChange={onChangeData}
                    name="UNIQUE_ID_OF_DIV1"
                    editorProps={{ $blockScrolling: true }}
                    height="100%"
                    width="100%"
                    showPrintMargin={false}
                    fontSize={18}
                    value={data}
                    minLines={15}
                />
            }
            {
                currEditor === 'css' &&
                <AceEditor
                    className={clsx(currEditor !== 'css' && Classes.hide)}
                    mode={currEditor}
                    theme={theme}
                    onChange={onChangeData}
                    name="UNIQUE_ID_OF_DIV2"
                    editorProps={{ $blockScrolling: true }}
                    height="100%"
                    width="100%"
                    showPrintMargin={false}
                    fontSize={18}
                    value={data}
                    minLines={15}
                />
            }
            {
                currEditor === 'javascript' &&
                <AceEditor
                    className={clsx(currEditor !== 'javascript' && Classes.hide)}
                    mode={currEditor}
                    theme={theme}
                    onChange={onChangeData}
                    name="UNIQUE_ID_OF_DIV3"
                    editorProps={{ $blockScrolling: true }}
                    height="100%"
                    width="100%"
                    showPrintMargin={false}
                    fontSize={18}
                    value={data}
                    minLines={15}
                />
            }
        </div>
    );
}

export default Editor;
