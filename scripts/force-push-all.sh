#!/bin/bash

PREV_BRANCH=master
INPUT=./dist/all-branches.txt

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

while IFS= read -r BRANCH
do
  echo $BRANCH
  git checkout $BRANCH
  git push -f origin $BRANCH
  echo "============================"
done < $INPUT

git checkout master
