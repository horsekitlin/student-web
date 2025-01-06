import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledFontAwesomeIcon } from './CustomStyledComponents';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
background-color: #e7eaea;
`;

const Modal = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  background-color: #e7eaea;
`;

const CloseIcon = styled(StyledFontAwesomeIcon)`
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  text-align: right;
`;

const ModalWrapper = ({ children }) => {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return (
      <Wrapper>
        <Modal>
          <IconContainer>
            <CloseIcon icon={faTimes} onClick={() => setVisible(false)} />
          </IconContainer>
          <Content>
            {children}
          </Content>
        </Modal>
      </Wrapper>
    );
  }
  
  return null;
};

export default ModalWrapper;