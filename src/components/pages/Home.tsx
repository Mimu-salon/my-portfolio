import type { VFC } from "react";
import { memo } from "react";

import { Carrer } from "../organisms/home/Career";
import { HeroImage } from "../organisms/home/HeroImage";
import { Profile } from "../organisms/home/Profile";
import { SkillsPortfolio } from "../organisms/home/SkillsPortfolio";
import { Footer } from "../organisms/layout/footer/Footer";
import { HeaderHome } from "../organisms/layout/header/HeaderHome";

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
