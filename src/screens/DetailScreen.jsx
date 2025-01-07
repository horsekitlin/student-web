import React from 'react';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {useParams, Navigate, useNavigate} from 'react-router-dom';
import {
  Text,
  BottomRow,
  DetailContainer,
  DetailHeader,
  StyledFontAwesomeIcon,
  TopRow,
  StyledImg,
  CopyIconContainer,
  DetailFooter,
  VersionText,
} from '../components/CustomStyledComponents';
import QRCode from 'react-qr-code';
import copyIcon from '../assets/icons/copy.png';
import {useSelector} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ModalWrapper from '../components/ModalWrapper';

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
      <DetailContainer>
        <DetailHeader>
          <TopRow onClick={() => navigate(-1)}>
            <StyledFontAwesomeIcon icon={faAngleLeft} />
            <BackText>Back to Class List</BackText>
          </TopRow>
          <BottomRow>
            <Text>Join 302 Science</Text>
          </BottomRow>
          <BottomRow>
            <Text>ID: {item.id.split('-')[0]} </Text>
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
        </DetailHeader>
        <DetailContent>
          <QRCode value="https://www.classswift.viewsonic.io/" />
        </DetailContent>
        <DetailFooter>
          <VersionText>Version 1.1.7</VersionText>
        </DetailFooter>
      </DetailContainer>
    </ModalWrapper>
  );
};

export default DetailScreen;
