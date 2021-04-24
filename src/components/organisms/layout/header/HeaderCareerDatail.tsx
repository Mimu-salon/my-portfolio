import { memo, VFC } from 'react';
import { HeaderTemplate } from './HeaderTemplate';

export const HeaderCareerDatail: VFC = memo((layout) => {
  return <HeaderTemplate>{layout.children}</HeaderTemplate>;
});
