import React from 'react';
import styled from 'styled-components';

// Card Container
const Card = styled.div`
  border: 1px solid #30a3d2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  overflow: hidden;
  margin: 10px;
`;

// Header Styling
const Header = styled.div`
  text-align: center;
  background-color: ${(props) => (props.disabled ? '#afafaf' : '#0c8bef')};
  height: 2rem;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem; // 文字大小为 1.2rem
`;

// Content Styling
const Content = styled.div`
  text-align: center;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
`;

const ContentText = styled.p`
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => (props.disabled ? '#afafaf' : 'black')};
`;

// Footer Styling
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  background: #f5f5f5;
  border: 1px solid ${(props) => (props.disabled ? '#afafaf' : '#30a3d2')};
  height: 2rem;
`;

// Button Styling
const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin: 0 8px;

  background-color: ${(props) => {
    if (props.disabled) return '#afafaf';
    if (props.variant === 'increment') return '#7aca41';
    return '#ef486b';
  }};
  
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')}; // 禁用时不允许事件触发
`;

// Card Component
const ReactCard = ({ disabled }) => {
  const [count, setCount] = React.useState(0);

  return (
    <Card>
      <Header disabled={disabled}>
        01
      </Header>
      <Content disabled>
        <ContentText disabled>Philip</ContentText>
      </Content>
      <Footer disabled={disabled}>
        <Button disabled variant="decrement" onClick={() => setCount(count - 1)}>-1</Button>
        <span>{count}</span>
        <Button disabled variant="increment" onClick={() => setCount(count + 1)}>+1</Button>
      </Footer>
    </Card>
  );
};

// Example of usage
export default ReactCard;