#! /usr/bin/env ruby
# -*- coding: utf-8 -*-

require 'webrick'
include WEBrick

# ブラウザ開く
system("open http://localhost:8005/")

# webサーバー立ち上げ
s = HTTPServer.new(:Port => 8005, :DocumentRoot => Dir::pwd)
trap("INT"){ s.shutdown }
s.start

