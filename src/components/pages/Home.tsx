import { memo, VFC } from 'react';
import { HeaderHome } from '../organisms/layout/header/HeaderHome';

export const Home: VFC = memo(() => {
  return (
    <>
      <HeaderHome />
      <p>Homeページです</p>
    </>
  );
});
