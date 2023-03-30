FROM node:18

RUN apt-get update && apt-get install -y \
    python2-minimal \
    golang-go \
    time \
    curl \
    openssh-client \
    && curl -L https://foundry.paradigm.xyz | bash \
    && npm install -g pnpm \
    && . /root/.bashrc \
    && foundryup 


RUN mkdir -p -m 0700 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

COPY id_ed25519_docker /root/.ssh/id_ed25519

WORKDIR /root/app
COPY . .
CMD ["time", "pnpm", "install", "--ignore-scripts"]
