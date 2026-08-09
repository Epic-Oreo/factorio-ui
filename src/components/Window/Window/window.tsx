import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { type ClassValue } from "clsx";


const Window = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: ClassValue;
  props?: ComponentProps<"div">;
}) => {
  return (
    <div
      className={cn(
        "bg-menu-background border-outset p-2 text-main-text flex flex-col gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Window;