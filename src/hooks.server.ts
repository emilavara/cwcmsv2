import { svelteKitHandler } from "better-auth/svelte-kit";
import { auth } from "$cmslib/server/auth";
import { connectContentMongo } from "$cmslib/server/contentMongo";
import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

await connectContentMongo();

export const handle: Handle = async ({ event, resolve }) => {
    return svelteKitHandler({ event, resolve, auth, building });
};
