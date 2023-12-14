# Используйте официальный образ Python
FROM python:3.8

# Установите переменные окружения
ENV PYTHONUNBUFFERED 1

# Создайте и перейдите в рабочий каталог
WORKDIR /app

# Установите зависимости
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Скопируйте код в контейнер
COPY . /app/

COPY .env /app/

# Запустите приложение
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



