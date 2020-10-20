#!/bin/zsh

# yarn build
cd ../mjwsteenbergen.github.io/
rm -r gerbenmarielenne/
cp -r ../wedding-gerben-marielenne/build ./gerbenmarielenne/
git add . && git commit -m "Working on present" && git push
