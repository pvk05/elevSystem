

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.67b0390f.js","_app/immutable/chunks/scheduler.38d75d6d.js","_app/immutable/chunks/index.81e1261a.js","_app/immutable/chunks/singletons.3cad31eb.js","_app/immutable/chunks/index.1e34d309.js"];
export const stylesheets = [];
export const fonts = [];
