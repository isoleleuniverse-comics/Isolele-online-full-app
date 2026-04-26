import {createServerClient as createClient} from "@supabase/ssr";
import {cookies} from "next/headers";

/**
 * Crée un client Supabase pour une utilisation exclusive côté serveur.
 * Important : Ne jamais stocker ce client dans une variable globale.
 * Toujours appeler cette fonction à l'intérieur de chaque action ou route.
 */

export async function createServerClient() {
    const cookieStore = await cookies()

    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL! as string,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! as string,
        {
            cookies:{
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({name, value, options}) => {
                            cookieStore.set({
                                name,
                                value,
                                ...options
                            })
                        })
                    } catch {
                        // Gérer l'erreur silencieusement
                    }
                }
            }
        }
    )
}
                 