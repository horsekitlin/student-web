
import styled from 'styled-components';
import Tabs from '../components/Tabs';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledFontAwesomeIcon } from '../components/CustomStyledComponents';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
  return (
    <div>
      <Header>
        <TopRow>
          <IconContainer>
            <StyledFontAwesomeIcon icon={faTimes} />
          </IconContainer>
        </TopRow>
        <BottomRow>
          <Text>302 Science</Text>
          <StyledFontAwesomeIcon icon={faUser} />
          <Text>16/30</Text>
        </BottomRow>
      </Header>
      <Tabs />
    </div>
  );
};

export default HomeScreen;