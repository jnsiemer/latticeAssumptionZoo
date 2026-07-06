# check_duplicates.rb
bib_path = File.join('references.bib')

unless File.exist?(bib_path)
  puts "Could not find #{bib_path}"
  exit
end

content = File.read(bib_path)

# Extract all entries (getting the key and the body block)
entries = content.scan(/@\w+\s*\{\s*([^,]+),([^@]+)/m)

keys = Hash.new(0)
titles = Hash.new { |h, k| h[k] = [] }

entries.each do |key, block|
  clean_key = key.strip
  keys[clean_key] += 1

  # Extract the title using a non-greedy lookahead to stop at the next field
  if title_match = block.match(/title\s*=\s*(.+?)(?=\n\s*[a-zA-Z]+\s*=|\n\s*\}|\Z)/mi)
    # Strip out all braces, quotes, commas, and line breaks to normalize the string
    clean_title = title_match[1].gsub(/[{}"\n,]/, ' ').gsub(/\s+/, ' ').strip.downcase
    titles[clean_title] << clean_key
  end
end

puts "========================================"
puts "1. CHECKING FOR DUPLICATE KEYS"
puts "========================================"
dup_keys = keys.select { |_, count| count > 1 }
if dup_keys.any?
  dup_keys.each { |k, c| puts "🚨 Key '#{k}' appears #{c} times." }
else
  puts "✅ No duplicate keys found."
end

puts "\n========================================"
puts "2. CHECKING FOR DUPLICATE TITLES"
puts "========================================"
dup_titles = titles.select { |_, ks| ks.length > 1 }
if dup_titles.any?
  dup_titles.each do |t, ks| 
    puts "🚨 Title: \"#{t}\""
    puts "   Found under keys: #{ks.join(', ')}\n\n"
  end
else
  puts "✅ No duplicate titles found."
end
