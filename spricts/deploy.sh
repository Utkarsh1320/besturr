#!/bin/bash

APP_DIR="/var/www/myapp"
BUILD_DIR="/home/ec2-user/react-deploy-temp/dist"

echo "Deploying application..."

mkdir -p $APP_DIR
rm -rf $APP_DIR/*
cp -r $BUILD_DIR/* $APP_DIR/

echo "Deployment complete."
