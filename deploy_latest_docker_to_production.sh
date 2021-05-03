#!/usr/bin/bash
if [ $# -gt 0 ]
then 
app=$1
else
app=hello-amit
fi
echo "deploying app: $app"

type heroku
if [ $? -ne 0 ]
then 
echo "u have to install heroku and login before deployment"
exit 
fi
heroku auth:whoami
if [ $? -ne 0 ]
then
echo "u need to be logged in to heroku before deployment"
exit
fi 
heroku container:release -a $app web
if [ $? -ne 0 ]
then 
echo "failed to deploy, check logs: heroku logs -a $app --tail"
