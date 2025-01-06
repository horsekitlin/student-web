import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import StudentCard from './StudentCard';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {StyledFontAwesomeIcon} from './CustomStyledComponents';
import {useDispatch, useSelector} from 'react-redux';
import {
  getStudentResult,
  incrementItem,
  decrementItem,
} from '../store/studentSlice';

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
  color: ${(props) => (props.active ? '#30a3d2' : '#0e0e0f')};
  transition: color 0.3s ease;

  &:hover {
    color: #30a3d2;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  overflow-y: hidden;
`;

const StudentCardsContainer = styled.div`
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
  shouldForwardProp: (prop) => !['visible', 'visibility'].includes(prop),
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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);
  const [_, setDotCount] = useState(0);

  const dispatch = useDispatch();
  const {items} = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getStudentResult());
  }, [dispatch]);

  const renderStudentCards = (activeTab) => {
    return items.map((item, index) => (
      <StudentCard
        key={`${item.name}-${index}`}
        activeTab={activeTab}
        index={index}
        item={item}
        handleIncrement={handleIncrement(dispatch, index)}
        handleDecrement={handleDecrement(dispatch, index)}
        onClick={() => {
          if (!item.completed) {
            setItemIndex(index);
          }
        }}
        isSelected={itemIndex === index}
      />
    ));
  };

  const handleKeyDown = (event) => {
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
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
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
        <StudentCardsContainer>
          {renderStudentCards(activeTab)}
        </StudentCardsContainer>
      </TabContent>
    </div>
  );
};

export default Tabs;
