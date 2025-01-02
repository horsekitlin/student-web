import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { increment, decrement, reset } from '../store/counterSlice';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Display = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop), // 這樣可以避免傳遞 `variant`
})`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.variant === 'reset' ? '#ff4d4d' : '#4a90e2'};
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.variant === 'reset' ? '#ff3333' : '#357abd'};
  }
`;

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <CounterWrapper>
      <h2>Redux Counter</h2>
      <Display>{count}</Display>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button variant="reset" onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </ButtonGroup>
    </CounterWrapper>
  );
};

export default Counter;