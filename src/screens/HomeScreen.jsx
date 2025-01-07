import {useEffect} from 'react';
import styled from 'styled-components';
import Tabs from '../components/Tabs';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {StyledFontAwesomeIcon} from '../components/CustomStyledComponents';
import ModalWrapper from '../components/ModalWrapper';
import {selectTotals} from '../utils/selector';
import {useDispatch, useSelector} from 'react-redux';
import {getStudentResult} from '../store/studentSlice';

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

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(231, 234, 234, 0.8);
  z-index: 1000;
`;

const LoadingText = styled.span`
  font-size: 24px;
  color: #0c8bef;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;

const HomeScreen = () => {
  const {studnetItems, isLoading, totalAmount, unCompletedAmount} = useSelector(selectTotals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentResult());
  }, []);

  if (isLoading) {
    return (
      <LoadingOverlay>
        <LoadingText>Loading...</LoadingText>
      </LoadingOverlay>
    );
  }

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
      <Tabs studnetItems={studnetItems} />
    </ModalWrapper>
  );
};

export default HomeScreen;
