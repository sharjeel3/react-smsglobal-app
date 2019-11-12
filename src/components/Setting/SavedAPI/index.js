import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../../ui-library/Card';
import { Text } from '../../../ui-library/Text';

export const SavedAPI = props => {
  const { hasSettings, apiDisplayName, apiKey, apiSecret } = props;

  return (
    <>
      {hasSettings ? (
        <>
          <Text heading>Saved API settings</Text>
          <Text>You have previously saved following key in this browser</Text>
          <Card>
            <Text bold>{apiDisplayName}</Text>
            <Text>API key: {apiKey}</Text>
            <Text>API secret: {apiSecret}</Text>
          </Card>
        </>
      ) : null}
    </>
  );
};

SavedAPI.propTypes = {
  hasSettings: PropTypes.bool.isRequired,
  apiDisplayName: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  apiSecret: PropTypes.string.isRequired
};
