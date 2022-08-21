import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

const Editor = ({ displayName, value, language, onChange }) => {

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen(prevOpen => !prevOpen)}>O/C</button>
      </div>
      <ControlledEditor
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material"
        }}
      />
    </div>
  );
};

export default Editor;