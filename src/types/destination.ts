
export interface DestinationData {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  imageSrc: string;
  facts: string[];
  gallery?: {
    src: string;
    alt: string;
  }[];
}

export const destinationsData: Record<string, DestinationData> = {
  "curonian-spit": {
    id: "curonian-spit",
    title: "Куршская коса",
    description: "Уникальный природный заповедник с песчаными дюнами и сосновыми лесами.",
    fullDescription: [
      "Куршская коса – это узкая полоса суши между Балтийским морем и Куршским заливом, объект Всемирного наследия ЮНЕСКО.",
      "Здесь можно увидеть знаменитые танцующие деревья, высокие песчаные дюны и насладиться нетронутой природой."
    ],
    imageSrc: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    facts: [
      "Протяженность косы составляет 98 км",
      "Ширина в самом узком месте — всего 400 метров",
      "На территории косы находится орнитологическая станция 'Фрингилла'",
      "Дюна Эфа — одна из самых высоких песчаных дюн в Европе"
    ]
  },
  "kaliningrad": {
    id: "kaliningrad",
    title: "Калининград",
    description: "Исторический центр области с богатым немецким наследием и современной архитектурой.",
    fullDescription: [
      "Калининград (бывший Кёнигсберг) – административный центр самого западного региона России, расположенный между Польшей и Литвой.",
      "Город сочетает в себе немецкое архитектурное наследие и советскую застройку, создавая уникальный культурный ландшафт."
    ],
    imageSrc: "https://images.unsplash.com/photo-1568146589570-38a2f5361c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    facts: [
      "Основан в 1255 году",
      "До 1946 года город назывался Кёнигсберг",
      "Здесь жил и работал философ Иммануил Кант",
      "В городе находится единственный в России Музей янтаря"
    ],
    gallery: [
      {
        src: "https://cdn.poehali.dev/files/bb702595-1d1a-4c61-800b-7f19ea371f04.jpg",
        alt: "Кафедральный собор Калининграда"
      },
      {
        src: "https://cdn.poehali.dev/files/6436dd4f-30db-4497-ac87-9df9234e6acc.jpg",
        alt: "Рыбная деревня в Калининграде"
      },
      {
        src: "https://cdn.poehali.dev/files/b29b0162-e4d8-4766-887b-452c713ad110.jpeg",
        alt: "Музей Мирового океана"
      },
      {
        src: "https://cdn.poehali.dev/files/6dfb591a-23cb-4c3f-8b03-f25601e5a472.jpg",
        alt: "Остров Канта"
      },
      {
        src: "https://images.unsplash.com/photo-1622896783896-be180c879788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Королевские ворота"
      },
      {
        src: "https://images.unsplash.com/photo-1602086782150-eb5ecf395925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Набережная Преголи"
      },
      {
        src: "https://images.unsplash.com/photo-1601891251161-d95e4929b63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Закат над Верхним озером"
      },
      {
        src: "https://images.unsplash.com/photo-1609776790582-b1a3e9f3ea25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Форт №5"
      },
      {
        src: "https://images.unsplash.com/photo-1549891055-d466e260d808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Променад на острове Канта"
      }
    ]
  },
  "yantarny": {
    id: "yantarny",
    title: "Янтарный",
    description: "Посёлок, где добывается 90% мирового янтаря, с красивыми пляжами и смотровой площадкой.",
    fullDescription: [
      "Посёлок Янтарный (бывший Пальмникен) — центр добычи янтаря в Калининградской области. Здесь находится крупнейшее в мире месторождение этого ценного 'солнечного камня'.",
      "Помимо янтарного производства, поселок привлекает широкими пляжами, удостоенными Голубого флага за экологическую чистоту и безопасность."
    ],
    imageSrc: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    facts: [
      "Здесь добывается около 90% мирового янтаря",
      "Пляж поселка Янтарный отмечен наградой 'Голубой флаг'",
      "Янтарный комбинат ведет добычу с 1947 года",
      "В поселке можно посетить смотровую площадку на карьере добычи янтаря"
    ],
    gallery: [
      {
        src: "https://cdn.poehali.dev/files/14fa522e-6fcd-46b0-870c-9a3a5591c392.jpg",
        alt: "Деревянный мост через водоем в Янтарном"
      },
      {
        src: "https://cdn.poehali.dev/files/6e1e6694-d359-485e-9bdb-ab2e10816ab2.jpeg",
        alt: "Историческая церковь в Янтарном"
      },
      {
        src: "https://cdn.poehali.dev/files/834a90e6-8eb9-4378-859b-060a1f7f15d9.png",
        alt: "Пляж в Янтарном с зонтиками и шезлонгами"
      },
      {
        src: "https://cdn.poehali.dev/files/e6fc83af-c1a7-4caa-be54-1684e844efdb.jpeg",
        alt: "Историческое здание церкви"
      },
      {
        src: "https://cdn.poehali.dev/files/2d50ec73-0865-4d83-96ab-b9831dcb5796.jpeg",
        alt: "Вид на Янтарный с высоты птичьего полета"
      },
      {
        src: "https://images.unsplash.com/photo-1629129664879-08cdaf193dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Закат на пляже в Янтарном"
      },
      {
        src: "https://images.unsplash.com/photo-1625730025281-3b5512edba11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Кусочки янтаря на песке"
      },
      {
        src: "https://images.unsplash.com/photo-1512591290618-904e04936827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Балтийское море возле Янтарного"
      },
      {
        src: "https://images.unsplash.com/photo-1596402184320-21c45e250e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Изделия из янтаря"
      }
    ]
  }
};
