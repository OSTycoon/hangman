FROM maven:3.5.2-jdk-8-alpine AS MAVEN_TOOL_CHAIN

WORKDIR /tmp/

COPY pom.xml /tmp/

RUN mvn dependency:go-offline -B

COPY src /tmp/src/

RUN mvn package

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=MAVEN_TOOL_CHAIN /tmp/target/hangman*.jar /app/app.jar
ENTRYPOINT [ "java","-jar", "/app/app.jar" ]

EXPOSE 8080