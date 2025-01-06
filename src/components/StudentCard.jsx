import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  border-radius: 4px;
  min-width: 200px;
  overflow: hidden;
  margin: 10px;
`;

const Header = styled.div`
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

const Content = styled.div`
  text-align: center;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
`;

const ContentText = styled.p`
  font-weight: 600;
  font-size: 36px;
  color: ${(props) => (props.disabled ? '#afafaf' : 'black')};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  background: #f5f5f5;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  height: 2rem;
`;

const Button = styled.button.withConfig({
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

const disabledDecrementButton = (item) => {
  if (item.completed) return true;
  if (item.amount === 0) return true;
  return false;
};

const StudentCard = ({
  item,
  index,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <Card disabled={item.completed}>
      <Header disabled={item.completed}>{item.title}</Header>
      <Content disabled={item.completed}>
        {item.completed ? (
          <ContentText disabled={item.completed}>{item.name}</ContentText>
        ) : (
          <Link
            to={`/detail/${index}`}
            style={{color: 'white', textDecoration: 'none'}}>
            <ContentText disabled={item.completed}>{item.name}</ContentText>
          </Link>
        )}
      </Content>
      <Footer disabled={item.completed}>
        <Button
          disabled={disabledDecrementButton(item)}
          variant="decrement"
          onClick={handleDecrement}>
          -1
        </Button>
        <span>{item.amount}</span>
        <Button
          disabled={item.completed}
          variant="increment"
          onClick={handleIncrement}>
          +1
        </Button>
      </Footer>
    </Card>
  );
};

export default StudentCard;
