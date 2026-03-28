FROM ruby:3.2-slim

# Install system dependencies required for Ruby gems
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the Gemfile and Gemfile.lock to leverage Docker cache
COPY Gemfile Gemfile.lock ./

# Install bundler and project dependencies
RUN gem install bundler && bundle install

# Copy project into the container
COPY . .

# Expose default Jekyll port
EXPOSE 4000
EXPOSE 35729 

# Run server
# --host 0.0.0.0 is required for Docker s.t. the server is accessible outside the container
# --livereload to optimise local development.
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]