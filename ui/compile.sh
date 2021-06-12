#! /bin/bash -e

rm -rf ./html/
mkdir ./html/

#browserify ./ui/index.js | tr -dc '\0-\177' > ./html/bundle.js
browserify ./ui/index.js -o  ./html/bundle.js
cp ./ui/index.html ./html/

echo Done at
date
