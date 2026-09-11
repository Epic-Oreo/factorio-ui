import { Button } from "@/components/Button/button";
import ExampleBlock from "./components/exampleBlock";

export const button = () => (
  <div className="flex flex-col gap-4">
    {/* Title */}
    <h1 className="text-5xl mb-0">Button</h1>

    <ExampleBlock codeContent={`import { Button } from "@oskarlaing/factorio-ui";


<Button>Button</Button>

`}>
      <Button>Button</Button>
    </ExampleBlock>


    <div>
      <h2 className="mb-1 text-2xl"># Button variants</h2>
      <ExampleBlock codeContent={`<Button>Default Button</Button>
<Button variant={"green"}>Green Button</Button>
<Button variant={"red"}>Red Button</Button>`}>
        <div className="flex gap-2 flex-wrap">
          <Button>Default Button</Button>
          <Button variant={"green"}>Green Button</Button>
          <Button variant={"red"}>Red Button</Button>
        </div>
      </ExampleBlock>
    </div>


    <div>
      <h2 className="mb-1 text-2xl"># Arrow Buttons (Broken)</h2>
      <ExampleBlock codeContent={"<Button arrow={true}>Default Button</Button>"}>
        <div className="flex gap-2 flex-wrap">
          <Button arrow>Default Button</Button>
          <Button arrow variant={"green"}>Green Button</Button>
          <Button arrow variant={"red"}>Red Button</Button>
        </div>
      </ExampleBlock>
    </div>


  </div>
);