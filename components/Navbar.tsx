export type Page = { id: string; label: string };

type NavbarProps = {
  pages: Page[];
  activePage: string;
  onChange: (id: string) => void;
};

export default function Navbar({ pages, activePage, onChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page.id}>
            <button
              className={`navbar-link ${activePage === page.id ? "active" : ""}`}
              onClick={() => onChange(page.id)}
            >
              {page.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
