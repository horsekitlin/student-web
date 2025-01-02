import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {
  increment,
  decrement,
  reset,
  incrementAsync,
  decrementAsync,
} from '../store/counterSlice';

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
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop), // 這樣可以避免傳遞 `variant`
})`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.variant === 'reset') return '#ff4d4d';
    if (props.variant === 'async') return '#4caf50';
    return '#4a90e2';
  }};
  color: white;
  transition: background-color 0.2s;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => {
      if (props.variant === 'reset') return '#ff3333';
      if (props.variant === 'async') return '#45a049';
      return '#357abd';
    }};
  }
`;

const Counter = () => {
  const {value, status, error} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const isLoading = status === 'loading';

  return (
    <CounterWrapper>
      <h2>Redux Counter with API</h2>
      <Display>{value}</Display>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} disabled={isLoading}>
          -1
        </Button>
        <Button onClick={() => dispatch(increment(1))} disabled={isLoading}>
          +1
        </Button>
        <Button
          variant="async"
          onClick={() => dispatch(decrementAsync(1))}
          disabled={isLoading}>
          API -1
        </Button>
        <Button
          variant="async"
          onClick={() => dispatch(incrementAsync(1))}
          disabled={isLoading}>
          API +1
        </Button>
        <Button
          variant="reset"
          onClick={() => dispatch(reset())}
          disabled={isLoading}>
          Reset
        </Button>
      </ButtonGroup>
    </CounterWrapper>
  );
};

export default Counter;
