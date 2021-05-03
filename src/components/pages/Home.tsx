import { memo, VFC } from 'react';

import { HeaderHome } from '../organisms/layout/header/HeaderHome';
import { Profile } from '../organisms/Home/Profile';
import { HeroImage } from '../organisms/Home/HeroImage';

export const Home: VFC = memo(() => {
  return (
    <>
      <HeaderHome />
      <HeroImage />
      <Profile />
    </>
  );
});
