import type { VFC } from "react";
import { memo } from "react";

import { HeaderTemplate } from "./HeaderTemplate";

export const HeaderCareerDatail: VFC = memo((layout) => {
  return <HeaderTemplate>{layout.children}</HeaderTemplate>;
});
