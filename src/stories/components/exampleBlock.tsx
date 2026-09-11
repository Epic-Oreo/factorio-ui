import { ReactNode, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeStyle } from "../settings";
import { Button } from "@/components";

const ExampleBlock = ({
  children,
  codeContent,
  collapsable = false,
  highlightedLines = [],
}: {
  children: ReactNode;
  codeContent: string;
  collapsable?: boolean;
  highlightedLines?: number[],
}) => {
  const [codeExpanded, setCodeExpanded] = useState(false);
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
        className={`w-full py-1 relative rounded-b-2xl flex outline outline-black/30 -outline-offset-1 ${collapsable && !codeExpanded && 'h-44'}`}
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
            overflowY: "clip",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          codeTagProps={{
            style: {
              width: "100%",
            }
          }}
          wrapLines
          lineProps={(n)=>({
            "style": {
              backgroundColor: highlightedLines.includes(n) ? "#99ff9920" : "transparent",
              width: "100%",
              display: "block"
            }
          })}
          
        >
          {codeContent}
        </SyntaxHighlighter>
        {collapsable && !codeExpanded && (
          <div className="w-full h-full absolute top-0 left-0 z-20 from-black to-transparent bg-linear-to-t rounded-b-2xl flex justify-center items-end">
            <Button className="mb-2!" onClick={()=>setCodeExpanded(true)}>Expand</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleBlock;
