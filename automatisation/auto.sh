#/bin/sh

git add .

echo "C'est ou que c'est?"
read chemin
cd $chemin
git commit
git push origin 
read


docker login
docker build -t dinoz/pca_cloud_ctn ../backend/srv_ctn 
docker build -t dinoz/pca_cloud_user ../backend/srv_user
docker build -t dinoz/pca_cloud_data ../backend/srv_data
docker build -t dinoz/pca_cloud_front ../frontend/cocktail 
docker push dinoz/pca_cloud_ctn
docker push dinoz/pca_cloud_user
docker push dinoz/pca_cloud_data
docker push dinoz/pca_cloud_front

kubectl apply -f ../mysql_dep_secret.yml
kubectl apply -f ../mysql-configmap.yml
kubectl apply -f ../mysql_dep.yml


kubectl apply -f ../backend/srv_ctn/ctn.yml
kubectl apply -f ../data-service.yml
kubectl apply -f ../user-service.yml
kubectl apply -f ../front-service.yml










echo "J'ai finiiiiiiiii"