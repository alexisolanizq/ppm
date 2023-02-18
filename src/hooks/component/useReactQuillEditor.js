import { useState, useEffect } from 'react';

const useReactQuillEditor = () => {
  const [quillRef, setQuillRef] = useState(null);
  const [editorHtml, setEditorHtml] = useState('');
  const [reactQuillRef, setReactQuillRef] = useState(null);

  const attachQuillRefs = () => {
    if (typeof reactQuillRef?.getEditor !== 'function') return;

    if (quillRef != null) return;

    setQuillRef(reactQuillRef.getEditor());

    if (quillRef != null) setQuillRef(quillRef);
  };

  useEffect(() => {
    attachQuillRefs();
  }, [reactQuillRef]);

  return {
    quillRef,
    editorHtml,
    setEditorHtml,
    setReactQuillRef
  };
};

export default useReactQuillEditor;
