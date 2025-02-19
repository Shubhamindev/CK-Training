Build the Docker Image
``` docker build -t helloworld_image   ```

Run a Docker Container Using the Image

``` docker run --rm helloworld_image ```

List all docker images
``` docker images ```

Delete specific image
``` docker rmi helloworld_image ```

 Delete all unused image
``` docker image prune -a ```

pull the docker  nginx
``` docker pull nginx  ```

build ngnix image

``` docker build -t nginx_helloworld ```

Run the container

``` docker run -d -p 8080:80 nginx_helloworld ```

