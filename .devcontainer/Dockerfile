ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends default-jdk


ARG USER=node
RUN su node -c "npm install -g @nestjs/cli"

WORKDIR /workspaces

RUN mkdir -p node_modules && \
    chown -R $USER:$USER node_modules


USER $USER
