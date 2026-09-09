import "./story.css";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeBlock from "./components/codeBlock";
import { BashIcon, ReactIcon } from "./components/icons";
import { Button } from "@/components";

const firstString = `import { Button } from '@oskarlaing/factorio-ui';

const Page = () => {
  return (
    <div>
      <Button variant={"green"}>Hello World</Button>
    </div>
  )
}`;

export const Welcome = () => (
  <div>
    <h1 className="text-3xl">Factorio UI</h1>

    <h3 className="mt-10 text-xl">
      To get started, install @oskarlaing/factorio-ui
    </h3>

    <CodeBlock lang="bash" style={docco} title="Bash" Icon={BashIcon} lineNumbers={false} prefix="$ ">
      yarn add @oskarlaing/factorio-ui
    </CodeBlock>

    <h3 className="mt-10 text-xl">Then implement your first component!</h3>

    <CodeBlock lang="javascript" style={docco} title="page.tsx" Icon={ReactIcon} preview={(
      <div className="bg-white w-full box-border h-64 flex p-4">
        <Button variant="green">Hello world</Button>
      </div>
    )}>
      {firstString}
    </CodeBlock>
  </div>
);
