import React from 'react';
import { SaveAPIForm } from './SaveAPIForm';
import { Container } from '../../ui-library/Container';
import { useSettingHook } from '../../hooks/Setting';
import { SavedAPI } from './SavedAPI';

export const Setting = () => {
  const { handleSaveClick, hasSettings, apiKey, apiSecret, apiDisplayName } = useSettingHook();

  return (
    <Container>
      <SavedAPI
        apiKey={apiKey}
        apiSecret={apiSecret}
        apiDisplayName={apiDisplayName}
        hasSettings={hasSettings}
      />
      <SaveAPIForm hasSettings={hasSettings} onSaveClick={handleSaveClick} />
    </Container>
  );
};
