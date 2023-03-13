import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Link from "@/components/atoms/Link";

export default function ErrorPage() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <>
      <Typography variant="h1" textAlign="center">
        Something went wrong.
      </Typography>
      <Typography variant="h2" textAlign="center">
        Status Code - ${status}
      </Typography>
      <Typography variant="h2" textAlign="center">
        Go to <Link href="/">Home</Link> page.
      </Typography>
    </>
  );
}
