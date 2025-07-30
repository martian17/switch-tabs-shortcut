#!/bin/bash

rm -f switch-tabs-shortuct.zip
rm -rf dist
mkdir dist
cp manifest.json dist
cp service_worker.js dist
cp -r images dist
cp -r popup dist
zip -r switch-tabs-shortcut.zip dist
