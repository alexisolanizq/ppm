import React from 'react';

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const ReactQuillEditor = ({
  setRef = () => {},
  onChange = () => {},
  value = null
}) => (
  <ReactQuill
    className="h-200 mb-5"
    theme="snow"
    onChange={onChange}
    value={value}
    ref={(el) => {
      setRef(el);
    }}
  />
);

export default ReactQuillEditor;
