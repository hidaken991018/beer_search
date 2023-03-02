import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NAVI_LINKS } from 'src/utils/constants';
import Link from 'next/link';
import { Logo } from 'src/components/atoms/Logo';
/**
 * 画面左側のメニューバー
 * @returns
 */
export const SideBar: () => JSX.Element = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      // 背景色
      PaperProps={{
        sx: { backgroundColor: 'black' },
      }}
      //スタイル(背景色以外)
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor={'left'}
      open={true}
    >
      <Box role="presentation">
        {/* ロゴ */}
        <div className="max-w-5xl mx-auto pt-5 pl-5">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <List>
          {/* サイドメニュー一覧 */}
          {NAVI_LINKS.map((nav, index) => (
            <Link href={nav.link} key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <InboxIcon sx={{ color: 'white' }} />
                    ) : (
                      <MailIcon sx={{ color: 'white' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={nav.name} sx={{ color: 'white' }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
