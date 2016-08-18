#!/usr/bin/bash

echo ' -->  Syncing your Updates';

git add --all;
git commit -m 'Josh commit on client side work';
git push;

echo ' --> Done Syncing Crowley Carpets  to GITHUB.com';


echo '======================================================';

echo ' ----> HAVING PRODUCTION SERVER Update what is live..';
ssh ubuntu@ruvo.us '/home/ubuntu/Production/push_client_into_server.sh'

echo '   --> DONE SYNCING   :  Check your Updates Live';
echo '   -->  Make sure to clear your Browser Cache & Reload the Pages.';




