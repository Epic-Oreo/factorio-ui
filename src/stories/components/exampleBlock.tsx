import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeStyle } from "../settings";

const ExampleBlock = ({
  children,
  codeContent,
}: {
  children: ReactNode;
  codeContent: string;
}) => {
  // const [codeExpanded, setCodeExpanded] = useState(false);
  console.log(codeStyle)

  return (
    <div className="flex flex-col mb-4">
      <div
        className="w-full min-h-64 flex items-center justify-center bg-[#dadada] rounded-t-2xl"
        style={{
          background: `repeating-linear-gradient( -45deg, #00000020, #00000020 1px, #fafafa 1px, #fafafa 15px )`,
        }}
      >
        {children}
      </div>
      <div
        className="w-full py-1 relative rounded-b-2xl flex outline outline-black/30 -outline-offset-1"
        style={{
          backgroundColor: codeStyle["pre[class*=\"language-\"]"].background?.toString(),
        }}
      >
        <SyntaxHighlighter
          language={"jsx"}
          style={codeStyle}
          showLineNumbers
          customStyle={{
            marginTop: "0px",
            fontWeight: "normal",
            fontSize: "0.8rem",
          }}
          wrapLines
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ExampleBlock;
