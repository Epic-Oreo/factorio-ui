import {
  Window as WindowBase,
  WindowContent,
  WindowDrag,
  WindowHeader,
  WindowHeaderButton,
  WindowHeaderText,
} from "@/components/Window/window";
import "@/global.css";

export const Window = () => (
  <div className="flex flex-col gap-2">
    <WindowBase>
      <WindowHeader>
        <WindowHeaderText>Settings</WindowHeaderText>

        <WindowDrag />

        <WindowHeaderButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search-icon lucide-search w-4 h-4"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </WindowHeaderButton>
      </WindowHeader>

      <WindowContent>Content</WindowContent>
    </WindowBase>
  </div>
);
