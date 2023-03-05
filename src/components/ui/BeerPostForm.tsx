import Image from 'next/image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createRef, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  image: string;
  comment: string;
  brewery: string;
  productName: string;
  beerStyle: string;
  shop: string;
};

/**
 * 投稿フォーム
 * @returns
 */
export const BeerPostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('data', data);
    console.log(createObjectURL);
  };

  //投稿用画像
  const [image, setImage] = useState(null);
  //投稿用画像URL
  const [createObjectURL, setCreateObjectURL] = useState('');

  /**
   * ローカルからクライアントへ画像をアップロード
   * @param event
   */
  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
    }
  };
  return (
    <Box
      component="form"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={3} sx={{ width: '100%', m: 1 }}>
        {/* 画像（1枚）必須 */}
        {/* 参考：　https://masa-engineer-blog.com/next-js-firebase-file-upload/  */}
        <Grid container spacing={2}>
          <Grid item xs={6} className="flex justify-center items-center ">
            {image ? (
              <div className="flex justify-center items-center h-full w-60 relative border-solid border-2 border-gray">
                <Image
                  src={createObjectURL}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ) : (
              <>
                <div className="h-full w-60 overflow-hidden relative bg-gray-100 border-solid border-2 border-gray">
                  <p className="text-gray-400"> no image</p>
                  {errors.image && (
                    <p className="text-red-300 text-sm">
                      画像をアップロードしてください
                    </p>
                  )}
                </div>
              </>
            )}
            <div className="flex justify-center items-center">
              <IconButton
                sx={{ color: 'black' }}
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  {...register('image', { required: true })}
                  onChange={uploadToClient}
                />
                <AddPhotoAlternateIcon />
              </IconButton>
            </div>
            {/* <Grid item xs={8}>? */}

            {/* </Grid> */}
          </Grid>
          {/* コメント 任意 ,上限300文字*/}
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={false}
                  sx={{ width: '100%' }}
                  id="outlined-multiline-static"
                  label="コメント"
                  multiline
                  rows={4}
                  defaultValue=""
                  helperText={false && 'Incorrect entry.'}
                  {...register('comment')}
                />
              </Grid>

              {/* ビール情報1(ブリュワリー)任意 、上限1つ*/}
              <Grid item xs={6}>
                <Autocomplete
                  // multiple
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  filterSelectedOptions
                  {...register('brewery')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ブリュワリー"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Grid>
              {/* ビール情報2(スタイル)任意　上限1つ*/}
              <Grid item xs={6}>
                <Autocomplete
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  {...register('beerStyle')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="スタイル"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Grid>
              {/* ビール情報3(商品名)任意　上限1つ*/}
              <Grid item xs={6}>
                <Autocomplete
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  {...register('productName')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ビール商品名"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Grid>
              {/* 購入・飲食店舗 任意, 上限1つ*/}
              <Grid item xs={6}>
                <Autocomplete
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  {...register('shop')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ビール商品名"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* 投稿ボタン */}
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              sx={{ color: 'black', border: '1px solid black' }}
              size="large"
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
            >
              <SportsBarIcon sx={{ color: 'black' }} /> 投稿する
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
