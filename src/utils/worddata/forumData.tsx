interface Data {
  topic: string;
  replies: number;
  views: number;
  activity: string;
}

interface Column {
  id: 'topic' | 'replies' | 'views' | 'activity'
  label: string;
  minWidth?: number;
  align?: 'right';
}

function createData(
  topic: string,
  replies: number,
  views: number,
  activity: string,
): Data {
  return {
    topic,
    replies,
    views,
    activity
  };
}

export const rows = [
  createData('Особенности игры Виселица', 7, 13241, 'Jun, 19' ),
  createData('История игры', 43, 14035, 'Jun, 17'),
  createData('Лучшие игроки', 21, 600, 'Jun, 19'),
  createData('Игроки всех времен', 5, 327, 'Jun, 19'),
  createData('Настольные игры', 9, 376, 'Jun, 15'),
  createData('Настолки как спорт', 11, 2547, 'Jun, 19'),
  createData('Обучение', 56, 996, 'Jun, 19'),
  createData('Правила игры', 2, 48, 'Jun, 19'),
  createData('Клуб по интересам', 6, 1265, 'Jun, 19'),
  createData('Страхи виселицы', 29, 126, 'Jun, 14'),
  createData('Команда проекта', 31, 6702, 'Jun, 19'),
  createData('Темы для улучшения', 28, 6754, 'Jun, 19'),
  createData('Виселица в россии', 4, 14679, 'Jun, 13'),
  createData('Как играть для победы', 1, 20, 'Jun, 10'),
  createData('Лучшие тактики игры', 19, 225, 'Jun, 19'),
];

export const columns: readonly Column[] = [
  {
    id: 'topic',
    label: 'Тема',
    minWidth: 170
  },
  {
    id: 'replies',
    label: 'Ответы',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'views',
    label: 'Просмотры',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'activity',
    label: 'Последняя активность',
    minWidth: 170,
    align: 'right',
  }
];
