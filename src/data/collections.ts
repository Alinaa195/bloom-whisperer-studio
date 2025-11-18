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
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=800&h=600&fit=crop",
    occasion: "wedding",
  },
  {
    id: "c2",
    title: "День Рождения",
    description: "Яркие композиции для праздничного настроения",
    image: "https://images.unsplash.com/photo-1606506463441-a5f6a1b5faaa?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=600&fit=crop",
    occasion: "valentines",
  },
  {
    id: "c5",
    title: "Юбилей",
    description: "Роскошные букеты для торжественных событий",
    image: "https://images.unsplash.com/photo-1521091513238-8b6f411b4ad9?w=800&h=600&fit=crop",
    occasion: "anniversary",
  },
  {
    id: "c6",
    title: "Корпоративные Букеты",
    description: "Элегантные композиции для деловых мероприятий",
    image: "https://images.unsplash.com/photo-1600336153113-d66c79de3e91?w=800&h=600&fit=crop",
    occasion: "corporate",
  },
];
