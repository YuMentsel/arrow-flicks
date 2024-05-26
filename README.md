# ArrowFlicks
Приложение для получения информации о фильмах с использованием API сервиса TMDB (может понадобиться VPN).

Дизайн: https://www.figma.com/design/VkLZt5T4dZQQ3cEhWcnhyG/Movie-Search-App?node-id=0-1&t=8Z48hoDuIDbMThXV-0

Deploy: https://arrow-flicks-yumentsel.vercel.app

## Технологии
- Next JS
- TypeScript
- Mantine UI

## Функциональность

### Страница “Поиск фильмов”
- Пользователь видит список доступных фильмов, а также фильтры для сужения поиска.
- Пользователь может нажать на фильм и попасть на страницу “Фильм” для получения детальной информации о нем.
- Пользователь может оценить фильм, нажав на звездочку, и тем самым сохранить его в оцененные фильмы.
- Пользователь может удалить фильм из оцененного, нажав еще раз на звездочку и подтвердив действие в модальном окне.

### Страница “Оцененное”
- Пользователь видит список оцененных фильмов и соответствующие им оценки.
- Пользователь может изменить оценку фильма.
- Пользователь может искать оцененные фильмы по их названию.
- Пользователь может удалить фильм из оцененного, нажав еще раз на звездочку и подтвердив действие в модальном окне.
- Пользователь может нажать на фильм и попасть на страницу “Фильм" для получения детальной информации о нем.

### Страница “Фильм”
- Пользователь видит детали фильма в соответствии с дизайном.

## Дополнительная функциональность
- Отображать loader во время ожидания ответа сервера.
- Показывать empty state, если список фильмов пуст на страницах “Поиск фильмов” и “Оцененное”.
- Реализовать постраничную пагинацию.
- Проксировать все запросы к TMDB API.
- Валидировать значения фильтров как на клиенте, так и на сервере (прокси).
- Минимальная ширина страницы, при которой она отображается корректно – 320рх.
