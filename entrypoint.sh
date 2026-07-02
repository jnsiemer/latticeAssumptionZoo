#!/bin/bash
set -e

# Grab UID and GID of the mounted /app directory
HOST_UID=$(stat -c "%u" /app)
HOST_GID=$(stat -c "%g" /app)

# 1. Handle user creation and permissions if not root
if [ "$HOST_UID" -ne 0 ]; then
    if ! getent passwd "$HOST_UID" > /dev/null 2>&1; then
        groupadd -f -g "$HOST_GID" jekyllgroup 2>/dev/null || true
        useradd -u "$HOST_UID" -g "$HOST_GID" -m jekylluser 2>/dev/null || true
    fi
    # Give new user ownership of root-created bundle cache
    chown -R "$HOST_UID":"$HOST_GID" /usr/local/bundle
fi

# 2. Force clean state for every boot (The Idiot-Proofing)
echo "Wiping Jekyll cache to ensure a clean build..."
if [ "$HOST_UID" -eq 0 ]; then
    rm -rf /app/_site /app/.jekyll-cache /app/.jekyll-metadata 2>/dev/null || \
    echo "WARNING: Failed to remove cache directories. Please check host file permissions."
else
    # Try as root first. If host OS blocks root via the bind mount, fallback to the host user
    rm -rf /app/_site /app/.jekyll-cache /app/.jekyll-metadata 2>/dev/null || \
    gosu "$HOST_UID":"$HOST_GID" rm -rf /app/_site /app/.jekyll-cache /app/.jekyll-metadata 2>/dev/null || \
    echo "WARNING: Failed to remove cache directories. Please check host file permissions."
fi

# 3. Drop root privileges (if needed) and execute main Jekyll command
if [ "$HOST_UID" -eq 0 ]; then
    exec "$@"
else
    exec gosu "$HOST_UID":"$HOST_GID" "$@"
fi
