import { Window, WindowContent, WindowDrag, WindowHeader, WindowHeaderButton, WindowHeaderButton2, WindowHeaderText } from "@/components/Window/window"
import "@/global.css"

export const WindowStory = () => (
  <div className="flex flex-col gap-2">
    <Window>
      <WindowHeader>
        <WindowHeaderText>
          Settings
        </WindowHeaderText>

        <WindowDrag/>

        <WindowHeaderButton>
          X
        </WindowHeaderButton>
      </WindowHeader>

      <WindowContent>
        Content
      </WindowContent>
    </Window>

    <Window>
      <WindowHeader>
        <WindowHeaderText>
          Settings
        </WindowHeaderText>

        <WindowDrag/>

        <WindowHeaderButton2>
          X
        </WindowHeaderButton2>
      </WindowHeader>

      <WindowContent>
        Content
      </WindowContent>
    </Window>
  </div>
);
