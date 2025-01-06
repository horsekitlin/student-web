import React, {useState} from 'react';
import styled from 'styled-components';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {StyledFontAwesomeIcon} from './CustomStyledComponents';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementItem,
  decrementItem,
} from '../store/studentSlice';
import StudentCards from '../components/StudentCards';

const Container = styled.div`
  background-color: '#e7eaea';
`;

const TabsHeader = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #30a3d2;
  position: relative;
`;

const Tab = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  padding: 10px 20px;
  margin: 0px 5px 0px 0px;
  font-weight: 800;
  color: ${(props) => (props.active ? '#0c8bef' : '#040404')};
  background-color: ${(props) => (props.active ? '#fff' : '#afafaf')};
  border-radius: 4px 4px 0 0;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #30a3d2;
  }
`;
const TabContent = styled.div`
  padding: 20px;
  overflow-y: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-x: hidden;
`;

const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Tooltip = styled.div.withConfig({
  shouldForwardProp: (prop) => !['visible'].includes(prop),
})`
  position: absolute;
  bottom: 100%;
  left: 10%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #30a3d2;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s;
`;

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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [_, setDotCount] = useState(0);

  const dispatch = useDispatch();
  const {items} = useSelector((state) => state.student);

  const keydownOptions = {
    items,
    dispatch,
    setDotCount,
    setActiveTab,
    handleIncrement,
    handleDecrement,
    setTooltipVisible,
  };

  const handleKeyDown = getHandleKeyDown(keydownOptions);

  return (
    <Container onKeyDown={handleKeyDown} tabIndex={0}>
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
      <TabContent>
          <StudentCards
            items={items}
            dispatch={dispatch}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
      </TabContent>
    </Container>
  );
};

export default Tabs;
