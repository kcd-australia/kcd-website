# stage1 - build react app first 
FROM node:16-alpine3.12 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN yarn && yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.21.3 as final
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY src/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
