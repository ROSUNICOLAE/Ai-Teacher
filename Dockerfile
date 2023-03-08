#FROM eclipse-temurin:17-jdk-alpine
#RUN mkdir -p /app/server
#WORKDIR /app/server
#
#COPY .mvn/ .mvn/
#COPY mvnw pom.xml mvnw ./
#
#RUN ./mvnw dependency:resolve
#
#COPY src/main /app/src/main
#
#CMD ["./mvnw", "spring-boot:run"]

FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-alpine
RUN apk add dumb-init
RUN mkdir -p /app/server
RUN addgroup --system juser && adduser -S -s /bin/false -G juser juser
COPY --from=build /app/target/App-0.0.1-SNAPSHOT.jar /app/server/AiTeacherApplication.jar
WORKDIR /app/server
RUN chown -R juser:juser /app/server
USER juser
CMD ["dumb-init", "java", "-jar", "AiTeacherApplication.jar"]

## Use a Maven base image to build the application
#FROM maven:3.8.1-jdk-11-slim AS build
#WORKDIR /app
#COPY pom.xml .
#RUN mvn dependency:resolve
#RUN mvn dependency:tree
#COPY src/main /app/src/main
#RUN mvn clean package -DskipTests
#
## Use an OpenJDK image to run the application
#FROM adoptopenjdk/openjdk11:jdk-11.0.9_11-alpine
#WORKDIR /app
#COPY --from=build /app/target/my-app.jar .
#EXPOSE 8080
#ENV DB_URL=jdbc:postgresql://109.97.198.79:5432/AiTeacher
#ENV DB_USERNAME=postgres
#ENV DB_PASSWORD=admin
#CMD ["java", "-jar", "my-app.jar"]
