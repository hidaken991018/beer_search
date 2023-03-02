/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Logo } from 'src/components/atoms/Logo';
import { NAVI_LINKS } from 'src/utils/constants';

export const Header = () => {
  const header = css({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: '70px',
    backgroundColor: 'black',
    top: '0',
  });

  const nav = css({
    display: 'flex',
  });

  const navText = css({
    fontSize: '14px',
    color: 'white',
    margin: '8px 35px auto 0px',
  });

  const iconWrapper = css({
    margin: ' 16px 0px',
  });

  const icon = css({
    margin: '0px 10px',
  });

  return (
    <div css={header}>
      <div css={''} style={{ marginTop: '20px' }}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul css={nav}>
          {NAVI_LINKS.map((navLink, index) => (
            <li key={index}>
              <Link href={navLink.link}>
                <a>
                  <p css={navText}>{navLink.name}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ color: 'white' }} css={iconWrapper}>
        <Link href="##1">
          <a>
            <PersonIcon color="inherit" css={icon} />
          </a>
        </Link>
        <Link href="##2">
          <a>
            <ShoppingCartIcon color="inherit" css={icon} />
          </a>
        </Link>
      </div>
    </div>
  );
};
