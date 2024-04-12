import ReactQuill from 'react-quill';

function TextEditor() {
  return (
    <div>
      <ReactQuill
        style={{ width: '720px', height: '260px', marginBottom: '50px' }}
      />
    </div>
  );
}

export default TextEditor;
