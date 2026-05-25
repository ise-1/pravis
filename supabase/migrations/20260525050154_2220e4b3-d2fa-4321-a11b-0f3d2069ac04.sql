
-- Tighten public insert policy with basic validation
DROP POLICY "Anyone can submit enquiries" ON public.enquiries;
CREATE POLICY "Anyone can submit enquiries" ON public.enquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 255
    AND length(mobile) BETWEEN 4 AND 30
    AND length(interested_service) BETWEEN 1 AND 100
    AND (city IS NULL OR length(city) <= 100)
    AND (details IS NULL OR length(details) <= 500)
    AND (message IS NULL OR length(message) <= 2000)
    AND status = 'new'
  );

-- Restrict role-check function execution
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
