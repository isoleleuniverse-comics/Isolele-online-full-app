import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function HeaderBackButton({ color }: { color: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-white/5"
      style={{ color, borderColor: `${color}45` }}
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>
  );
}
