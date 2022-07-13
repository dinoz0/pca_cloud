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
docker build -t dinoz/pca_cloud ../frontend/cocktail 
docker push dinoz/pca_cloud 

kubectl apply -f ../mysql_dep_secret.yml
kubectl apply -f ../mysql-configmap.yml
kubectl apply -f ../mysql_dep.yml


kubectl apply -f ../backend/srv_ctn/ctn.yml
kubectl apply -f ../data-service.yml
kubectl apply -f ../user-service.yml
kubectl apply -f ../front-service.yml










echo "J'ai finiiiiiiiii"