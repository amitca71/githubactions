# githubactions
app creation:
- npm install
- npm install --save mocha chai request
- npm test
test results:
- https://github.com/amitca71/githubactions/actions
- an email is sent by github action upon build failure
deployment prerequisite:
- account on heroku + app + api key
- github secrets:
	HEROKU_API_KEY (retrieved from https://dashboard.heroku.com/account)
	HEROKU_APP_NAME (as set on heroku)

production deploymennt:
- script (linux only- not tested):deploy_latest_docker_to_production.sh
- command line: heroku container:release -a hello-amit web

usage examples:
- https://hello-amit.herokuapp.com/
- https://hello-amit.herokuapp.com/?name=amit


app server improvement:
separate the start and serve app

test improvement:
- known issue: mocha test with --end, always returns success. not using --end, the process hangs as the server is not being shut down
- solve the always success test case
- add applicative test to check the results
- test with service name and not local host binding

docker improvement: 
- use docker cache and push only tagged versions, as described: 
         cache-from: type=local,src=/tmp/.buildx-cache
          cache-to: type=local,dest=/tmp/.buildx-cache
    (on:
       push:
       tags:
          - "v*.*.*"

      git tag -a v1.0.2
      git push origin v1.0.2)
- known issue: the image that is published to dockerhub is redundant for deployment, and can be removed from the pipeline

