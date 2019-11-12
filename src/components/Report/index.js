import React from 'react';
import { useGetMessageHook } from '../../hooks/GetMessage';
import { Text } from '../../ui-library/Text';
import { MessageHistory } from './MessageHistory';
import { MessageStats } from './MessageStats';
import { Wrapper, Column } from './styles';
import { ContentLoader } from '../../ui-library/ContentLoader';

export const MessageReport = () => {
  const { messages, isLoading, hasSettings } = useGetMessageHook();
  if (isLoading) return <ContentLoader />;

  return (
    <Wrapper>
      {hasSettings ? (
        <>
          <Column>
            <Text heading>Message Statistics</Text>
            <MessageStats />
          </Column>
          <Column>
            <Text heading>Message History</Text>
            <MessageHistory messages={messages} />
          </Column>
        </>
      ) : (
        <Text>Settings not found. Save your settings before you can view reports.</Text>
      )}
    </Wrapper>
  );
};
