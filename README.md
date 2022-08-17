# Веб-приложение «Виселица»

## Команда Twin Peaks

Учебный проект по курсу **Мидл фронтенд-разработчик** от Яндекс.Практикума

---

Игра располагается по адресу:

[https://twinpeaks14.ya-praktikum.tech](https://twinpeaks14.ya-praktikum.tech)

#### Установка:

Существует 2 варианта запуска приложения: первый в ОС, в которой установлен nodejs и есть доступ к СУБД Postgres; и
второй - запуск в Docker.

В обоих случаях потребуются переменные окружения, необходимые для подключения к СУБД. Для этого создайте файл с
названием `.env.mega-game`. Располагаться он должен на одном уровне с директорией проекта. Пример содержимого файла:

```
DB_HOST=srv3.vds
DB_PORT=5432
DB_USER=polzovatel
DB_PASSWORD=1234
DB_NAME=sequelize_project_development
MG_PORT=8080
```

#### Первый вариант:

```bash
git clone git@github.com:Yandex-Twin-Peaks/mega-game.git
cd mega-game
npm i
```

ВАЖНО. Перед запуском приложения загрузите переменные в том же сеансе, в котором выполняете запуск.

Пример загрузки для macOS: `export $(grep -v '^#' ../.env.mega-game | xargs -0)`

Пример загрузки для Linux: `export $(grep -v '^#' ../.env.mega-game | xargs -d '\n')`

Далее, запустите само приложение:

Версия для разработки

```bash
npm run dev
```

Рабочая версия

```bash
npm start
```

Для тестирования выполните:

```bash
npm run test
```

Приложение возможно запускать в двух режимах одновременно:

- [localhost:3000](http://localhost:3000) - Режим разработчика
- [localhost:8080](http://localhost:8080) - Рабочий режим

#### Второй вариант:

Во этом варианте запуска приложение запустится только в **Рабочем режиме** на порту, указанном в переменной **PORT** в
файле `.env.mega-game`.

```bash
git clone git@github.com:Yandex-Twin-Peaks/mega-game.git
cd mega-game
docker compose up --build -d
```

ВАЖНО. Перед запуском проверьте, что файл `.env.mega-game` находится на одном уровне с директорией `mega-game`.

Обратите внимание, что на этом же уровне появится директория `.mega-game` для сохранения состояния контейнера с
Postgres.


[https://github.com/Yandex-Twin-Peaks/mega-game](https://github.com/Yandex-Twin-Peaks/mega-game)
