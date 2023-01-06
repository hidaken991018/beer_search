/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link"
import { Logo } from "src/components/atoms/Logo";
import { NavLink } from "src/models/common"



export const Footer = () => {
  const navText = css({
    fontSize: "14px",
    color: 'white',
    margin: "13px 35px auto 0px",
  });

  const footer = css({
    width: "100vw",
    height: "200px",
    backgroundColor: "black",
    // position: "absolute",
    bottom: "0"

  });

  const navWrapper = css({
    display: "flex",
    justifyContent: "space-around",
  })

  const serviceNavLinks: NavLink[] = [
    { name: "ホーム", link: "/" },
    { name: "おすすめ", link: "/recommend" },
    { name: "店舗を探す", link: "/search/shop" },
    { name: "ビールを探す", link: "/search/beer" },
  ]

  const mypageNavLinks: NavLink[] = [
    { name: "マイページ", link: "/mypage" },
    { name: "いいね履歴", link: "/history/like" },
    { name: "レビュー履歴", link: "/history/review" },
    { name: "カートを見る", link: "/cart" },
  ]

  const contactNavLinks: NavLink[] = [
    { name: "よくある質問/お問い合せ", link: "/contact" },
    { name: "運営", link: "company" },
  ]

  const managerNavLinks: NavLink[] = [
    { name: "商品情報登録", link: "/register/beer" },
    { name: "店舗情報登録", link: "/register/shop" },
  ]
  return (
    <>
      <footer css={footer}>
        <div css={navWrapper}>
          <div css={""} style={{ marginTop: "30px" }}>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            <ul style={{ margin: 0 }}>
              {serviceNavLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={navLink.link} >
                    <a>
                      <p css={navText}>{navLink.name}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul style={{ margin: 0 }}>
              {mypageNavLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={navLink.link} >
                    <a>
                      <p css={navText}>{navLink.name}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul style={{ margin: 0 }}>
              {contactNavLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={navLink.link} >
                    <a>
                      <p css={navText}>{navLink.name}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul style={{ margin: 0 }}>
              {managerNavLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={navLink.link} >
                    <a>
                      <p css={navText}>{navLink.name}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ color: "white", textAlign: "center" }}>©　2023　CRAFTERS</p>
      </footer>
    </>
  )
}