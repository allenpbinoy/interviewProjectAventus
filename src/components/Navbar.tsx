import { Link, useLocation } from "react-router-dom";
import { usePages } from "../hooks/usePages";
import { useTheme } from "../hooks/useTheme";

const Navbar: React.FC = () => {
  const pages = usePages();
  const theme = useTheme();
  const location = useLocation();

  return (
    <nav
      className="flex items-center gap-6 px-8 py-4 shadow-md sticky top-0 z-50"
      style={{
        backgroundColor: theme.colors.navbar,
      }}
    >
      {pages.map((page) => {
        const isActive = location.pathname === page.path;

        return (
          <Link
            key={page.path}
            to={page.path}
            className={`
              px-4 py-2 rounded-md font-medium transition-all duration-200
              ${isActive ? "shadow-sm" : "hover:shadow-sm"}
            `}
            style={{
              backgroundColor: isActive
                ? theme.colors.primary
                : "transparent",
              color: isActive
                ? "#ffffff"
                : theme.colors.navbarText,
            }}
          >
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
