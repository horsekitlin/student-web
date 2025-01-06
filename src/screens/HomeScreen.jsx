import styled from 'styled-components';
import {createSelector} from '@reduxjs/toolkit';
import Tabs from '../components/Tabs';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {StyledFontAwesomeIcon} from '../components/CustomStyledComponents';
import ModalWrapper from '../components/ModalWrapper';
import { selectTotals } from '../utils/selector'; 
import { useSelector } from 'react-redux';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin-right: 10px;
  font-size: 1rem;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;

const HomeScreen = () => {
  const { totalAmount, unCompletedAmount } = useSelector(selectTotals);

  return (
    <ModalWrapper>
      <Header>
        <BottomRow>
          <Text>302 Science</Text>
          <StyledFontAwesomeIcon icon={faUser} />
          <Text>
            {unCompletedAmount}/{totalAmount}
          </Text>
        </BottomRow>
      </Header>
      <Tabs />
    </ModalWrapper>
  );
};

export default HomeScreen;
