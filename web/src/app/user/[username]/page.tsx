import PublicUserProfile from "./UserClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ username: "placeholder" }];
}

export default function Page() {
  return <PublicUserProfile />;
}
