import { NextPage } from 'next';
import { BeerPostForm } from 'src/components/ui/BeerPostForm';

/**
 * ユーザ自身がビール情報を投稿するページ
 */
const PostBeer: NextPage = () => {
  return (
    <>
      <BeerPostForm />
    </>
  );
};

export default PostBeer;
