import Typography from "@mui/material/Typography";
import Link from "@/components/atoms/Link";

export default function Error404() {
  return (
    <>
      <Typography variant="h1" textAlign="center">
        404 - Page not found.
      </Typography>
      <Typography variant="h2" textAlign="center">
        Go to <Link href="/">Home</Link> page.
      </Typography>
    </>
  );
}
