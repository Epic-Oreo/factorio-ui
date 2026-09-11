import{c as d,h as f,B as t,e as g,p as b,s as W,S as B,O as o,W as i,a as l,b as r,d as v,f as N,g as s}from"./select-B2ou6af7.js";import{r as C,j as e}from"./index-Huc_-5vx.js";const n=({children:h,codeContent:u,collapsable:a=!1,highlightedLines:w=[]})=>{var x;const[c,m]=C.useState(!1);return console.log(d),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("div",{className:"w-full min-h-64 flex items-center justify-center bg-[#dadada] rounded-t-2xl",style:{background:"repeating-linear-gradient( -45deg, #00000020, #00000020 1px, #fafafa 1px, #fafafa 15px )"},children:h}),e.jsxs("div",{className:`w-full py-1 relative rounded-b-2xl flex outline outline-black/30 -outline-offset-1 ${a&&!c&&"h-44"}`,style:{backgroundColor:(x=d['pre[class*="language-"]'].background)==null?void 0:x.toString()},children:[e.jsx(f,{language:"jsx",style:d,showLineNumbers:!0,customStyle:{marginTop:"0px",fontWeight:"normal",fontSize:"0.8rem",overflowY:"clip",display:"flex",flexDirection:"column",width:"100%"},codeTagProps:{style:{width:"100%"}},wrapLines:!0,lineProps:j=>({style:{backgroundColor:w.includes(j)?"#99ff9920":"transparent",width:"100%",display:"block"}}),children:u}),a&&!c&&e.jsx("div",{className:"w-full h-full absolute top-0 left-0 z-20 from-black to-transparent bg-linear-to-t rounded-b-2xl flex justify-center items-end",children:e.jsx(t,{className:"mb-2!",onClick:()=>m(!0),children:"Expand"})})]})]})},H=()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h1",{className:"text-5xl mb-0",children:"Button"}),e.jsx(n,{codeContent:`import { Button } from "@oskarlaing/factorio-ui";


<Button>Button</Button>

`,children:e.jsx(t,{children:"Button"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-1 text-2xl",children:"# Button variants"}),e.jsx(n,{codeContent:`<Button>Default Button</Button>
<Button variant={"green"}>Green Button</Button>
<Button variant={"red"}>Red Button</Button>`,children:e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(t,{children:"Default Button"}),e.jsx(t,{variant:"green",children:"Green Button"}),e.jsx(t,{variant:"red",children:"Red Button"})]})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-1 text-2xl",children:"# Arrow Buttons (Broken)"}),e.jsx(n,{codeContent:"<Button arrow={true}>Default Button</Button>",children:e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(t,{arrow:!0,children:"Default Button"}),e.jsx(t,{arrow:!0,variant:"green",children:"Green Button"}),e.jsx(t,{arrow:!0,variant:"red",children:"Red Button"})]})})]})]}),p=W.input`
  ${g.buttonAndInput};


  background-color: ${b.primary.main};
  border-radius: 4px;
  box-shadow: inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px -10px 2px -8px #e3e3e3,inset 0px -10px 2px -8px #282828,inset 0px 9px 1px -8px #000, inset 0px 9px 3px -8px #000;
  height: 32px;
  padding: 3px 10px;
  font-weight: 500;

  &:focus {
    background-color: #ecdbb8;
    box-shadow: inset 8px 0px 4px -8px #e39827,inset -8px 0px 4px -8px #e39827,inset 0px -10px 2px -8px #e3e3e3,inset 0px 9px 1px -8px #000;
  }

  
  /* Temporary */
  &:disabled {
    filter: brightness(0.8);
  }
`,S=()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h1",{className:"text-5xl mb-0",children:"Select Input"}),e.jsxs("div",{className:"w-full rounded bg-amber-100 flex items-center p-2 gap-4",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-10 h-10 text-amber-600",children:[e.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]}),e.jsxs("span",{children:["Firefox does not support"," ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::picker#browser_compatibility",children:"::picker(select)"})," ","styling yet!"]})]}),e.jsx(n,{codeContent:`
<Select className="w-52">
  <Option>Relevance</Option>
  <Option>Downloads</Option>
  <Option>Recently Updated</Option>
  <Option>Trending</Option>
</Select>  
    `.trim(),children:e.jsxs(B,{className:"w-52",children:[e.jsx(o,{children:"Relevance"}),e.jsx(o,{children:"Downloads"}),e.jsx(o,{children:"Recently Updated"}),e.jsx(o,{children:"Trending"})]})})]}),T=()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h1",{className:"text-5xl mb-0",children:"Text Input"}),e.jsx(n,{codeContent:`
<Input/>
    `.trim(),children:e.jsx(p,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-1 text-2xl",children:"# Disabled"}),e.jsx(n,{codeContent:`
<Input disabled />
    `.trim(),children:e.jsx(p,{disabled:!0})})]})]}),D=()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h1",{className:"text-5xl mb-0",children:"Window"}),e.jsx(n,{collapsable:!0,codeContent:`<WindowBase className={"w-96"}>
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
</WindowBase>`,children:e.jsxs(i,{className:"w-96",children:[e.jsxs(l,{children:[e.jsx(r,{children:"Header"}),e.jsx(v,{}),e.jsx(N,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-search-icon lucide-search w-4 h-4",children:[e.jsx("path",{d:"m21 21-4.34-4.34"}),e.jsx("circle",{cx:"11",cy:"11",r:"8"})]})})]}),e.jsx(s,{children:"Content"})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-1 text-2xl",children:"# Not Draggable & No Button"}),e.jsx(n,{codeContent:`<WindowBase className="w-96">
  <WindowHeader>
    <WindowHeaderText>Header</WindowHeaderText>
  </WindowHeader>

  <WindowContent className="">Content</WindowContent>
</WindowBase>`,children:e.jsxs(i,{className:"w-96",children:[e.jsx(l,{children:e.jsx(r,{children:"Header"})}),e.jsx(s,{className:"",children:"Content"})]})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-1 text-2xl",children:"# Multiple Content Sections"}),e.jsx(n,{codeContent:`<WindowBase className="w-96">
  <WindowHeader>
    <WindowHeaderText>Header</WindowHeaderText>
  </WindowHeader>

  <WindowContent className="">Content</WindowContent>
  <div className="flex gap-2 *:w-full *:h-20">
    <WindowContent>Content 2</WindowContent>
    <WindowContent>Content 3</WindowContent>
  </div>
</WindowBase>`,children:e.jsxs(i,{className:"w-96",children:[e.jsx(l,{children:e.jsx(r,{children:"Header"})}),e.jsx(s,{className:"",children:"Content"}),e.jsxs("div",{className:"flex gap-2 *:w-full *:h-20",children:[e.jsx(s,{children:"Content 2"}),e.jsx(s,{children:"Content 3"})]})]})})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as SelectInput,T as TextInput,D as Window,H as button};
