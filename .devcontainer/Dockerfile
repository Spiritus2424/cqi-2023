ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

ARG USER=node
RUN su node -c "npm install -g @nestjs/cli"

WORKDIR /workspaces/cqi-2023/

RUN mkdir -p node_modules && \
    chown -R $USER:$USER node_modules


USER $USER