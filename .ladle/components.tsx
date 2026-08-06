import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children,
}) => (
  <>
    {/* <h1>Theme: {globalState.theme}</h1> */}
    {/* <h2>{storyMeta.customValue}</h2> */}
    {children}
  </>
);