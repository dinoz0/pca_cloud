#/bin/sh

git add .

echo "C'est ou que c'est?"
read chemin

cd $chemin

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

echo 'Enter the name of the branch:'
read branch

git push origin $branch

read

echo "J'ai finiiiiiiiii"