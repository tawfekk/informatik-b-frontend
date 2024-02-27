import { supabaseAuthProvider } from 'ra-supabase';
import { supabase } from './supabase';

export const authProvider = supabaseAuthProvider(supabase, {
    getIdentity: async user => {
       // const { data, error } = await supabase
         //   .from('userProfiles')
           // .select('id')
            //.match({ email: user.email })
            //.single();

        if (!data || error) {
            //throw new Error();
        }
        return {
            id: user.id
        };
    },
});

export default authProvider;

