import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6 border-b border-gray-2">
        <Link href="#" className="text-lg font-semibold" prefetch={false}>
          targeteater.xyz
        </Link>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Button className="hover:underline hover:underline-offset-4">
            Contact
          </Button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full bg-background text-white relative">
        <div aria-hidden="true" className="flex absolute -top-50 start-1/2 transform -translate-x-1/2">
          <div className="w-96 h-96 bg-gradient-to-br from-green-500 to-purple-500 rounded-full filter blur-[80px] opacity-20 animate-blob"></div>
        </div>

        <div className="mt-5 max-w-4xl">
          <h1 className="font-display text-center drop-shadow-sm text-4xl font-extrabold tracking-tight lg:text-7xl" style={{ opacity: 1, willChange: 'auto' }}>
            <span style={{ display: 'inline-block', paddingRight: 8, opacity: 1, willChange: 'auto', transform: 'none' }}>Targeteater</span>
          </h1>
        </div>

        <div className="mt-2 max-w-5xl">
          <p className="text-l font-semibold text-muted-foreground">Hello these are the programming languages I know at the momment: Luau, TypeScript, Javascript, Python, Html & Css.</p>
        </div>

        <div className="mt-3">
          <Button className="hover:underline hover:underline-offset-4" variant={"outline"}>
            Contact
          </Button>
        </div>
      </main>
    </div>
  );
}