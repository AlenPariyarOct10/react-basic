import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const Highlighter = (props) => {
  return (
    <SyntaxHighlighter language="javascript" style={githubGist}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default Highlighter;