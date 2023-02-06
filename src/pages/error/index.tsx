import { Typography } from "@mui/material";
import Link from "@/components/atoms/Link";

export default function ErrorPage() {
  return (
    <>
      <Typography variant="h1" textAlign="center">
        Something went wrong.
      </Typography>
      <Typography variant="h2" textAlign="center">
        Go to <Link href="/">Home</Link> page.
      </Typography>
    </>
  );
}
