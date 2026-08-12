import {Button} from "@/components/Button/button"
import "@/global.css"

export const button = () => (
  <div>
    <div className="flex gap-2 flex-wrap">
      <Button>Default</Button>
      <Button variant={"green"}>Green</Button>
    </div>

  </div>
);
