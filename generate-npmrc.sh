#!/usr/bin/env bash

set -e

cat <<EOF >.npmrc
registry "https://registry.npmjs.org"
"@dig-dao:registry" "https://npm.pkg.github.com"
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
always-auth=true
EOF
