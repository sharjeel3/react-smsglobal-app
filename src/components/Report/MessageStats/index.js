import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../ui-library/Dropdown';
import { Card } from '../../../ui-library/Card';
import { Text } from '../../../ui-library/Text';

const messagePeriodOptions = [
  { name: '24 hours', value: 24 },
  { name: '48 hours', value: 48 },
  { name: '3 days', value: 72 },
  { name: '5 days', value: 96 },
  { name: '7 days', value: 120 }
];

export const MessageStats = props => {
  const [period, setPeriod] = useState(24);
  const { messages } = props;

  const count = {
    sent: 0,
    delivered: 0,
    undelivered: 0,
    failed: 0
  };

  const filteredMessages = messages.filter(message => {
    const messageTimestamp = Math.round(new Date(message.dateTime).getTime() / 1000);
    const currentTimestamp = Math.round(new Date().getTime() / 1000);
    const timeDifference = currentTimestamp - messageTimestamp;
    const periodSeconds = period * 3600;
    const filtered = timeDifference < periodSeconds;
    if (filtered) count[message.status]++;
    return filtered;
  });

  const handlePeriodChange = value => {
    setPeriod(Number(value));
  };

  return (
    <>
      <Dropdown
        options={messagePeriodOptions}
        value={period}
        label="Select Period"
        id="message-period-option"
        onChange={handlePeriodChange}
      />
      <Card>
        <Text>Total: {filteredMessages.length}</Text>
        <Text>Sent: {count.sent}</Text>
        <Text>Delivered: {count.delivered}</Text>
        <Text>Undelivered: {count.undelivered}</Text>
        <Text>Failed: {count.failed}</Text>
      </Card>
    </>
  );
};

MessageStats.propTypes = {
  messages: PropTypes.array.isRequired
};
