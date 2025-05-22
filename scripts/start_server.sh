#!/bin/bash

echo "Deploying Vite app..."
cd /home/ec2-user/app

# Copy build to nginx/html
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r dist/* /usr/share/nginx/html/
