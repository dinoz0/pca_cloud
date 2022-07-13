#/bin/sh

git add .

echo "C'est ou que c'est?"
read chemin
cd $chemin
git commit
git push origin 
read

docker build -t dinoz0/pca_cloud ../backend/srv_ctn 
docker push dinoz/pca_cloud:tagname 









echo "J'ai finiiiiiiiii"