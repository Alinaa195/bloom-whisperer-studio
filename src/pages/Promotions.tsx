import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { promotionProducts } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const Promotions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-lg px-4 py-2 bg-primary">
            Специальные предложения
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Акции</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Воспользуйтесь нашими специальными предложениями и скидками на избранные букеты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
