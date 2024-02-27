import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('http://app029:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzA4OTg4NDAwLAogICJleHAiOiAxODY2ODQxMjAwCn0.0IrouNcf2KLf6-58bezCVGKrQ8co8Ky9_pjkZJyEIak');
