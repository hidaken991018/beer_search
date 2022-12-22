import Link from "next/link";

type Props = {
    shareText:string;
    shareUrl:string;
}

const LineShare = (props: Props) => {
    const {shareText, shareUrl} = props;
    const shareToSNS = `https://social-plugins.line.me/lineit/share?url=${shareUrl}&text=${shareText}`
    return(
        <>
        <Link href={shareToSNS}>
        {/* TODO　lineアイコン適用 */}
        <button>LINE</button>
        </Link>
        </>
    )
}

export default LineShare