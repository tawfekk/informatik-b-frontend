import { supabaseDataProvider} from 'ra-supabase';
import { supabase } from './supabase';

const dataProviderConfig = {
    instanceUrl: 'http://app029',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzA4OTg4NDAwLAogICJleHAiOiAxODY2ODQxMjAwCn0.0IrouNcf2KLf6-58bezCVGKrQ8co8Ky9_pjkZJyEIak',
    supabaseClient: supabase
};

export const dataProvider = supabaseDataProvider(dataProviderConfig);

export default dataProvider;
