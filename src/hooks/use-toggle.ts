import { useCallback, useState } from 'react';

export default function useToggle(init = false) {
  const [checked, setChecked] = useState(init);
  const onChange = useCallback(() => setChecked((s) => !s), []);

  return { checked, onChange } as const;
}
