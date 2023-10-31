

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.67bbc064.js","_app/immutable/chunks/scheduler.38d75d6d.js","_app/immutable/chunks/index.81e1261a.js","_app/immutable/chunks/nav.e1333710.js","_app/immutable/chunks/index.1e34d309.js"];
export const stylesheets = ["_app/immutable/assets/nav.4f1e9ba5.css"];
export const fonts = [];
