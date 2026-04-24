import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-6 py-12">
      <section className="w-full rounded-2xl border border-amber-500/20 bg-background/80 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Admin Access</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">Connexion</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Connecte-toi avec un compte admin pour acceder a l&apos;edition des personnages.
        </p>

        <div className="mt-6">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}

