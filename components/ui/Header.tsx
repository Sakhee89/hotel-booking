import React from "react";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
const Header = async (props: Props) => {
  const session = await auth();
  console.log(session);
  return (
    <header className="flex justify-end">
      <div>
        {session?.user ? (
          <div>
            {session.user.name && session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={32}
                height={32}
              />
            )}
            <SignOut />
          </div>
        ) : (
          <Link href="/api/auth/signin">
            <button>Sign in</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
