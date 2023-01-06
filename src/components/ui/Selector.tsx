import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

type Props = {
  selector: string[]
}

export const Selector = (props: Props) => {
  const { selector } = props;
  const [formats, setFormats] = useState<string[]>(() => [""]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };


  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {selector.map((style, index) => (
        <ToggleButton value={style + index} aria-label={style + index} key={index}>
          {style}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}