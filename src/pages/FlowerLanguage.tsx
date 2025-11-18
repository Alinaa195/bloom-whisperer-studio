import { Header } from "@/components/Header";
import { flowerMeanings } from "@/data/flowerMeanings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FlowerLanguage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Язык Цветов</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте значение и символизм различных цветов, чтобы выразить свои чувства через букет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flowerMeanings.map((flower) => (
            <Card key={flower.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-2xl">{flower.name}</CardTitle>
                    <p className="text-primary font-semibold">{flower.meaning}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{flower.symbolism}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Цвет:</span>
                      <span className="text-sm text-muted-foreground">{flower.color}</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary/50 to-accent/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Создайте свой неповторимый букет
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Наши флористы помогут вам составить композицию, которая передаст именно то послание, 
                которое вы хотите выразить. Свяжитесь с нами, и мы создадим букет вашей мечты!
              </p>
              <div className="text-center">
                <a href="tel:+79991234567" className="text-primary font-semibold hover:underline">
                  +7 (999) 123-45-67
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlowerLanguage;
