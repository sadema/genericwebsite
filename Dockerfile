FROM nginx
COPY ./dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
