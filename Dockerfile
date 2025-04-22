FROM nginx:alpine

RUN rm -rf /usr/share/ngnix/html/*

COPY . /usr/share/ngnix/html

EXPOSE 80