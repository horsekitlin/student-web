import React, { useState } from 'react';
import styled from 'styled-components';
import StudentCard from './StudentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const TabsContainer = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #30a3d2;
`;

const Tab = styled.div`
  padding: 10px 20px;
  color: ${(props) => (props.active ? '#30a3d2' : '#0e0e0f')};
  transition: color 0.3s ease;

  &:hover {
    color: #30a3d2;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  overflow-y: auto;
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('students');

  const renderStudentCards = (activeTab) => {
    return Array.from({ length: 100 }, (_, index) => (
      <StudentCard key={index} activeTab={activeTab} />
    ));
  };

  return (
    <div>
      <TabsContainer>
        <Tab active={activeTab === 'students'} onClick={() => setActiveTab('students')}>
          Student List
        </Tab>
        <Tab active={activeTab === 'group'} onClick={() => setActiveTab('group')}>
          Group
        </Tab>
        <IconContainer>
          <StyledFontAwesomeIcon icon={faEllipsisVertical} />
        </IconContainer>
      </TabsContainer>
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