import Link from "next/link";
import Checkbox from "../checkbox/Checkbox";
import "./header.css";

type IHeaderProps = {
  search: string;
  setSearch: (search: string) => void;
  isPublicDomain: boolean;
  isOnView: boolean;
  setIsPublicDomain: (isPublicDomain: boolean) => void;
  setIsOnView: (isOnView: boolean) => void;
  goToPageHref: string;
  goToPageTitle: string;
};

export const Header: React.FC<IHeaderProps> = ({
  search,
  setSearch,
  isPublicDomain,
  isOnView,
  setIsPublicDomain,
  setIsOnView,
  goToPageTitle,
  goToPageHref,
}) => {
  return (
    <div className="header">
      <h1 className="text-with-border">
        Stunning images from the art of insititue in chicago
      </h1>
      <p className="text-with-border">
        Welcome to the Art Institute of Chicago, home to a collection of art
        that spans centuries. We look forward to your visit and invite you to
        explore our many exhibitions and to join us for one of our free daily
        tours.{" "}
      </p>
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="filters">
          <Checkbox
            id="public-domain"
            label="Public domain"
            onChange={(e) => {
              setIsPublicDomain(e.target.checked);
            }}
            checked={isPublicDomain}
          />
          <Checkbox
            id="on-view"
            label="On View"
            onChange={(e) => setIsOnView(e.target.checked)}
            checked={isOnView}
          />
          <Link href={goToPageHref} style={{ textDecoration: "none" }}>
            <button data-testid="go-to-page" className="go-to-button">
              {goToPageTitle}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
