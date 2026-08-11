import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vppzvlsfglmdsciqapvs.supabase.co';  // sua URL
const supabaseAnonKey = 'sb_publishable_XpEWwOWXwsJkxc0MwrlNxQ_B7IF6jk0';               // sua chave anon

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
  },
});