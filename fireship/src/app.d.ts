// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
declare module '$env/static/private' {
	export const FB_CLIENT_EMAIL: string;
	export const FB_PRIVATE_KEY: string;
	export const FB_PROJECT_ID: string;
}
export {};
