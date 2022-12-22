import Link from "next/link";

type Props = {
    shareText:string;
    shareHashtag:string;
    shareUrl:string;
}

const TwitterShare = (props: Props) => {
    const { shareText, shareHashtag, shareUrl} = props;

    const shareToSNS = `https://twitter.com/share?url=${shareUrl}&text=${shareText}&hashtag=${shareHashtag}`
    return<>
    {/* TODO Twitter画像 */}
    <Link href={shareToSNS}>
    <button> Twitter</button>
    </Link>
    </>
}

export default TwitterShare