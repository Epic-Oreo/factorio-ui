import "@/global.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";


const firstString = `
import { Button } from '@oskarlaing/factorio-ui';

`

export const Welcome = () => (
  <div>
    <h1 className="text-3xl">Factorio UI</h1>


    <h3 className="mt-10 text-xl">To get started, install @oskarlaing/factorio-ui</h3>
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter language="shell" style={docco}>
        yarn add @oskarlaing/factorio-ui
      </SyntaxHighlighter>
    </div>


    <h3 className="mt-10 text-xl">Then implement your first component!</h3>
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter language="javascript" style={docco}>
        {firstString}
      </SyntaxHighlighter>
    </div>
  </div>
)