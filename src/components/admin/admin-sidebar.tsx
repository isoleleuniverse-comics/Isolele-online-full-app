"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, LayoutDashboard, LogOut, Shield, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
  { title: "Pages (CMS)", href: "/admin/pages", icon: LayoutDashboard },
  { title: "Les Elus (Characters)", href: "/admin/characters", icon: Users },
  { title: "Bibliotheque (Books)", href: "/admin/books", icon: BookOpen },
  { title: "Utilisateurs", href: "/admin/users", icon: Shield },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-amber-900/10">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-black tracking-tighter text-amber-600 group-data-[collapsible=icon]:hidden">
            ISOLELE
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] uppercase tracking-widest opacity-50">
            Gestion du contenu
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.title}
                  className="transition-colors hover:bg-amber-500/10"
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="size-4" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-amber-900/5 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-muted-foreground transition-colors hover:text-red-500">
              <LogOut className="size-4" />
              <span>Deconnexion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
