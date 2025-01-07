import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

export const TabContainer = styled.div`
  background-color: '#e7eaea';
`;

export const TabsHeader = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #30a3d2;
  position: relative;
`;

export const Tab = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  padding: 10px 20px;
  margin: 0px 5px 0px 0px;
  font-weight: 800;
  color: ${(props) => (props.active ? '#0c8bef' : '#040404')};
  background-color: ${(props) => (props.active ? '#fff' : '#afafaf')};
  border-radius: 4px 4px 0 0;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #30a3d2;
  }
`;

export const TabContent = styled.div`
  padding: 1.5rpm;
  width: 90vw;
  overflow-y: hidden;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-x: hidden;
`;

export const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Tooltip = styled.div.withConfig({
  shouldForwardProp: (prop) => !['visible'].includes(prop),
})`
  position: absolute;
  bottom: 100%;
  left: 10%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #30a3d2;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s;
`;


export const Card = styled.div`
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  border-radius: 4px;
  min-width: 200px;
  overflow: hidden;
  margin: 10px;
`;

export const Header = styled.div`
  text-align: center;
  background-color: ${(props) => (props.disabled ? '#afafaf' : '#0c8bef')};
  height: 2rem;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

export const Content = styled.div`
  text-align: center;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
`;

export const ContentText = styled.p`
  font-weight: 600;
  font-size: 36px;
  color: ${(props) => (props.disabled ? '#afafaf' : 'black')};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  background: #f5f5f5;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  height: 2rem;
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 0 8px;

  background-color: ${(props) => {
    if (props.disabled) return '#afafaf';
    if (props.variant === 'increment') return '#7aca41';
    return '#ef486b';
  }};

  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;


export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
background-color: #e7eaea;
`;

export const Modal = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  background-color: #e7eaea;
`;

export const CloseIcon = styled(StyledFontAwesomeIcon)`
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ModalIconContainer = styled.div`
  text-align: right;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  color: #495057;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  color: #212529;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const TableContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin: 20px;
  overflow: hidden;
`;

export const SortIcon = styled.span`
  margin-left: 8px;
  opacity: ${props => props.active ? '1' : '0.3'};
`;

export const AmountText = styled.span`
  color: ${(props) => (props.completed ? '#e7eaea' : '#040405')};
  font-weight: bold;
  display: inline-block;
  margin-left: 8px;
`;

export const StudentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const StudentName = styled.span`
  margin-right: 8px;
`;