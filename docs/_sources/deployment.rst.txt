Deployment
==========


Docker
------

build
*****

::

    docker build -t davehorsfall/cellatlas-api:latest .
    docker push davehorsfall/cellatlas-api:latest

run
***

::

    docker pull haniffalab/adifa:latest
    docker run -d -p 5000:5000 haniffalab/adifa:latest

compose
*******

This is then the ``docker-compose.yml`` so we see it.

:: 

    version: '2'
    services:
    # Web server
    nginx: 
        image: nginx:latest
        container_name: nginx
        volumes:
        - ./nginx.conf:/etc/nginx/conf.d/default.conf
        ports:
        - 80:80
        - 443:443
    # Application
    adex:
        image: davehorsfall/cellatlas-api:merge
        container_name: adex
        volumes:
        - ./data:/data
        ports:
        - 5000:5000      
        environment:     
        - "DATA_PATH=/data/"
        links:
        - nginx

Nginx
-----

This is then the ``conf.conf`` so we see it.

:: 

    version: '2'
    services:
    # Web server
    nginx: 
        image: nginx:latest
        container_name: nginx