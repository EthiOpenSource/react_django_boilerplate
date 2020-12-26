FROM python:3

ENV PYTHONUNBUFFERED 1

WORKDIR /home/user/app/backend

# install python dependencies
ADD requirements.txt backend/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt


ADD backend/ /home/user/app/backend
