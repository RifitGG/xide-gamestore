# Xide Gamestore 
## Современный маркетплейс игр - магазин-аналог Steam или Epic Games Store. Проект разработан как полнофункциональная платформа для покупки и управления игровой библиотекой с удобным интерфейсом и надёжным бекэндом
![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![Django](https://img.shields.io/badge/Django-4.2.7-green.svg)
![Python](https://img.shields.io/badge/Python-3.14-blue.svg)
![Electron](https://img.shields.io/badge/Electron-28.x-47848F.svg)
---
![alt text](https://i.postimg.cc/K8nT0wvd/Snimok-ekrana-2025-11-13-193840.png)
> ## Web
---
![alt text](https://i.postimg.cc/mrgYp4pB/Snimok-ekrana-2025-11-13-194108.png)
> ## Desktop
---
## Структура проекта
```
xide-game-store/
│
├──  Backend (Django)
│   ├── gamestore/                # Настройки проекта
│   │   ├── settings.py          # Конфигурация Django
│   │   ├── urls.py              # Главные URL маршруты
│   │   ├── middleware.py        # Кастомные middleware
│   │   └── wsgi.py              # WSGI конфигурация
│   │
│   ├── shop/                    # Основное приложение
│   │   ├── models.py           # Модели (Game, Order, Cart, Review)
│   │   ├── views.py            # Views для веб-интерфейса
│   │   ├── admin.py            # Настройки админ-панели (улучшенные)
│   │   ├── admin_config.py     # Конфигурация админки
│   │   ├── urls.py             # URL маршруты
│   │   └── migrations/         # Миграции БД
│   │
│   ├── api/                     # REST API приложение
│   │   ├── views.py            # API endpoints (игры, корзина, заказы)
│   │   ├── views_auth.py       # API аутентификации (JWT)
│   │   ├── serializers.py      # Serializers для моделей
│   │   └── urls.py             # API маршруты
│   │
│   ├── templates/               # Django шаблоны
│   │   ├── base.html           # Базовый шаблон
│   │   ├── admin/              # Кастомные шаблоны админки
│   │   │   └── base_site.html  # Шаблон с кнопкой "Закрыть"
│   │   └── shop/               # Шаблоны магазина
│   │
│   ├── static/                  # Статические файлы
│   │   └── css/
│   │       └── style.css       # Основные стили
│   │
│   └── media/                   # Загружаемые файлы
│       └── games/              # Изображения игр
│           ├── covers/         # Обложки
│           └── screenshots/    # Скриншоты
│
├── 💻 Desktop App (Electron)
│   ├── desktop-electron-app/
│   │   ├── main.js             # Главный процесс Electron
│   │   ├── preload.js          # Preload скрипт
│   │   ├── index.html          # Главная страница
│   │   ├── package.json        # Конфигурация и зависимости
│   │   │
│   │   ├── js/                 # JavaScript модули
│   │   │   ├── api.js         # API клиент с JWT
│   │   │   ├── api-token.js   # Управление токенами
│   │   │   ├── app.js         # Главный контроллер
│   │   │   ├── components/    # Переиспользуемые компоненты
│   │   │   │   ├── game-card.js      # Карточка игры
│   │   │   │   └── modal.js          # Модальные окна
│   │   │   └── pages/         # Страницы приложения
│   │   │       ├── home-page.js      # Главная
│   │   │       ├── store-page.js     # Магазин
│   │   │       ├── library-page.js   # Библиотека
│   │   │       ├── cart-page.js      # Корзина
│   │   │       ├── profile-page.js   # Профиль
│   │   │       ├── login-page.js     # Вход
│   │   │       └── game-detail-page.js # Детали игры
│   │   │
│   │   ├── styles/            # CSS стили
│   │   │   ├── main.css      # Главные стили
│   │   │   ├── components.css # Компоненты
│   │   │   ├── pages.css     # Страницы
│   │   │   ├── auth.css      # Аутентификация
│   │   │   ├── cart.css      # Корзина
│   │   │   ├── library.css   # Библиотека
│   │   │   ├── profile.css   # Профиль
│   │   │   └── store.css     # Магазин
│   │   │
│   │   └── assets/           # Ресурсы
│   │       └── icon.png      # Иконка приложения
├──  Конфигурация
│   ├── requirements.txt             # Python зависимости
│   ├── package.json                 # Root package.json
│   └── db.sqlite3                   # База данных SQLite
│
└──  Виртуальное окружение
    └── venv/                        # Python виртуальное окружение
```
## Возможности

### Веб-приложение (Django)
- **Каталог игр** с расширенной фильтрацией и сортировкой
- **Детальные страницы игр** с описанием, скриншотами и отзывами
- **Система корзины** с пересчетом цен и скидками
- **Управление заказами** - полный жизненный цикл заказа
- **Поиск по каталогу** - быстрый и точный поиск игр
- **Адаптивный дизайн** - работает на всех устройствах
---
### Desktop app
- **Современный UI/UX** - темная тема с градиентами и анимациями в стиле Steam
- **Полный функционал магазина** - каталог, поиск, фильтрация по категориям
- **Библиотека игр** - все купленные игры в удобном интерфейсе
- **Корзина покупок** - управление товарами, оформление заказов
- **Профиль пользователя** - статистика, история заказов
- **JWT аутентификация** - безопасный вход и регистрация
- **Кроссплатформенность** - Windows, macOS, Linux
---
## Интерфейсы приложения

### Десктопное приложение (Electron)

#### Главная страница (Home)
- Мини-слайдер с рекомендуемыми играми
- Секция "Новинки" (последние 4 игры)
- Секция "Рекомендуемые" (4 игры)
- Категории игр

#### Магазин (Store)
- Полный каталог игр
- Фильтры по категориям
- Поиск по названию
- Карточки игр с ценами и скидками

#### Библиотека (Library)
- Все купленные игры
- Кнопка "Играть" на каждой игре
- Информация о дате покупки

#### Корзина (Cart)
- Список добавленных игр
- Управление количеством
- Кнопка "Удалить"
- Общая сумма
- Оформление заказа

#### Профиль (Profile)
- Информация о пользователе
- Статистика (игры, заказы, потраченная сумма)
- История заказов с деталями
- Настройки аккаунта

#### Детали игры
- Крупное изображение
- Полное описание
- Цена и скидка
- Кнопка "В корзину"
- Отзывы пользователей

### Веб-интерфейс (Django Templates)

- Адаптивный дизайн с Bootstrap 5
- Каталог с фильтрацией
- Детальные страницы игр
- Корзина покупок
- Профиль пользователя
- Оформление заказа

###  Админ-панель (Django Admin)

**Разделы:**
- **Магазин**: Заказы, Игры, Категории, Корзины, Элементы корзины, Отзывы
- **Пользователи**: Группы, Пользователи
- **Токены**: Token аутентификации

---
## Технические требования

### Основные зависимости
- **Python**: 3.11+ (работает на 3.14 с патчами)
- **Django**: 4.2.7
- **Node.js**: 16+ (рекомендуется 18+)
- **npm**: 8+
- **SQLite**: встроен (можно заменить на PostgreSQL)

### Системные требования
- **ОС**: Windows 10/11, macOS 10.15+, Ubuntu 20.04+
- **RAM**: минимум 4 GB
- **Дисковое пространство**: ~1 GB (с зависимостями)

---

## 🚀 Быстрый старт

### Автоматическая установка (Windows)

**Запустите один файл:**
```cmd
START.bat
```
---
Этот скрипт автоматически:
- Активирует виртуальное окружение Python
- Запустит Django сервер в отдельном окне
- Установит зависимости Electron (если нужно)
- Запустит десктопное приложение

**Готово!** Приложение откроется автоматически.
---
## Доступ к приложениям

После запуска проекта через `START.bat`:

| Приложение | URL | Описание |
|-----------|-----|----------|
| **Electron App** | - | Откроется автоматически |
| **Django Web** | http://127.0.0.1:8000/ | Веб-интерфейс |
| **API Root** | http://127.0.0.1:8000/api/ | REST API |
| **Admin Panel** | http://127.0.0.1:8000/admin/ | Админ-панель |

---

## API Documentation

### Аутентификация

#### Регистрация
```http
POST /api/auth/register/
Content-Type: application/json

{
  "username": "user",
  "email": "user@example.com",
  "password": "password123",
  "password2": "password123",
  "first_name": "John",
  "last_name": "Doe"
}
```

#### Вход
```http
POST /api/auth/login/
Content-Type: application/json

{
  "username": "user",
  "password": "password123"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "username": "user",
    "email": "user@example.com"
  }
}
```

#### Текущий пользователь
```http
GET /api/user/current/
Authorization: Token jwt_token_here
```

### Игры

#### Список игр
```http
GET /api/games/
GET /api/games/?featured=true       # Рекомендуемые
GET /api/games/?new=true            # Новинки
GET /api/games/?category=rpg        # По категории
GET /api/games/?platform=PC         # По платформе
GET /api/games/?search=witcher      # Поиск
```

#### Детали игры
```http
GET /api/games/{slug}/

Response:
{
  "id": 1,
  "title": "The Witcher 3",
  "slug": "the-witcher-3",
  "description": "...",
  "price": "1499.00",
  "discount_percentage": 20,
  "final_price": "1199.20",
  "cover_image": "/media/games/covers/witcher3.jpg",
  "category": {...},
  "platform": "PC",
  "rating": 9.5
}
```

### Категории

```http
GET /api/categories/

Response:
[
  {
    "id": 1,
    "name": "RPG",
    "slug": "rpg",
    "icon": "/media/categories/rpg.png"
  }
]
```

### Корзина

#### Получить корзину
```http
GET /api/cart/current/
Authorization: Token jwt_token_here
```

#### Добавить в корзину
```http
POST /api/cart/add/
Authorization: Token jwt_token_here
Content-Type: application/json

{
  "game_id": 1,
  "quantity": 1
}
```

#### Удалить из корзины
```http
DELETE /api/cart/remove/{item_id}/
Authorization: Token jwt_token_here
```

#### Очистить корзину
```http
POST /api/cart/clear/
Authorization: Token jwt_token_here
```

### Заказы

#### Список заказов
```http
GET /api/orders/
Authorization: Token jwt_token_here
```

#### Создать заказ
```http
POST /api/orders/create/
Authorization: Token jwt_token_here
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

#### Детали заказа
```http
GET /api/orders/{order_number}/
Authorization: Token jwt_token_here
```

### Библиотека

```http
GET /api/library/
Authorization: Token jwt_token_here

Response:
{
  "games": [
    {
      "id": 1,
      "title": "The Witcher 3",
      "cover_image": "...",
      "purchased_at": "2025-01-15T10:00:00Z"
    }
  ]
}
```

### Отзывы

#### Список отзывов
```http
GET /api/reviews/?game_id=1
```

#### Добавить отзыв
```http
POST /api/reviews/
Authorization: Token jwt_token_here
Content-Type: application/json

{
  "game": 1,
  "rating": 9,
  "comment": "Отличная игра!"
}
```

---

### 🔑 Тестовые учетные данные

**Суперпользователь:**
```
Логин: admin
Пароль: admin12
```


  
