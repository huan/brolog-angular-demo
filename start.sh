#!/bin/sh

lite-server &
echo $! > server.pid
