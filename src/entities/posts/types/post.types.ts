import { Database } from "@/shared/supabase"

export type Post = Database["public"]["Tables"]["posts"]["Row"]
export type Link = Database["public"]["Tables"]["links"]["Row"]
export type PostWithLinks = Post & { links: Link[] }
