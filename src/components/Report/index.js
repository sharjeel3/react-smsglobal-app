import React from 'react';
import { Container } from '../../ui-library/Container';
import { useGetMessageHook } from '../../hooks/GetMessage';
import { Text } from '../../ui-library/Text';
import { MessageHistory } from './MessageHistory';
import { MessageStats } from './MessageStats';
import { Wrapper, Column } from './styles';

export const MessageReport = () => {
  const { messages } = useGetMessageHook();
  return (
    <Wrapper>
      <Column>
        <Text heading>Message Statistics</Text>
        <MessageStats messages={messages} />
      </Column>
      <Column>
        <Text heading>Message History</Text>
        <MessageHistory messages={messages} />
      </Column>
    </Wrapper>
  );
};
