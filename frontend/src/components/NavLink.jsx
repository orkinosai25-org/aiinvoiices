"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Compatibility wrapper for react-router's <NavLink>.
 * Supports the render-prop patterns used in the original app for both
 * `className` and `children`, providing an `{ isActive }` argument.
 *
 * Accepts either `to` (react-router style) or `href` (next/link style).
 */
export default function NavLink({ to, href, className, children, onClick, ...rest }) {
  const pathname = usePathname();
  const target = href ?? to ?? "/";

  const isActive =
    pathname === target || (target !== "/" && pathname.startsWith(target + "/"));

  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  const resolvedChildren =
    typeof children === "function" ? children({ isActive }) : children;

  return (
    <Link href={target} className={resolvedClassName} onClick={onClick} {...rest}>
      {resolvedChildren}
    </Link>
  );
}
