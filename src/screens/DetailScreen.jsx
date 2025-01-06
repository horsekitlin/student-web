import React from 'react';
import styled from 'styled-components';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {useParams, Navigate, useNavigate} from 'react-router-dom';
import {StyledFontAwesomeIcon} from '../components/CustomStyledComponents';
import QRCode from 'react-qr-code';
import copyIcon from '../assets/icons/copy.png';
import {useSelector} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ModalWrapper from '../components/ModalWrapper';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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
  cursor: pointer;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

const BackText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const VersionText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #afafaf;
`;

const Text = styled.span`
  margin-right: 10px;
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
`;
const CopyIconContainer = styled.div`
  background-color: #0c8bef;
  border-radius: 4px;
  margin-right: 12px;
  margin-left: 4px;
  padding: 4px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
`;
const DetailScreen = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const items = useSelector((state) => state.student.items);
  const item = items[id];

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <ModalWrapper>
      <Container>
        <Header>
          <TopRow onClick={() => navigate(-1)}>
            <StyledFontAwesomeIcon icon={faAngleLeft} />
            <BackText>Back to Class List</BackText>
          </TopRow>
          <BottomRow>
            <Text>Join 302 Science</Text>
          </BottomRow>
          <BottomRow>
            <Text>ID: {item.id.split("-")[0]} </Text>
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
        <Footer>

        <VersionText>Version 1.1.7</VersionText>
        </Footer>
      </Container>
    </ModalWrapper>
  );
};

export default DetailScreen;
