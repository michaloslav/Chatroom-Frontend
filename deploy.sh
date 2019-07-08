set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:michaloslav/Chatroom.git master:gh-pages

cd -