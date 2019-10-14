#!/bin/bash

PREV_BRANCH=master
INPUT=./dist/all-branches.txt

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

while IFS= read -r BRANCH
do
  echo "$PREV_BRANCH - $BRANCH"
  git checkout $BRANCH
  git rebase --onto $PREV_BRANCH HEAD~1
  PREV_BRANCH=$BRANCH
  echo "============================"
done < $INPUT

git checkout master
