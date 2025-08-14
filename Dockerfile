FROM cypress/included:latest

WORKDIR /home/cypress/

RUN apt-get update && apt install -y default-jre

COPY . /home/cypress/

VOLUME ["/home/cypress/allure-report"]

RUN npm install

CMD ["npm", "run", "e2e"]