import React from 'react';
import { Container } from '../../ui-library/Container';
import { useGetMessageHook } from '../../hooks/GetMessage';
import { Card } from '../../ui-library/Card';
import { Text } from '../../ui-library/Text';

export const MessageReport = () => {
  const { messages } = useGetMessageHook();
  return (
    <Container>
      {messages &&
        messages.map((message, ii) => {
          const { dateTime, origin, status, destination } = message;
          return (
            <Card key={`${destination}${ii}`}>
              <Text>From: {origin}</Text>
              <Text>To: {destination}</Text>
              <Text>Status: {status}</Text>
              <Text>Date: {dateTime}</Text>
            </Card>
          );
        })}
    </Container>
  );
};
