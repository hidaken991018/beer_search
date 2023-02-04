import { supabase } from 'src/utils/supabaseClient';

export class FetchBeer {
  public getBeer = async () => {
    try {
      const { data, error } = await supabase.from('beer').select('*');
      if (error) console.log(error);
      if (data) return data;
    } catch (error: any) {
      console.log(error);
      return undefined;
    }
  };
}
