FROM ruby:2.5.1
LABEL maintainer 'Nozomi Kimura<nkimura@nozomir-engineer.work>'

# set environment variables
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV ROOT_PATH /tgt

# install essential libraries
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# install node.js
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
  apt-get install nodejs

# install yarn
RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y yarn

# move to root
RUN mkdir $ROOT_PATH
WORKDIR $ROOT_PATH

# bundle install
ADD Gemfile $ROOT_PATH/Gemfile
ADD Gemfile.lock $ROOT_PATH/Gemfile.lock
RUN bundle install

ADD . $ROOT_PATH
