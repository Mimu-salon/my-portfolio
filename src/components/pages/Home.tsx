import { memo, VFC } from 'react';

import { HeaderHome } from '../organisms/layout/header/HeaderHome';
import { Profile } from '../organisms/home/Profile';
import { HeroImage } from '../organisms/home/HeroImage';
import { Carrer } from '../organisms/home/Career';
import { SkillsPortfolio } from '../organisms/home/SkillsPortfolio';
import { Footer } from '../organisms/layout/footer/Footer';

export const Home: VFC = memo(() => {
  return (
    <>
      <HeaderHome />
      <HeroImage />
      <Profile />
      <Carrer />
      <SkillsPortfolio />
      <Footer />
    </>
  );
});
