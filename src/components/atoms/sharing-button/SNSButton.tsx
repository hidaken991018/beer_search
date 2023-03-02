import Image from 'next/image';
import Link from 'next/link';

type Props = {
  iconImagePath: string;
  linkUrl: string;
};

/**
 * SNSシェアボタン
 * @param props
 * @returns
 */
export const SNSButton = (props: Props) => {
  const { iconImagePath, linkUrl } = props;

  // const shareToSNS = `https://twitter.com/share?url=${shareUrl}&text=${shareText}&hashtag=${shareHashtag}`
  return (
    <>
      {/* TODO Twitter画像 */}
      <Link href={linkUrl}>
        <a target={'_blank'}>
          <Image src={iconImagePath} alt="" layout="fill" />
        </a>
      </Link>
    </>
  );
};
