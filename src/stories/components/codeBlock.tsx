import SyntaxHighlighter from "react-syntax-highlighter";
import { CheckIcon, CopyIcon } from "./icons";
import { ReactNode, useMemo, useState } from "react";

type langs =
  | "oneC (1c)"
  | "abnf"
  | "accesslog"
  | "actionscript"
  | "ada"
  | "angelscript"
  | "apache"
  | "applescript"
  | "arcade"
  | "arduino"
  | "armasm"
  | "asciidoc"
  | "aspectj"
  | "autohotkey"
  | "autoit"
  | "avrasm"
  | "awk"
  | "axapta"
  | "bash"
  | "basic"
  | "bnf"
  | "brainfuck"
  | "cLike (c-like)"
  | "c"
  | "cal"
  | "capnproto"
  | "ceylon"
  | "clean"
  | "clojureRepl (clojure-repl)"
  | "clojure"
  | "cmake"
  | "coffeescript"
  | "coq"
  | "cos"
  | "cpp"
  | "crmsh"
  | "crystal"
  | "csharp"
  | "csp"
  | "css"
  | "d"
  | "dart"
  | "delphi"
  | "diff"
  | "django"
  | "dns"
  | "dockerfile"
  | "dos"
  | "dsconfig"
  | "dts"
  | "dust"
  | "ebnf"
  | "elixir"
  | "elm"
  | "erb"
  | "erlangRepl (erlang-repl)"
  | "erlang"
  | "excel"
  | "fix"
  | "flix"
  | "fortran"
  | "fsharp"
  | "gams"
  | "gauss"
  | "gcode"
  | "gherkin"
  | "glsl"
  | "gml"
  | "go"
  | "golo"
  | "gradle"
  | "groovy"
  | "haml"
  | "handlebars"
  | "haskell"
  | "haxe"
  | "hsp"
  | "htmlbars"
  | "http"
  | "hy"
  | "inform7"
  | "ini"
  | "irpf90"
  | "isbl"
  | "java"
  | "javascript"
  | "jbossCli (jboss-cli)"
  | "json"
  | "juliaRepl (julia-repl)"
  | "julia"
  | "kotlin"
  | "lasso"
  | "latex"
  | "ldif"
  | "leaf"
  | "less"
  | "lisp"
  | "livecodeserver"
  | "livescript"
  | "llvm"
  | "lsl"
  | "lua"
  | "makefile"
  | "markdown"
  | "mathematica"
  | "matlab"
  | "maxima"
  | "mel"
  | "mercury"
  | "mipsasm"
  | "mizar"
  | "mojolicious"
  | "monkey"
  | "moonscript"
  | "n1ql"
  | "nginx"
  | "nim"
  | "nix"
  | "nodeRepl (node-repl)"
  | "nsis"
  | "objectivec"
  | "ocaml"
  | "openscad"
  | "oxygene"
  | "parser3"
  | "perl"
  | "pf"
  | "pgsql"
  | "phpTemplate (php-template)"
  | "php"
  | "plaintext"
  | "pony"
  | "powershell"
  | "processing"
  | "profile"
  | "prolog"
  | "properties"
  | "protobuf"
  | "puppet"
  | "purebasic"
  | "pythonRepl (python-repl)"
  | "python"
  | "q"
  | "qml"
  | "r"
  | "reasonml"
  | "rib"
  | "roboconf"
  | "routeros"
  | "rsl"
  | "ruby"
  | "ruleslanguage"
  | "rust"
  | "sas"
  | "scala"
  | "scheme"
  | "scilab"
  | "scss"
  | "shell"
  | "smali"
  | "smalltalk"
  | "sml"
  | "sqf"
  | "sql"
  | "sqlMore (sql_more)"
  | "stan"
  | "stata"
  | "step21"
  | "stylus"
  | "subunit"
  | "swift"
  | "taggerscript"
  | "tap"
  | "tcl"
  | "thrift"
  | "tp"
  | "twig"
  | "typescript"
  | "vala"
  | "vbnet"
  | "vbscriptHtml (vbscript-html)"
  | "vbscript"
  | "verilog"
  | "vhdl"
  | "vim"
  | "x86asm"
  | "xl"
  | "xml"
  | "xquery"
  | "yaml"
  | "zephir";

type Style = { [key: string]: React.CSSProperties } | undefined;

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
      <CheckIcon className="ml-auto size-5 p-1 hover:bg-black/10 rounded-lg" />
    );
  }

  return (
    <CopyIcon
      className="ml-auto size-5 p-1 hover:bg-black/10 active:scale-95 rounded-lg "
      onMouseDown={onClick}
    />
  );
};

const CodeBlock = ({
  lang,
  style,
  children,
  title,
  Icon,
  prefix,
  preview,
  lineNumbers = true,
}: {
  lang: langs;
  style: Style;
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
        backgroundColor: style && (style["hljs"]["background"] as string),
      }}
    >
      <div className="px-4 flex items-center gap-3">
        {Icon && <Icon className={"size-6 fill-black/70"} />}
        <p className="text-sm text-black/70">{title}</p>

        <CopyButton data={children} />
      </div>
      <div className="h-px w-full bg-black/5"></div>
      <SyntaxHighlighter
        language={lang}
        style={style}
        showLineNumbers={lineNumbers}
      >
        {codeText}
      </SyntaxHighlighter>
      {preview && (
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-4 w-full bg-black/5 rounded-lg">
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
