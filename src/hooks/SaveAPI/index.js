import { useDispatch } from 'react-redux';
import { updateFormField, updatePartialFormField } from '../../redux/actions/form';
import { FormModule } from '../../lib/Form';

export const useSaveAPIFormHook = () => {
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(
      updateFormField({
        [field]: {
          field,
          value,
          touch: true,
          message: FormModule.validate(field, value).message
        }
      })
    );
  };

  const updateFields = fieldsData => {
    const length = fieldsData.length;
    for (let ii = 0; ii < length; ii++) {
      dispatch(
        updatePartialFormField({
          field: fieldsData[ii].field,
          data: fieldsData[ii].data
        })
      );
    }
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

  return { handleChange, resetForm, updateFields };
};
