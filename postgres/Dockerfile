FROM postgres:latest
RUN ln -sf /usr/share/zoneinfo/Europe/Moscow /etc/localtime
ADD ./init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
