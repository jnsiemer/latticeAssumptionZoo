# check_missing_refs.rb
bib_path = File.join(__dir__, 'references.bib')
project_root = File.expand_path('..', __dir__)

unless File.exist?(bib_path)
  puts "Could not find #{bib_path}"
  exit
end

puts "🔍 Scanning Markdown files for missing references..."

# Extract all available keys from the .bib file
bib_content = File.read(bib_path)
bib_keys = bib_content.scan(/@\w+\s*\{\s*([^,]+),/).flatten.map(&:strip)

# Scan all Markdown and HTML files for citation tags
cited_keys = []

Dir.chdir(project_root) do
  Dir.glob("**/*.{md,markdown,html}").each do |file|
    next if file.start_with?('_site/', '.jekyll-cache/', 'vendor/')
    
    content = File.read(file)

    # Match Pattern A: Jekyll Scholar format -> {% cite KEY1 KEY2 %}
    content.scan(/\{%\s*cite\s+([^%]+)%\}/).each do |match|
      keys = match[0].split(/\s+/)
      cited_keys.concat(keys)
    end

    # Match Pattern B: Kramdown/Pandoc format -> [@KEY1; @KEY2]
    content.scan(/\[((?:@[^\]]+;?\s*)+)\]/).each do |match|
      keys = match[0].scan(/@([^;\s\]]+)/).flatten
      cited_keys.concat(keys)
    end
  end
end

cited_keys.uniq!

# Find cited keys that do NOT exist in the bib file
missing_keys = cited_keys - bib_keys

# Output the results
puts "\n========================================"
puts " MISSING REFERENCES REPORT"
puts "========================================"

if missing_keys.empty?
  puts "✅ Every citation in your text maps successfully to a paper in references.bib."
else
  puts "🚨 Found #{missing_keys.size} cited key(s) missing from references.bib:"
  puts "----------------------------------------"
  missing_keys.sort.each do |key|
    puts "   - #{key}"
  end
  puts "----------------------------------------"
  puts "💡 Check for typos in your Markdown files or add the missing entries to your .bib file."
end
