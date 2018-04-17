#!/bin/bash

set -e # Exit with nonzero exit code if anything fails

echo "-- start – gatsby installer"
ROOT_DIR="${ROOT_DIR:-./gatsby}"
DEST_DIR="${DEST_DIR:-./}"

cp "${ROOT_DIR}/gatsby-browser.js" "${DEST_DIR}"
cp "${ROOT_DIR}/gatsby-config.js" "${DEST_DIR}"
cp "${ROOT_DIR}/gatsby-node.js" "${DEST_DIR}"
cp "${ROOT_DIR}/gatsby-ssr.js" "${DEST_DIR}"

cp "${ROOT_DIR}/package.json" "${DEST_DIR}"

cp -r "${ROOT_DIR}/src/components/ColumnContainer" "${DEST_DIR}/src/components/"
cp -r "${ROOT_DIR}/src/components/Header" "${DEST_DIR}/src/components/"
cp -r "${ROOT_DIR}/src/layouts" "${DEST_DIR}/src/"
cp -r "${ROOT_DIR}/src/shared" "${DEST_DIR}/src/"
cp -r "${ROOT_DIR}/src/templates" "${DEST_DIR}/src/"

cp -r "${ROOT_DIR}/src/pages/styleguide" "${DEST_DIR}/src/pages/"
cp -r "${ROOT_DIR}/src/pages/404.js" "${DEST_DIR}/src/pages/"

echo "-- end – gatsby installer"
