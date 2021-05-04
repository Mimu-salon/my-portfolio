import { memo, VFC } from 'react';

import { HeaderHome } from '../organisms/layout/header/HeaderHome';
import { Profile } from '../organisms/Home/Profile';
import { HeroImage } from '../organisms/Home/HeroImage';
import { Carrer } from '../organisms/Home/Career';
import { SkillsPortfolio } from '../organisms/Home/SkillsPortfolio';

export const Home: VFC = memo(() => {
  return (
    <>
      <HeaderHome />
      <HeroImage />
      <Profile />
      <Carrer />
      <SkillsPortfolio />
    </>
  );
});
