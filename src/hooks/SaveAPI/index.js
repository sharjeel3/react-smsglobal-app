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

  return { handleChange };
};
