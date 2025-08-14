# test-ebac-ui


#### > Command docker to built the docker image
docker build -t ebac-cypress:latest --progress=plain .  

#### > Command docker to run the image and tests, extract the results and remove/exclude the docker
docker run --rm --name ebac-cy -v "$(pwd)/allure-report:/home/cypress/allure-report" ebac-cypress

#### > Command docker to exclud a image
docker rmi <image name, ID or tag>

#### > Command to clean the stage of git
git rm --cached -r allure-report