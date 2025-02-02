#!/bin/zsh
echo $1

wget -O /home/bobby/repos/jitt/src/schema/columns/$1.tsx "https://github.com/bkalaf/scaffold/raw/refs/heads/main/columns-template.tsx"

wget -O /home/bobby/repos/jitt/src/schema/init/$1.tsx "https://github.com/bkalaf/scaffold/raw/refs/heads/main/init-template.ts"

# curl -L "https://github.com/bkalaf/scaffold/raw/main/init-template.tsx" -o /home/bobby/repos/jitt/src/schema/init/$1.tsx 

wget -O /home/bobby/repos/jitt/src/schema/InsertForms/$1.tsx "https://github.com/bkalaf/scaffold/raw/refs/heads/main/InsertForms-template.tsx"

# curl -L "https://github.com/bkalaf/scaffold/raw/main/InsertForms-template.tsx" -o /home/bobby/repos/jitt/src/schema/InsertForms/$1.tsx 

wget -O /home/bobby/repos/jitt/src/schema/xforms/$1.tsx "https://github.com/bkalaf/scaffold/raw/refs/heads/main/xforms-template.tsx"

# curl -L "https://github.com/bkalaf/scaffold/raw/main/xforms-template.tsx" -o /home/bobby/repos/jitt/src/schema/xforms/$1.tsx

wget -O /home/bobby/repos/jitt/src/schema/$1.tsx "https://github.com/bkalaf/scaffold/raw/refs/heads/main/index-template.tsx"

# curl -L "https://github.com/bkalaf/scaffold/raw/main/index-template.tsx" -o /home/bobby/repos/jitt/src/schema/$1.tsx

ts-node ./bin/fileReplacer.ts /home/bobby/repos/jitt/src/schema/columns/$1.tsx $1
ts-node ./bin/fileReplacer.ts /home/bobby/repos/jitt/src/schema/xforms/$1.tsx $1
ts-node ./bin/fileReplacer.ts /home/bobby/repos/jitt/src/schema/$1.tsx $1

