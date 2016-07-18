#!/bin/sh

PID=$(cat server.pid)
rm server.pid

kill $PID
sleep 1
kill -9 $PID > /dev/null 2>&1 || echo "stopped"
