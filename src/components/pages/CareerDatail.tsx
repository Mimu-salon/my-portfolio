import { memo, VFC } from 'react';
import { HeaderCareerDatail } from '../organisms/layout/header/HeaderCareerDatail';

export const CareerDatail: VFC = memo(() => {
  return (
    <>
      <HeaderCareerDatail />
      <p>CareerDatailページです</p>
    </>
  );
});
