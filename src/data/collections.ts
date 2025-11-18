export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  occasion: string;
}

export const collections: Collection[] = [
  {
    id: "c1",
    title: "Свадебная Коллекция",
    description: "Изысканные букеты для самого важного дня",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    occasion: "wedding",
  },
  {
    id: "c2",
    title: "День Рождения",
    description: "Яркие композиции для праздничного настроения",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop",
    occasion: "birthday",
  },
  {
    id: "c3",
    title: "8 Марта",
    description: "Нежные букеты для прекрасных дам",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&h=600&fit=crop",
    occasion: "womens-day",
  },
  {
    id: "c4",
    title: "День Святого Валентина",
    description: "Романтические композиции для признаний в любви",
    image: "https://images.unsplash.com/photo-1518709779341-099a681e7605?w=800&h=600&fit=crop",
    occasion: "valentines",
  },
  {
    id: "c5",
    title: "Юбилей",
    description: "Роскошные букеты для торжественных событий",
    image: "https://images.unsplash.com/photo-1486694568154-6b622ab9a9e4?w=800&h=600&fit=crop",
    occasion: "anniversary",
  },
  {
    id: "c6",
    title: "Корпоративные Букеты",
    description: "Элегантные композиции для деловых мероприятий",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=600&fit=crop",
    occasion: "corporate",
  },
];
