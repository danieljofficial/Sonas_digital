import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/signup"); // Server-side redirect (happens before rendering)
}
