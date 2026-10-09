#!/bin/bash

# List of URLs you want to send
urls=(
  "https://keploy.io/docs/keploy-cloud/auto-test-generation/"
  "https://keploy.io/docs/running-keploy/cli-commands/"
  "https://keploy.io/docs/running-keploy/ci-cd/"
  "https://keploy.io/docs/running-keploy/configuration-file/"
  "https://keploy.io/docs/keploy-cloud/mock-registry/"
  "https://keploy.io/docs/quickstart/quickstart-filter/"
  "https://keploy.io/docs/keploy-explained/common-errors/"
  "https://keploy.io/docs/running-keploy/public-api/"
  "https://keploy.io/docs/running-keploy/k8s-proxy-api/"
  "https://keploy.io/docs/running-keploy/docker-tls/"
  "https://keploy.io/blog/technology/future-of-test-automation-in-ai-era"
)

for url in "${urls[@]}"; do
  echo "Sending: $url"
  curl --request POST --url http://localhost:8082/url \
    --header 'content-type: application/json' \
    --data "{\"url\": \"$url\"}"
  echo -e "\n------------------------\n"
done