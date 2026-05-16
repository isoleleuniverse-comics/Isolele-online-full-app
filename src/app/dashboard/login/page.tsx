import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CmsLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-white">
      <form
        action="/api/cms/login"
        method="post"
        className="w-full max-w-sm rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-white text-black">
            <LockKeyhole className="size-4" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">ISOLELE CMS</h1>
            <p className="text-sm text-white/55">Private editorial access</p>
          </div>
        </div>
        <label className="mb-2 block text-sm font-medium" htmlFor="password">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="h-10 border-white/15 bg-white/10 text-white placeholder:text-white/35"
        />
        <Button className="mt-5 h-10 w-full" type="submit">
          Enter dashboard
        </Button>
      </form>
    </main>
  );
}
