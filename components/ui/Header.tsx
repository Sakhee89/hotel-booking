import React from "react";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";

type Props = {};

function SignOut(): React.JSX.Element {
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
  const session: Session | null = await auth();
  return (
    <header>
      <div>
        {session?.user ? (
          <div className="flex items-center">
            {session.user.name && session.user.image && (
              <Image
                className="mr-5 rounded-full"
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
