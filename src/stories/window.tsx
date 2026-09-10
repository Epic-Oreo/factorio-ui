import {
  Window as WindowBase,
  WindowContent,
  WindowDrag,
  WindowHeader,
  WindowHeaderButton,
  WindowHeaderText,
} from "@/components/Window/window";
import ExampleBlock from "./components/exampleBlock";

export const Window = () => (
  <div className="flex flex-col gap-2">
    {/* Title */}
    <h1 className="text-5xl mb-0">Button</h1>

    <ExampleBlock
      codeContent={`<WindowBase className={"w-96"}>
  <WindowHeader>
    <WindowHeaderText>Header</WindowHeaderText>

    <WindowDrag />

    <WindowHeaderButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search-icon lucide-search w-4 h-4"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    </WindowHeaderButton>
  </WindowHeader>

  <WindowContent>Content</WindowContent>
</WindowBase>`}
    >
      <WindowBase className="w-96">
        <WindowHeader>
          <WindowHeaderText>Header</WindowHeaderText>

          <WindowDrag />

          <WindowHeaderButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search w-4 h-4"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </WindowHeaderButton>
        </WindowHeader>

        <WindowContent>Content</WindowContent>
      </WindowBase>
    </ExampleBlock>

    <div>
      <h2 className="mb-1 text-2xl"># Not Draggable & No Button</h2>
      <ExampleBlock
        codeContent={`<WindowBase className="w-96">
  <WindowHeader>
    <WindowHeaderText>Header</WindowHeaderText>
  </WindowHeader>

  <WindowContent className="">Content</WindowContent>
</WindowBase>`}
      >
        <WindowBase className="w-96">
          <WindowHeader>
            <WindowHeaderText>Header</WindowHeaderText>
          </WindowHeader>

          <WindowContent className="">Content</WindowContent>
        </WindowBase>
      </ExampleBlock>
    </div>

    <div>
      <h2 className="mb-1 text-2xl"># Multiple Content Sections</h2>
      <ExampleBlock
        codeContent={`<WindowBase className="w-96">
  <WindowHeader>
    <WindowHeaderText>Header</WindowHeaderText>
  </WindowHeader>

  <WindowContent className="">Content</WindowContent>
  <div className="flex gap-2 *:w-full *:h-20">
    <WindowContent>Content 2</WindowContent>
    <WindowContent>Content 3</WindowContent>
  </div>
</WindowBase>`}
      >
        <WindowBase className="w-96">
          <WindowHeader>
            <WindowHeaderText>Header</WindowHeaderText>
          </WindowHeader>

          <WindowContent className="">Content</WindowContent>
          <div className="flex gap-2 *:w-full *:h-20">
            <WindowContent>Content 2</WindowContent>
            <WindowContent>Content 3</WindowContent>
          </div>
        </WindowBase>
      </ExampleBlock>
    </div>
  </div>
);
