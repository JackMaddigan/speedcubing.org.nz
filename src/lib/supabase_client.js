import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

async function signIn() {
  try {
    const { data, error } = await supabase.auth.signInAnonymously({
      options: {
        // no options data required for now
      }
    });

    if (error) {
      console.error('Error signing in:', error.message);
    }
  } catch (err) {
    console.error('Unexpected error during sign-in:', err);
  }
}

signIn();
