import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Selector } from 'src/components/ui/Selector';
import { BREWERIES, BEER_STYLES } from 'src/utils/constants';

/**
 * ビール絞り込み
 * @returns
 */
export const BeerFilter = () => {
  return (
    //  アコーディオン(大)
    <Accordion style={{ border: 'solid' }}>
      {/* アコーディオン(大)要約 */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* タイトル */}
        <Typography>絞り込み</Typography>
      </AccordionSummary>
      {/* アコーディオン(大)詳細 */}
      <AccordionDetails>
        {/* アコーディオン(小-1) */}
        <Accordion style={{ border: 'solid' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>ブリュワリーで選ぶ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Selector selector={BREWERIES} />
          </AccordionDetails>
        </Accordion>
        {/* アコーディオン(小-2) */}
        <Accordion style={{ border: 'solid' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>ビアステイルで選ぶ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Selector selector={BEER_STYLES} />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div
          style={{ color: 'black', textAlign: 'right', margin: '10px 40px' }}
        >
          <Button
            variant="contained"
            color="inherit"
            style={{ backgroundColor: '#FFB525', border: 'solid black' }}
          >
            検索
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
