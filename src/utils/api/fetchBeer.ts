import { supabase } from 'src/utils/supabaseClient';

export class FetchBeer {
  public getBeer = async (): Promise<any[] | undefined> => {
    try {
      const { data, error } = await supabase.from('beer').select('*');
      if (error) console.log(error);
      if (data) return data;
      return undefined;
    } catch (error: any) {
      console.log(error);
      return undefined;
    }
  };
}
