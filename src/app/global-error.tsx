"use client";
import { Button, Result } from "antd";
import PublicLayout from "@/components/layouts/PublicLayout";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <PublicLayout>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
          />
        </PublicLayout>
      </body>
    </html>
  );
}
