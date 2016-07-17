#!/bin/sh

PID=$(cat server.pid)
rm server.pid

kill $PID
sleep 1
kill -9 $PID || echo "stoped"
