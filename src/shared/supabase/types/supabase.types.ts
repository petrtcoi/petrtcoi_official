export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          created_at: string | null
          id: number
          post_id: number
          type: Database["public"]["Enums"]["website_enum"]
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          post_id: number
          type: Database["public"]["Enums"]["website_enum"]
          url: string
        }
        Update: {
          created_at?: string | null
          id?: number
          post_id?: number
          type?: Database["public"]["Enums"]["website_enum"]
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "links_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          created_at: string
          description: string
          id: number
          keywords: string[]
          publish_date: string
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          keywords: string[]
          publish_date: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          keywords?: string[]
          publish_date?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      website_enum: "dev.to" | "vc.ru"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
