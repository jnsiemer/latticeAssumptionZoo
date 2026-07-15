FROM ruby:3.2-slim

# Install system dependencies required for Ruby gems and gosu
RUN apt-get update -qq && apt-get install -y --no-install-recommends \
    build-essential \
    gosu \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy and prepare the entrypoint script
# Place it in /usr/local/bin so it isn't overwritten by the ./app bind mount
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Copy the Gemfile and Gemfile.lock to leverage Docker cache
COPY Gemfile Gemfile.lock ./

# Install bundler and project dependencies
RUN gem install bundler --no-document \
 && bundle install --retry 5

# Copy project into the container
COPY . .

# Expose default Jekyll port
EXPOSE 4000
EXPOSE 35729 

# Set the entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Run server
# --host 0.0.0.0 is required for Docker s.t. the server is accessible outside the container
# --livereload and --incremental to speed up and optimise local development
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--incremental", "--livereload"]
