import React, { useState } from 'react';
import styled from 'styled-components';
import StudentCard from './StudentCard';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { StyledFontAwesomeIcon } from './CustomStyledComponents';
import mockData from '../mockData/data';


const TabsHeader = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #30a3d2;
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
  overflow-y: hidden  ;
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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('students');

  const renderStudentCards = (activeTab) => {
    return mockData.map((item, index) => (<StudentCard key={index} activeTab={activeTab} item={item} />));
  };

  return (
    <div>
      <TabsHeader>
        <Tab active={activeTab === 'students'} onClick={() => setActiveTab('students')}>
          Student List
        </Tab>
        <Tab active={activeTab === 'group'} onClick={() => setActiveTab('group')}>
          Group
        </Tab>
        <IconContainer>
          <StyledFontAwesomeIcon icon={faEllipsisVertical} />
        </IconContainer>
      </TabsHeader>
      <TabContent>
        {activeTab === 'students' ? (
          <StudentCardsContainer>
            {renderStudentCards(activeTab)}
          </StudentCardsContainer>
        ) : (
          <StudentCardsContainer>
            {renderStudentCards(activeTab)}
          </StudentCardsContainer>
        )}
      </TabContent>
    </div>
  );
};

export default Tabs;