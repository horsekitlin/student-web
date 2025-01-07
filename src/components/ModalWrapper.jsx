import React from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  Modal,
  CloseIcon,
  ModalIconContainer,
  ModalContent,
} from './CustomStyledComponents';

const ModalWrapper = ({children}) => {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return (
      <Wrapper>
        <Modal>
          <ModalIconContainer>
            <CloseIcon icon={faTimes} onClick={() => setVisible(false)} />
          </ModalIconContainer>
          <ModalContent>{children}</ModalContent>
        </Modal>
      </Wrapper>
    );
  }

  return null;
};

export default ModalWrapper;
