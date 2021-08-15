import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useMUITextField = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(() => "")
  }

  return {
    onChange,
    value,
    reset,
  };
};