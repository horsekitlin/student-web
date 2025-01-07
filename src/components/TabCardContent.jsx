import {TabContent} from './CustomStyledComponents';
import StudentCards from './StudentCards';

const TabGroupContent = (props) => {
  const {
    studnetItems,
    dispatch,
    handleIncrement,
    handleDecrement,
  } = props;

  return (
    <TabContent>
      <StudentCards
        studnetItems={studnetItems}
        dispatch={dispatch}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </TabContent>
  );
};

export default TabGroupContent;
