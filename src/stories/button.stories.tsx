import { Button } from "@/components/Button/button";
import "./story.css";

export const button = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-2 flex-wrap">
      <Button>Default Button</Button>
      <Button variant={"green"}>Green Button</Button>
      <Button variant={"red"}>Red Button</Button>
    </div>

    <div className="flex gap-2 flex-wrap">
    <Button arrow>Default Button</Button>
    <Button arrow variant={"green"}>
      Green Button
    </Button>
    <Button arrow variant={"red"}>
      Red Button
    </Button>
  </div>
  </div>
);

export const arrowButtons = () => (
  <div className="flex gap-2 flex-wrap">
    <Button arrow>Default Button</Button>
    <Button arrow variant={"green"}>
      Green Button
    </Button>
    <Button arrow variant={"red"}>
      Red Button
    </Button>
  </div>
);
