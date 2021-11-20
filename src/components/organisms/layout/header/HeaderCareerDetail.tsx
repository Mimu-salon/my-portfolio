import type { VFC } from "react";
import { memo } from "react";

import { HeaderTemplate } from "./HeaderTemplate";

export const HeaderCareerDetail: VFC = memo((layout) => {
  return <HeaderTemplate>{layout.children}</HeaderTemplate>;
});
