export function getBaseUrl(): string {
  const base = () => {
    if (process.env.VERCEL_URL) {
      return process.env.VERCEL_URL;
    } else {
      return `localhost:${process.env.PORT || 3000}`;
    }
  };

  return `https://${base()}`;
}
