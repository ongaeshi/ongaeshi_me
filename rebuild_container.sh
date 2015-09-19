git pull
sudo docker build -t ongaeshi_me .
sudo docker rm -f ongaeshi_me
sudo docker run --name ongaeshi_me -it -d --restart=always -p 3001:80 ongaeshi_me
