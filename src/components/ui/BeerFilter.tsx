import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Selector } from 'src/components/ui/Selector';

export const BeerFilter = () => {
  const beerStyles: string[] = ["ペールエール", "IPA", "ヘイジー", "ピルスナー", "ヴァイツェン", "ホワイト", "ペルジャンエール", "セゾン", "サワービール", "独自スタイル", "ペールエール", "IPA", "ヘイジー", "ピルスナー", "ヴァイツェン", "ホワイト", "ペルジャンエール", "セゾン", "サワービール", "独自スタイル"]
  const breweries: string[] = ["Y.MARKET", "伊勢角谷麦酒", "サンクトガーレン", "かまどブリュワリー", "箕面ビール", "横浜ビール", "coedo", "うちゅう", "常陸野", "WEST COAST", "志賀高原", "ノムクラフト", "あすなろブリュワリー"]

  return (
    <div>
      <Accordion style={{ border: "solid" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>絞り込み</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion style={{ border: "solid" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>ブリュワリーで選ぶ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Selector selector={breweries} />
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ border: "solid" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ビアステイルで選ぶ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Selector selector={beerStyles} />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div style={{ color: "black", textAlign: "right", margin: "10px 40px" }}>
            <Button variant="contained" color='inherit' style={{ backgroundColor: "#FFB525", border: "solid black" }}>検索</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}