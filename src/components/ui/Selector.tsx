import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

type Props = {
  selector: string[];
};

/**
 * セレクトボタン群(複数選択可)
 * @param props
 * @returns
 */
export const Selector = (props: Props) => {
  const { selector } = props;
  const [formats, setFormats] = useState<string[]>(() => ['']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {selector.map((style, index) => (
        <ToggleButton
          value={style + index}
          aria-label={style + index}
          key={index}
        >
          {style}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
