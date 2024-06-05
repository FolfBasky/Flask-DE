# Flask-DE

Это школьный проект, созданный с использованием Flask, простого и легковесного веб-фреймворка для Python. Приложение предоставляет базовый функционал для демонстрации работы Flask и выполнено на немецком языке.

## Содержание

- [Особенности](#особенности)
- [Установка](#установка)
- [Использование](#использование)
- [Структура проекта](#структура-проекта)
- [Вклад](#вклад)
- [Лицензия](#лицензия)

## Особенности

- **Маршруты**: Обработка запросов и возврат соответствующих шаблонов.
- **Шаблоны**: Использование HTML-шаблонов для генерации веб-страниц.
- **Статические файлы**: Поддержка стилей и скриптов для улучшения интерфейса.

## Установка

1. **Клонирование репозитория:**

    ```sh
    git clone https://github.com/FolfBasky/Flask-DE.git
    cd Flask-DE
    ```

2. **Создание виртуального окружения:**

    ```sh
    python3 -m venv venv
    source venv/bin/activate  # На Windows используйте `venv\Scripts\activate`
    ```

3. **Установка зависимостей:**

    ```sh
    pip install -r requirements.txt
    ```

## Использование

1. **Запуск Flask приложения:**

    ```sh
    python main.py
    ```

2. **Открытие приложения в браузере:**
    Перейдите по адресу `http://127.0.0.1:5000` в вашем веб-браузере.

## Структура проекта

- **main.py**: Главный файл приложения Flask, содержащий маршруты и основную логику.
- **static/**: Папка для статических файлов (CSS, JavaScript, изображения).
- **templates/**: Папка для HTML-шаблонов.
- **LICENSE**: Файл с лицензией MIT.

## Вклад

Если вы хотите внести свой вклад в проект, пожалуйста, следуйте этим шагам:

1. **Сделайте форк репозитория:**
2. **Создайте новую ветку:**

    ```sh
    git checkout -b feature/YourFeatureName
    ```

3. **Внесите изменения и зафиксируйте их:**

    ```sh
    git commit -m 'Add some feature'
    ```

4. **Отправьте изменения в удаленный репозиторий:**

    ```sh
    git push origin feature/YourFeatureName
    ```

5. **Создайте новый пулл-реквест**

## Лицензия

Этот проект лицензирован на условиях лицензии MIT. Подробности см. в файле [LICENSE](LICENSE).