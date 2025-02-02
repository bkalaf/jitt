#!/bin/zsh
echo $1

/home/bobby/repos/jitt/src/schema/init/$1.tsx
/home/bobby/repos/jitt/src/schema/InsertForms/$1.tsx
/home/bobby/repos/jitt/src/schema/xforms/$1.tsx

ts-node ./bin/fileReplacer.ts /home/bobby/repos/jitt/src/schema/xforms/$1.tsx $1
/home/bobby/repos/jitt/src/schema/$1.tsx

