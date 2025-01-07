import {
  TabContent,
  Table,
  TableContainer,
  Tr,
  Td,
  Th,
  StudentItem,
  StudentName,
  AmountText,
} from './CustomStyledComponents';

const AMOUNT_TEXT = [
  '0~9',
  '10~19',
  '20~29',
  '30~39',
  '40~49',
  '50~59',
  '60~69',
  '70~79',
  '80~89',
  '90~99',
  '100↑',
];

const reduceStudnetItems = (studnetItems) => {
  return studnetItems.reduce(
    (result, item) => {
      const value = Math.floor(item.amount / 10);
      const index = value > 10 ? 10 : value;

      result[index].push(item);
      return result;
    },
    [[], [], [], [], [], [], [], [], [], [], []],
  );
};

const TabGroupContent = ({studnetItems}) => {
  const groupResult = reduceStudnetItems(studnetItems);

  return (
    <TabContent>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Amount</Th>
              <Th>Students</Th>
            </tr>
          </thead>
          <tbody>
            {groupResult.map((group, index) => (
              <Tr key={`group-row-${index}`}>
                <Td>{AMOUNT_TEXT[index]}</Td>
                <Td>
                  {group.map((student) => (
                    <StudentItem key={student.id}>
                      <StudentName>{student.name}</StudentName>
                      <AmountText completed={student.completed}>
                        {student.amount}
                      </AmountText>
                    </StudentItem>
                  ))}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </TabContent>
  );
};

export default TabGroupContent;
