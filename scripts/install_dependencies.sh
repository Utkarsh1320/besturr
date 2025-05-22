#!/bin/bash

# Load NVM
export NVM_DIR="/home/ec2-user/.nvm"
source "$NVM_DIR/nvm.sh"

# Use default node version
nvm use node

# Debug info (optional, for CodeDeploy logs)
echo "Running as: $(whoami)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Navigate to app directory
cd /home/ec2-user/app || {
  echo "Directory /home/ec2-user/app does not exist."
  exit 1
}

# Install dependencies and build
npm install
npm run build
