FROM postgres:latest
RUN ln -sf /usr/share/zoneinfo/Europe/Moscow /etc/localtime
ADD ./init.sql /docker-entrypoint-initdb.d/
RUN sed 's/{DB_USER}/'DB_USER'/g' -i /docker-entrypoint-initdb.d/init.sql && sed 's/{DB_PASSWORD}/'DB_PASSWORD'/g' -i /docker-entrypoint-initdb.d/init.sql && sed 's/{DB_NAME}/'DB_NAME'/g' -i /docker-entrypoint-initdb.d/init.sql
EXPOSE 5432
