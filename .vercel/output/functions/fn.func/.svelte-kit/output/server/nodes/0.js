

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e91eb335.js","_app/immutable/chunks/scheduler.38d75d6d.js","_app/immutable/chunks/index.81e1261a.js"];
export const stylesheets = ["_app/immutable/assets/0.98a6b768.css"];
export const fonts = [];
