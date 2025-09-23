import { svelteKitHandler } from "better-auth/svelte-kit";
import { auth } from "$cmslib/server/auth";
import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    return svelteKitHandler({ event, resolve, auth, building });
};