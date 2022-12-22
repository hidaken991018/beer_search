/** @jsxImportSource @emotion/react */
import TwitterShareButton from "src/components/atoms/sharing-button/TwitterShare"
import LineShareButton from "src/components/atoms/sharing-button/LineShare"
import { css } from '@emotion/css'

const PCHeader =  () => {
    const buttonsWrappter = css({
        display:"flex"
      });

    return(
        <>
        {/* TODOロゴイメージ */}
        <p>CRAFTERS</p>
        {/* シェアボタン */}
        <div css={buttonsWrappter}>
            {/* TODOシェア内容 */}
            <TwitterShareButton
            shareHashtag=""
            shareText=""
            shareUrl=""/>
            <LineShareButton
            shareText=""
            shareUrl=""/>
        </div>
        </>
    )
    
}

export default PCHeader