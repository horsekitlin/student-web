import {useEffect} from 'react';
import Tabs from '../components/Tabs';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {HomeBottomRow, HomeHeader, LoadingOverlay, LoadingText, StyledFontAwesomeIcon, Text} from '../components/CustomStyledComponents';
import ModalWrapper from '../components/ModalWrapper';
import {selectTotals} from '../utils/selector';
import {useDispatch, useSelector} from 'react-redux';
import {getStudentResult} from '../store/studentSlice';

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
      <HomeHeader>
        <HomeBottomRow>
          <Text>302 Science</Text>
          <StyledFontAwesomeIcon icon={faUser} />
          <Text>
            {unCompletedAmount}/{totalAmount}
          </Text>
        </HomeBottomRow>
      </HomeHeader>
      <Tabs studnetItems={studnetItems} />
    </ModalWrapper>
  );
};

export default HomeScreen;
