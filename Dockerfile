FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r ./requirements.txt --no-cache-dir

COPY . .

CMD ["gunicorn",  "--bind", "0:8000", "CourseMC.wsgi:application"]
