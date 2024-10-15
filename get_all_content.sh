#!/bin/bash

# Set the source and destination directories
SRC_DIR="src/posts"
DEST_FILE="all_posts.md"

# Remove the destination file if it already exists
rm -f "$DEST_FILE"

# Find all .md files in the source directory and its subdirectories
# Then concatenate them into the destination file
find "$SRC_DIR" -name "*.md" | while read -r file; do
    cat "$file" >> "$DEST_FILE"
done

echo "All .md files have been concatenated into $DEST_FILE"
