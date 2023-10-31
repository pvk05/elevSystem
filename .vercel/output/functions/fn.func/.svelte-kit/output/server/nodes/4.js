

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faglister/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.376b536d.js","_app/immutable/chunks/scheduler.38d75d6d.js","_app/immutable/chunks/index.81e1261a.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/nav.e1333710.js","_app/immutable/chunks/index.1e34d309.js","_app/immutable/chunks/list.155fb1d8.js"];
export const stylesheets = ["_app/immutable/assets/nav.4f1e9ba5.css"];
export const fonts = [];
