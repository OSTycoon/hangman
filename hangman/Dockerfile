# syntax=docker/dockerfile:experimental
FROM maven:3.5.2-jdk-8-alpine AS MAVEN_TOOL_CHAIN

WORKDIR /tmp/

COPY pom.xml /tmp/

COPY src /tmp/src/

RUN --mount=type=cache,target=/root/.m2 mvn clean package

FROM openjdk:8-jre-alpine

ARG SOURCE_COMMIT
ARG VERSION
ARG BUILD_DATE

WORKDIR /app
COPY --from=MAVEN_TOOL_CHAIN /tmp/target/hangman*.jar /app/app.jar
ENTRYPOINT [ "java","-jar", "/app/app.jar" ]

EXPOSE 8080

LABEL source.commit="$SOURCE_COMMIT" \
      build.date="$BUILD_DATE" \
      version="$VERSION"