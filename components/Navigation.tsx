"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
const links = [
  ["/", "Home"],
  ["/lab/", "UCSD Lab Work"],
  ["/hardware/", "Hardware Projects"],
  ["/publications/", "Publications"],
];

export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    const resize = () => {
      if (window.matchMedia("(min-width: 901px)").matches) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <div
      className="navigation"
      ref={wrapper}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="menu-button"
        ref={button}
        aria-controls="primary-nav"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
        <span>Menu</span>
      </button>
      <nav
        id="primary-nav"
        aria-label="Primary"
        className={open ? "nav-links is-open" : "nav-links"}
      >
        {links.map(([url, label]) => {
          const active =
            url === "/" ? path === "/" : (path + "/").startsWith(url);
          return (
            <Link
              key={url}
              className={active ? "nav-active" : ""}
              aria-current={
                active
                  ? path.replace(/\/$/, "") === url.replace(/\/$/, "")
                    ? "page"
                    : "location"
                  : undefined
              }
              onClick={() => setOpen(false)}
              href={url}
            >
              {label}
            </Link>
          );
        })}
        <a
          className="contact-button"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          <Mail size={15} />
          Contact
        </a>
      </nav>
    </div>
  );
}
