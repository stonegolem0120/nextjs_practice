import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-white font-semibold text-lg cursor-pointer">Home</span>
        </Link>
        
        <div className="space-x-4">
          <Link href="/post">
            <span className="text-white hover:underline cursor-pointer">Post</span>
          </Link>
          <Link href="/sinder">
            <span className="text-white hover:underline cursor-pointer">Sinder</span>
          </Link>
          <Link href="/login">
            <span className="text-white hover:underline cursor-pointer">Login</span>
          </Link>
          <Link href="/signin">
            <span className="text-white hover:underline cursor-pointer">Sign In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
