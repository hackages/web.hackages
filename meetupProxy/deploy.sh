ssh VPS "rm -rf ./meetupProxy/dist";
scp -r dist/ VPS:~/meetupProxy;
scp package.json VPS:~/meetupProxy;
ssh VPS "cd meetupProxy && yarn install";
ssh VPS "pm2 restart meetupProxy";
