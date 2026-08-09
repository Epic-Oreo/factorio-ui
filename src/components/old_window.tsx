// import { ComponentProps, ReactNode } from "react";
// import { ClassValue } from "clsx";
// import { cn } from "@/utils/cn";

// export const WindowHeaderText = ({
//   children,
//   className,
//   ...props
// }: {
//   children?: ReactNode;
//   className?: ClassValue;
//   props?: ComponentProps<"div">;
// }) => {
//   return (
//     <div {...props} className={cn("text-accent-heading text-xl shrink-0", className)}>
//       {children}
//     </div>
//   );
// };

// export const WindowDrag = ({

//   className,
//   ...props
// }: {
//   className?: ClassValue;
//   props?: ComponentProps<"div">;
// }) => {
//   return (
//     <div {...props} className={cn("h-full w-full shrink py-0.5", className)}>
//       <div className="drag-background w-full h-full"></div>


//     </div>
//   );
// };


// export const WindowHeaderButton = ({
//   children,
//   className,
//   ...props
// }: {
//   children?: ReactNode;
//   className?: ClassValue;
//   props?: ComponentProps<"div">;
// }) => {
//   return (
//     <div
//       {...props}
//       className={cn("h-7 w-7 border-inset shrink-0", className)}
//     >
//       <button className="border-outset w-full h-full hover:bg-none hover:glow-button active:glow-button-inset" >
//         {children}
//       </button>

//     </div>
//   );
// };

// export const WindowHeader = ({
//   children,
//   className,
//   ...props
// }: {
//   children?: ReactNode;
//   className?: ClassValue;
//   props?: ComponentProps<"div">;
// }) => {
//   return (
//     <div className={cn("flex justify-between items-center h-7 gap-2", className)} {...props}>
//       {children}
//     </div>
//   );
// };

// export const WindowContent = ({
//   children,
//   className,
//   ...props
// }: {
//   children?: ReactNode;
//   className?: ClassValue;
//   props?: ComponentProps<"div">;
// }) => {
//   return (
//     <div className={cn("bg-menu-inset-background border-inset h-20 p-2", className)}>
//       {children}
//     </div>
//   );
// };

// export const Window = ({
//   children,
//   className,
//   ...props
// }: {
//   children?: ReactNode;
//   className?: ClassValue;
//   props?: ComponentProps<"div">;
// }) => {
//   return (
//     <div
//       className={cn(
//         "bg-menu-background border-outset p-2 text-main-text flex flex-col gap-2",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };
