import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logoFlower from "@/assets/logo-flower.png";

export const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoFlower} 
            alt="Flower Icon" 
            className="h-12 w-12 transition-transform group-hover:scale-110" 
          />
          <span className="text-2xl font-bold text-foreground">Розовый Сад</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("catalog")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Каталог
          </button>
          <button
            onClick={() => scrollToSection("collections")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Коллекции
          </button>
          <Link
            to="/promotions"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Акции
          </Link>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            О нас
          </button>
          <Link
            to="/flower-language"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Язык цветов
          </Link>
        </nav>

        <Link to="/cart" className="relative">
          <Button size="icon" variant="ghost" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-primary"
              >
                {totalItems}
              </Badge>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};
