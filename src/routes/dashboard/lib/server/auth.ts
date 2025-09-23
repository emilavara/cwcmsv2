import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { getDb } from "./mongo";

const dbPromise = getDb(); // ensure a single shared connection

export const auth = betterAuth({
    database: mongodbAdapter(await getDb()),
    plugins: [sveltekitCookies(getRequestEvent)], // keep this last
    emailAndPassword: {
        enabled: true,
    },
});