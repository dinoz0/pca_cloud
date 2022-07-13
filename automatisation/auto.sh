#/bin/sh

git add .

echo "C'est ou que c'est?"
read chemin
cd $chemin
git commit
git push origin 
read


docker login
docker build -t dinoz/pca_cloud ../backend/srv_ctn 
docker push dinoz/pca_cloud 

kubectl apply -f ../backend/srv_ctn/ctn.yml










echo "J'ai finiiiiiiiii"