#!/bin/zsh
echo $1
echo $2
echo $3
curl -X $1 -H "Content-Type: application/json" -d $3 http://localhost:3000/api/data/v1/$2