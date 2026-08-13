import {Button} from "@/components/Button/button"
import "@/global.css"

export const button = () => (
  <div>
    <div className="flex gap-2 flex-wrap">
      <Button>Default Button</Button>
      <Button variant={"green"}>Green Button</Button>
      <Button variant={"red"}>Red Button</Button>
    </div>

  </div>
);
