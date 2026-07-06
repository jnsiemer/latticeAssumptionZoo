# check_unused_refs.rb
bib_path = File.join(__dir__, 'references.bib')
project_root = File.expand_path('..', __dir__)

unless File.exist?(bib_path)
  puts "Could not find #{bib_path}"
  exit
end

puts "🔍 Scanning for unused references..."

# Extract all keys from the .bib file
bib_content = File.read(bib_path)
bib_keys = bib_content.scan(/@\w+\s*\{\s*([^,]+),/).flatten.map(&:strip)

puts "📚 Found #{bib_keys.size} total papers in references.bib"

# Read the contents of all Markdown files in the project root
markdown_contents = ""
Dir.chdir(project_root) do
  Dir.glob("**/*.{md,markdown,html}").each do |file|
    next if file.start_with?('_site/', '.jekyll-cache/', 'vendor/')
    markdown_contents << File.read(file) << "\n"
  end
end

# Check which keys never appear in the Markdown contents
orphaned_keys = []
bib_keys.each do |key|
  unless markdown_contents.include?(key)
    orphaned_keys << key
  end
end

# Output the results
puts "\n========================================"
puts " UNUSED REFERENCE REPORT"
puts "========================================"

if orphaned_keys.empty?
  puts "✅ Every paper in your .bib file is cited somewhere in your site."
else
  puts "🚨 Found #{orphaned_keys.size} unused reference(s) that are not referenced anywhere:"
  puts "----------------------------------------"
  orphaned_keys.sort.each do |key|
    puts "   - #{key}"
  end
  puts "----------------------------------------"
  puts "You can safely delete these from _bibliography/references.bib"
end
