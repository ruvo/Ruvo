#!/usr/bin/bash

echo ' -->  Syncing your Updates';

git add --all;
git commit -m 'Josh commit on client side work';
git push;

echo ' --> Done Syncing Crowley Carpets  to GITHUB.com';


sleep 2;
echo ' ----> HAVING PRODUCTION SERVER Update what is live..';
ssh ubuntu@crowleycarpets.com 'bash -s /home/ubuntu/Production/push_client_into_server.sh'


