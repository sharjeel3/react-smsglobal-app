import React from 'react';
import { Card } from '../../../ui-library/Card';
import { Text } from '../../../ui-library/Text';
import PropTypes from 'prop-types';

export const MessageHistory = props => {
  const { messages = [] } = props;

  return (
    <>
      {messages &&
        messages.map((message, ii) => {
          const { dateTime, origin, status, destination, message: content } = message;
          return (
            <Card key={`${destination}${ii}`}>
              <Text>From: {origin}</Text>
              <Text>To: {destination}</Text>
              <Text>Content: {content}</Text>
              <Text>Status: {status}</Text>
              <Text>Date: {dateTime}</Text>
            </Card>
          );
        })}
    </>
  );
};

MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired
};
