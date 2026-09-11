import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CheckIcon, CopyIcon } from "./icons";
import { ReactNode, useMemo, useState } from "react";
import { codeStyle } from "../settings";

const CopyButton = ({ data }: { data: string }) => {
  const [switched, setSwitched] = useState(false);

  async function onClick() {
    await navigator.clipboard.writeText(data);

    setSwitched(true);
    setTimeout(() => {
      setSwitched(false);
    }, 500);
  }

  if (switched) {
    return (
      <CheckIcon className="text-white ml-auto size-5 p-1 hover:bg-white/10 rounded-lg" />
    );
  }

  return (
    <CopyIcon
      className="text-white ml-auto size-5 p-1 hover:bg-white/10 active:scale-95 rounded-lg "
      onMouseDown={onClick}
    />
  );
};

const CodeBlock = ({
  lang,
  children,
  title,
  Icon,
  prefix,
  preview,
  lineNumbers = true,
}: {
  lang: string;
  children: string;
  title?: string;
  Icon?: ({ ...props }: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  prefix?: string;
  preview?: ReactNode;
  lineNumbers?: boolean;
}) => {
  // Adds the prefix to each line if one is supplied
  const codeText = useMemo(
    () =>
      children
        .split("\n")
        .map((x: string) => `${prefix || ""}${x}`)
        .join("\n"),
    [children, prefix],
  );

  return (
    <div
      className="p-1 rounded-lg"
      style={{
        backgroundColor: codeStyle["pre[class*=\"language-\"]"].background?.toString(),
      }}
    >
      <div className="px-4 flex items-center gap-3">
        {Icon && <Icon className={"size-6 fill-white/70"} />}
        <p className="text-sm text-white/70">{title}</p>

        <CopyButton data={children} />
      </div>
      <div className="h-px w-full bg-white/5"></div>
      <SyntaxHighlighter
        language={lang}
        style={codeStyle}
        showLineNumbers={lineNumbers}
        customStyle={{
          fontSize: "0.8rem",
        }}
      >
        {codeText}
      </SyntaxHighlighter>
      {preview && (
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-4 w-full bg-white/20 text-white rounded-lg">
            <div className="group-open:hidden">
              Open Preview
            </div>
            <div className="group-open:block hidden">
              Close Preview
            </div>
          </summary>
          <section className="p-2 *:rounded-lg relative">{preview}</section>
        </details>
      )}
    </div>
  );
};

export default CodeBlock;
