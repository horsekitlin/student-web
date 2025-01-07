import React from 'react';
import {Link} from 'react-router-dom';
import {
  Card,
  Header,
  Content,
  ContentText,
  Footer,
  Button,
} from './CustomStyledComponents';

const disabledDecrementButton = (studnetItem) => {
  if (studnetItem.completed) return true;
  if (studnetItem.amount === 0) return true;
  return false;
};

const StudentCard = ({studnetItem, index, handleIncrement, handleDecrement}) => {
  return (
    <Card disabled={studnetItem.completed}>
      <Header disabled={studnetItem.completed}>{studnetItem.title}</Header>
      <Content disabled={studnetItem.completed}>
        {studnetItem.completed ? (
          <ContentText disabled={studnetItem.completed}>{studnetItem.name}</ContentText>
        ) : (
          <Link
            to={`/detail/${index}`}
            style={{color: 'white', textDecoration: 'none'}}>
            <ContentText disabled={studnetItem.completed}>{studnetItem.name}</ContentText>
          </Link>
        )}
      </Content>
      <Footer disabled={studnetItem.completed}>
        <Button
          disabled={disabledDecrementButton(studnetItem)}
          variant="decrement"
          onClick={handleDecrement}>
          -1
        </Button>
        <span>{studnetItem.amount}</span>
        <Button
          disabled={studnetItem.completed}
          variant="increment"
          onClick={handleIncrement}>
          +1
        </Button>
      </Footer>
    </Card>
  );
};

const StudentCards = (props) => {
  const {studnetItems, dispatch, handleIncrement, handleDecrement} = props;

  return studnetItems.map((studnetItem, index) => (
    <StudentCard
      key={`${studnetItem.name}-${index}`}
      index={index}
      studnetItem={studnetItem}
      handleIncrement={handleIncrement(dispatch, index)}
      handleDecrement={handleDecrement(dispatch, index)}
    />
  ));
};

export default StudentCards;
