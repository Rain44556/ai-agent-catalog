import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          Agent.Ai catalog
        </h1>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for Agents"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-4">
          <Button variant="outline" className="rounded-sm p-5">
            Login
          </Button>
          <Button variant="outline" className="rounded-sm p-5">
           Signup
          </Button>
        </nav>
      </div>
    </header>
  );
}