import { supabase } from "@shared/supabase";
import { PostWithLinks } from "../types/post.types";


export async function getPostsWithLinks(): Promise<PostWithLinks[]> {
    const {data: posts, error} = await supabase
    .from('posts')
    .select(`
        *,
        links ( * )
    `)
    .order('publish_date', { ascending: false })

    if (error || !posts.length) {
        console.log('Error getting posts: ' + error)
        throw new Error('Error getting posts')
    }
    return posts 
}