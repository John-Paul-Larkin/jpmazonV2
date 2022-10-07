import MainNav from "./MainNav";
import CategoryNav from "./CategoryNav";

export default function Header() {
  return (
    <header className="header">
      <MainNav />
      <CategoryNav />
    </header>
  );
}
