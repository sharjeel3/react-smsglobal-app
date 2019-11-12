import React from 'react';
import { useGetMessageHook } from '../../hooks/GetMessage';
import { Text } from '../../ui-library/Text';
import { MessageHistory } from './MessageHistory';
import { MessageStats } from './MessageStats';
import { Wrapper, Column } from './styles';
import { ContentLoader } from '../../ui-library/ContentLoader';

export const MessageReport = () => {
  const { messages, isLoading } = useGetMessageHook();
  if (isLoading) return <ContentLoader />;

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
