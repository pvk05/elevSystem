

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/finnElev/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.2b6ae1c9.js","_app/immutable/chunks/scheduler.38d75d6d.js","_app/immutable/chunks/index.81e1261a.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/nav.e1333710.js","_app/immutable/chunks/index.1e34d309.js"];
export const stylesheets = ["_app/immutable/assets/nav.4f1e9ba5.css"];
export const fonts = [];
