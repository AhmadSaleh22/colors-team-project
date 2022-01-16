import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Icon } from '..';
import { Button } from '../Button/ButtonStyle';

const Count = styled.div`
  width: 10em;
  height: 2em;
  display: flex;
  flex-direction: row;
`;

const Value = styled.div`
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #f2f2f2;
`;

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(prev => prev + 1);
  };

  const decrease = () => {
    setNumber(prev => prev - 1);
  };

  return (
    <Count>
      <Button
        width="2.5em"
        borderRadius="none"
        border="1px solid #FCDD06"
        background="#FFFFFF"
        padding="none"
        onClick={decrease}
      >
        <Icon icon={<AiOutlineMinus />} />
      </Button>
      <Value>{number}</Value>
      <Button
        width="2.5em"
        borderRadius="none"
        border="1px solid #FCDD06"
        background="#FFFFFF"
        padding="none"
        onClick={increase}
      >
        <Icon icon={<AiOutlinePlus />} />
      </Button>
    </Count>
  );
};

export default Counter;
