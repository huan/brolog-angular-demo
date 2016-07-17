#!/bin/sh

lite-server > /dev/null 2>&1 &
echo $! > server.pid
