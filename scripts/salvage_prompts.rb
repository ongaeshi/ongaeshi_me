#!/usr/bin/env ruby
require 'json'

brain_dir = File.expand_path('~/.gemini/antigravity/brain')
keyword = ARGV[0]

unless keyword
  puts "Usage: ruby salvage_prompts.rb <keyword>"
  puts "Example: ruby salvage_prompts.rb hyper_copy"
  exit 1
end

puts "Searching for '#{keyword}' in #{brain_dir} ..."
puts "-" * 40

count = 0
Dir.glob("#{brain_dir}/**/transcript.jsonl").each do |path|
  File.open(path, 'r', encoding: 'UTF-8') do |f|
    f.each_line do |line|
      next unless line.include?('\"USER_INPUT\"')
      
      begin
        data = JSON.parse(line)
        if data['type'] == 'USER_INPUT' && data['content']
          content = data['content']
          if content.include?(keyword)
            # Extract the content inside <USER_REQUEST> if present
            if content =~ /<USER_REQUEST>\n(.*?)\n<\/USER_REQUEST>/m
              prompt = .strip
            else
              prompt = content.strip
            end
            
            # Extract conversation ID from the path
            conv_id = File.basename(File.dirname(File.dirname(File.dirname(path))))
            
            puts "[Conversation: #{conv_id}]"
            puts "Date: #{data['created_at']}"
            puts prompt
            puts "-" * 40
            count += 1
            break # Found the first matching prompt in this conversation, move to next
          end
        end
      rescue JSON::ParserError
        # skip invalid json lines
      end
    end
  end
end

puts "Found #{count} conversations."
