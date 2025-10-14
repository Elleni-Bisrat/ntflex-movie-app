import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";
import { SearchProvider } from "@/context/SearchContext";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <SearchProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default Layout;
