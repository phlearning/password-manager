# Dockerfile for Django
FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd
COPY requirements.txt .
COPY script_django.sh .
RUN sed -i 's/\r$//g' ./script_django.sh
RUN chmod +x script_django.sh
RUN pip install -r requirements.txt

COPY . .


# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# ENTRYPOINT ["./script_django.sh"]
CMD ["bash", "./script_django.sh"]

