import React from 'react';
import Classes from './App.module.css';
import TopBar from './components/topbar/topbar';
import Editor from './components/editor/editor';
import Output from './components/output/output';

const html = `<!DOCTYPE html>
<html>
    
    <head>
        <title>Page Title</title>
    </head>
    
    <body>
        
        <h1>This is a Heading</h1>
        <h2>Hello, I am Tarang</h2>
        <p>This is a paragraph.</p>
        <p>Edit the code in the window to the left, and click "Run" to view the result.</p>
        <img src="https://www.w3schools.com/tryit/avatar.png" alt="Avatar" style="width:200px">
        
        <br/>
        <br/>
        <br/>
        
        <hr/>
        
    </body>
    
</html>


`;

const css = `body {
  background-color: black;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

h1{
    background-color: red;
    color: black;
}



`

const js = `console.log("hello");
let hr = document.querySelector('hr');

hr.style.border = '1px solid red';




`


function App() {
  const [currEditor, setCurrEditor] = React.useState("html");
  const [theme, setTheme] = React.useState('monokai');
  const [htmlData, setHtml] = React.useState(localStorage.getItem('html') || html || '');
  const [cssData, setCss] = React.useState(localStorage.getItem('css') || css || "");
  const [jsData, setJs] = React.useState(localStorage.getItem("javascript") || js || "");

  const [data, setData] = React.useState("");

  const [outputHtml, setOutputHtml] = React.useState(localStorage.getItem('html') || html);

  let runCode = () => {
    setOutputHtml(htmlData + `<style>${cssData}</style>` + `<script>${jsData}</script>`);
  }

  React.useEffect(() => {
    runCode();
  }, [])

  React.useEffect(() => {
    switch (currEditor) {
      case 'html':
        setData(htmlData);
        break;
      case 'css':
        setData(cssData);
        break;
      case 'javascript':
        setData(jsData);
        break;
      default:
        break;
    }
  }, [currEditor, htmlData, cssData, jsData])

  let onChangeData = (change) => {
    switch (currEditor) {
      case 'html':
        setHtml(change);
        localStorage.setItem('html', change);
        setData(change);
        break;
      case 'css':
        setCss(change);
        localStorage.setItem('css', change);
        setData(change);
        break;
      case 'javascript':
        setJs(change);
        localStorage.setItem('javascript', change);
        setData(change);
        break;
      default:
        break
    }
  }

  let changeTheme = (e) => {
    setTheme(e.target.value);
  }


  return (
    <div className={Classes.App}>
      <div className={Classes.dashboard}>
        <TopBar
          theme={theme}
          changeTheme={changeTheme}
          currEditor={currEditor}
          setCurrEditor={setCurrEditor}
          runCode={runCode} />
        <Editor
          theme={theme}
          currEditor={currEditor}
          data={data}
          onChangeData={onChangeData}
        />
      </div>
      <div className={Classes.output}>
        <Output html={outputHtml} />
      </div>
    </div>
  );
}

export default App;
