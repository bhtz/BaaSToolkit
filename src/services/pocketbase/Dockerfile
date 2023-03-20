FROM alpine as downloader

ARG pocket_url=https://github.com/pocketbase/pocketbase/releases/download/v0.7.7/pocketbase_0.7.7_linux_amd64.zip

ADD $pocket_url /tmp/pocketbase.zip

RUN unzip /tmp/pocketbase.zip -d /tmp/
RUN chmod +x /tmp/pocketbase

FROM gcr.io/distroless/static-debian11

COPY --from=downloader /tmp/pocketbase /pocketbase

CMD ["/pocketbase", "serve", "--http=0.0.0.0:8090"]