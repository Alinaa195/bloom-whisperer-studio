import { Product } from "@/types/product";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        {product.discount && (
          <Badge className="absolute top-3 right-3 bg-primary">
            -{product.discount}%
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          {product.discount ? (
            <>
              <span className="text-xl font-bold text-primary">
                {discountedPrice.toFixed(2)} ₽
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {product.price.toFixed(2)} ₽
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-primary">
              {product.price.toFixed(2)} ₽
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};
