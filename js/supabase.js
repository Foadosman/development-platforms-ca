import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://ttsrdngoggfvyswsytkw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0c3JkbmdvZ2dmdnlzd3N5dGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1ODQ5MjMsImV4cCI6MjEwMzE2MDkyM30.aZh2QWFJPO_Hk1Giq0clLNd_XtUKqLfMaFOwV8dlPmI";

export const supabase = createClient(supabaseUrl, supabaseKey);