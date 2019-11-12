import React from 'react';
import { Dropdown } from '../../../ui-library/Dropdown';
import { Card } from '../../../ui-library/Card';
import { Text } from '../../../ui-library/Text';
import { useMessageStatsHook } from '../../../hooks/MessageStats';

const messagePeriodOptions = [
  { name: '24 hours', value: 24 },
  { name: '48 hours', value: 48 },
  { name: '3 days', value: 72 },
  { name: '5 days', value: 96 },
  { name: '7 days', value: 120 }
];

export const MessageStats = () => {
  const { period, onPeriodChange, count, filteredMessages } = useMessageStatsHook();

  return (
    <>
      <Dropdown
        options={messagePeriodOptions}
        value={period}
        label="Select Period"
        id="message-period-option"
        onChange={onPeriodChange}
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
