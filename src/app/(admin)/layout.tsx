
	import { requireAdmin } from "@/lib/auth/require-admin"
	import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin/admin-sidebar" // On va le créer
import { Toaster } from "@/components/ui/sonner"

	export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	    await requireAdmin()
	    return (
	        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background text-foreground">
                {/* Barre latérale type Notion */}
                <AdminSidebar />

                <main className="flex-1 overflow-y-auto">
                    {/* Header discret avec le bouton pour masquer la sidebar */}
                    <header className="flex h-14 items-center border-b px-6 sticky top-0 bg-background/80 backdrop-blur">
                        <SidebarTrigger className="-ml-1" />
                        <div className="ml-4 font-semibold text-amber-500 uppercase tracking-widest">
                            Isolele Command Center
                        </div>
                    </header>

                    {/* C'est ici que s'afficheront nos pages de gestion */}
                    <div className="p-8 max-w-5xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <Toaster position="bottom-right" />
        </SidebarProvider>
    )
}
