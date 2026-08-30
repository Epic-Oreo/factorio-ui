import { Select } from "@/components";
import { Option } from "@/components/Select/select";
// import "@/global.css";
import "./story.css";

export const select = () => (
  <div className="flex flex-col gap-4">
    <div className="w-full rounded bg-amber-100 flex items-center p-2 gap-4">
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
        className="w-10 h-10 text-amber-600"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
      
      <span>
        Firefox does not support <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::picker#browser_compatibility">::picker(select)</a> styling yet!
      </span>

    </div>

    <Select
      style={{
        width: "20rem",
      }}
    >
      <Option>Relevance</Option>
      <Option>Downloads</Option>
      <Option>Recently Updated</Option>
      <Option>Trending</Option>
    </Select>
  </div>
);
