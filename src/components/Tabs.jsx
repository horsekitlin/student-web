import React, {useState} from 'react';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {
  IconContainer,
  StyledFontAwesomeIcon,
  Tab,
  TabContainer,
  TabsHeader,
  Tooltip,
} from './CustomStyledComponents';
import {useDispatch} from 'react-redux';
import {incrementItem, decrementItem} from '../store/studentSlice';
import TabGroupContent from './TabGroupContent';
import TabCardContent from './TabCardContent';

const handleIncrement = (dispatch, index) => () => {
  dispatch(incrementItem({index}));
};

const handleDecrement = (dispatch, index) => () => {
  dispatch(decrementItem({index}));
};

const getHandleKeyDown = (options) => (event) => {
  const {
    items,
    dispatch,
    setDotCount,
    setActiveTab,
    handleIncrement,
    handleDecrement,
    setTooltipVisible,
  } = options;

  if (event.key === '.') {
    setDotCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 1000);
        return 0;
      }
      return newCount;
    });
  }

  if (event.key === 'Tab') {
    setActiveTab((prev) => (prev === 'students' ? 'group' : 'students'));
  }

  if (event.key === '+' || event.key === '-') {
    const nextItemIndex = items.findIndex((item) => !item.completed);
    const handleFunction =
      event.key === '-'
        ? handleDecrement(dispatch, nextItemIndex)
        : handleIncrement(dispatch, nextItemIndex);

    handleFunction();
  }
};

const Tabs = ({studnetItems}) => {
  const [activeTab, setActiveTab] = useState('students');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [_, setDotCount] = useState(0);

  const dispatch = useDispatch();

  const keydownOptions = {
    items: studnetItems,
    dispatch,
    setDotCount,
    setActiveTab,
    handleIncrement,
    handleDecrement,
    setTooltipVisible,
  };

  const handleKeyDown = getHandleKeyDown(keydownOptions);

  return (
    <TabContainer onKeyDown={handleKeyDown} tabIndex={0}>
      <TabsHeader>
        <Tooltip visible={tooltipVisible}>Hello World!</Tooltip>
        <Tab
          active={activeTab === 'students'}
          onClick={() => setActiveTab('students')}>
          Student List
        </Tab>
        <Tab
          active={activeTab === 'group'}
          onClick={() => setActiveTab('group')}>
          Group
        </Tab>
        <IconContainer>
          <StyledFontAwesomeIcon icon={faEllipsisVertical} />
        </IconContainer>
      </TabsHeader>
      {activeTab === 'students' ? (
        <TabCardContent
          studnetItems={studnetItems}
          dispatch={dispatch}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ) : (
        <TabGroupContent studnetItems={studnetItems} />
      )}
    </TabContainer>
  );
};

export default Tabs;
