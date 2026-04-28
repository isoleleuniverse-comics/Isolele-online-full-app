import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazySection<T extends Record<string, React.ComponentType<any>>>(
  importFn: () => Promise<T>,
  exportName: keyof T
) {
  return dynamic(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => importFn().then((mod) => ({ default: mod[exportName] as React.ComponentType<any> })),
    { loading: () => <div className="h-96 bg-background" />, ssr: true }
  );
}
