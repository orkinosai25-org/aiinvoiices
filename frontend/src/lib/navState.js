// In-memory navigation state store used to replicate react-router's
// `navigate(path, { state })` -> `useLocation().state` behavior.
//
// The original app passed an in-memory object (e.g. an invoice) between routes.
// Next.js App Router has no built-in equivalent, so we keep the latest pushed
// state in a module-level variable. Because client-side navigations keep the JS
// module loaded, the destination screen can read it once on mount. It is
// consumed (cleared) on read so it does not leak into unrelated navigations,
// exactly like react-router's per-navigation state (which is also lost on
// refresh).

let _state = null;

export function setNavState(state) {
  _state = state ?? null;
}

export function consumeNavState() {
  const s = _state;
  _state = null;
  return s;
}
