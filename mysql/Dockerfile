FROM mysql:8.0.26
CMD [ "--innodb-use-native-aio=0" ]
COPY setup.sql /docker-entrypoint-initdb.d/
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 3306