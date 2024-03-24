import './App.css';
import { useState, useRef ,useMemo} from 'react';
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const editorConfig = useMemo(() => ({
    toolbar: true, 
    buttons: ['bold', 'italic', 'underline','strikethrough','ul','ol','lineHeight','font','fontsize','cut','copy','paste','table','indent','left','find'],
  }), []); 
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={editorConfig} 
        tabIndex={1} 
        onChange={newContent => setContent(newContent)} 
      />
      <div>{HTMLReactParser(content)}</div>
    </div>
  );
}

export default App;