import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap page-heading">
      <p className="kicker">404</p>
      <h1>Page unavailable</h1>
      <p className="lede">Explore the project index to find a case study.</p>
      <Link className="button primary" href="/#work">
        Browse projects
      </Link>
    </div>
  );
}
