import React from 'react';
import { SaveAPIForm } from './SaveAPIForm';
import { Container } from '../../ui-library/Container';
import { useSettingHook } from '../../hooks/Setting';

export const Setting = () => {
  const { handleSaveClick } = useSettingHook();

  return (
    <Container>
      <SaveAPIForm onSaveClick={handleSaveClick} />
    </Container>
  );
};
