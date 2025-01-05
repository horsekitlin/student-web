import React from 'react';
import styled from 'styled-components';
import {faAngleLeft, faTimes} from '@fortawesome/free-solid-svg-icons';
import {useParams, Navigate} from 'react-router-dom';
import {StyledFontAwesomeIcon} from '../components/CustomStyledComponents';
import QRCode from 'react-qr-code';
import copyIcon from '../assets/icons/copy.png';
import {useSelector} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

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

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
`;
const CopyIconContainer = styled.div`
  background-color: #0c8bef;
  border-radius: 4px;
  margin-right: 4px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  margin: 20px 0;
  flex-grow: 1;
`;

const DetailScreen = () => {
  const {id} = useParams();
  const items = useSelector((state) => state.student.items);
  const item = items[id];

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Header>
        <TopRow onClick={() => false}>
          <StyledFontAwesomeIcon icon={faAngleLeft} />
          <Text>Back to Class List</Text>
          <IconContainer>
            <StyledFontAwesomeIcon icon={faTimes} />
          </IconContainer>
        </TopRow>
        <BottomRow>
          <Text>Join 302 Science</Text>
        </BottomRow>
        <BottomRow>
          <Text>ID: {item.id} </Text>
          <CopyIconContainer>
            <CopyToClipboard
              text={item.id}
              onCopy={() => alert('複製 ID 成功')}>
              <StyledImg src={copyIcon} alt="Copy" />
            </CopyToClipboard>
          </CopyIconContainer>
          <Text>Link</Text>
          <CopyIconContainer>
            <CopyToClipboard
              text="https://www.classswift.viewsonic.io/"
              onCopy={() => alert('複製 Link 成功')}>
              <StyledImg src={copyIcon} alt="Copy" />
            </CopyToClipboard>
          </CopyIconContainer>
        </BottomRow>
      </Header>
      <Content>
        <QRCode value="https://www.classswift.viewsonic.io/" />
      </Content>
    </Container>
  );
};

export default DetailScreen;
