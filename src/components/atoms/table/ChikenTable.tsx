import { Table, Tbody, Td, Tr } from '@chakra-ui/table';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  ptstarget: string;
  ptsnumber: string;
  period: string;
  endpoint: string;
  efficacy: string;
};

export const ChikenTable: VFC<Props> = memo((props) => {
  const { ptstarget, ptsnumber, period, endpoint, efficacy } = props;
  const data = [
    { contents: '対象患者', summary: ptstarget },
    { contents: '症例数', summary: ptsnumber },
    { contents: '実施期間', summary: period },
    { contents: '評価項目', summary: endpoint },
    { contents: '有効性', summary: efficacy },
  ];
  return (
    <Table variant="striped" colorScheme="blue" fontSize={{ base: 'sm', md: 'md' }}>
      <Tbody>
        {data.map((test) => (
          <Tr key={test.contents}>
            <Td minW={{ base: '120px', md: '150px' }}>{test.contents}</Td>
            <Td>{test.summary}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
});
