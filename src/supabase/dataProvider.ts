import { supabaseDataProvider} from 'ra-supabase';
import { supabase } from './supabase';

const dataProviderConfig = {
    instanceUrl: 'https://supabase.tawfek.cloud',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzA4OTg4NDAwLAogICJleHAiOiAxODY2ODQxMjAwCn0.DgCEgvCGwdNHrAZDpnZShZ1OP_hHrIMsbR8XxEO7IeI',
    supabaseClient: supabase
};

const dataProvider = supabaseDataProvider(dataProviderConfig);

export default dataProvider;
