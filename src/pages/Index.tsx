import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-flowers.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Создаем моменты счастья
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90">
            Свежие цветы для особенных моментов вашей жизни
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Посмотреть каталог
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">О магазине Розовый Сад</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы - команда профессиональных флористов с многолетним опытом создания уникальных цветочных композиций. 
            Каждый букет создается с любовью и вниманием к деталям. Мы работаем только со свежими цветами, 
            которые доставляются напрямую с лучших цветочных ферм. Наша миссия - дарить радость и делать 
            каждый день особенным через красоту цветов.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наш Каталог</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Коллекции к Праздникам</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Специальные букеты для важных событий
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Card key={collection.id} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-background/90">{collection.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наша Команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { name: "Анна Петрова", role: "Главный флорист", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
              { name: "Мария Смирнова", role: "Флорист-дизайнер", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
              { name: "Елена Иванова", role: "Менеджер по работе с клиентами", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
            ].map((member, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Контакты</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-semibold mb-1">Телефон</p>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:info@rosovysad.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@rosovysad.ru
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-semibold mb-1">Адрес</p>
                  <p className="text-muted-foreground">
                    ул. Цветочная, 12<br />Москва, 123456
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Розовый Сад. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
