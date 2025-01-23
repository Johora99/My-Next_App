

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();
  return (await isAuthenticated()) ? (
    <section className="container mx-auto min-h-screen">
        <p className="text-3xl font-semibold mt-10"> {user?.given_name} {user?.family_name} , Welcome to your profile!</p>
    </section>
  ) : (
    <div className="container mx-auto min-h-screen text-2xl">
       This page is protected, please <LoginLink className="font-bold underline">Login</LoginLink> to view it
    </div>
  );
}