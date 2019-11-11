import { useDispatch } from 'react-redux';
import { updateFormField } from '../../redux/actions/form';

export const useSaveAPIFormHook = () => {
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(
      updateFormField({
        [field]: {
          field,
          value,
          touch: true,
          message: ''
        }
      })
    );
  };

  const resetForm = fields => {
    const payload = Object.assign(
      {},
      ...fields.map(field => ({
        [field]: {
          field,
          value: '',
          touch: false,
          message: ''
        }
      }))
    );
    dispatch(updateFormField(payload));
  };

  return { handleChange, resetForm };
};
