module Jekyll
  class AssumptionGroupGenerator < Generator
    safe true

    def generate(site)
      return unless site.collections.key?('assumptions')
      
      assumptions = site.collections['assumptions'].docs

      # Group by Family
      families = assumptions.group_by { |doc| doc.data['family'] }
      families.each do |family, family_docs|
        next if family.nil? || family.strip.empty?
        
        # Generate Family Pages
        family_slug = Utils.slugify(family)
        family_dir = File.join('catalogue', family_slug)
        site.pages << GroupPage.new(site, site.source, family_dir, family, nil, 'family', family_docs)

        # Generate Subfamily Pages
        subfamilies = family_docs.group_by { |doc| doc.data['subfamily'] }
        subfamilies.each do |subfamily, sub_docs|
          next if subfamily.nil? || subfamily.strip.empty?
          
          subfamily_slug = Utils.slugify(subfamily)
          sub_dir = File.join('catalogue', family_slug, subfamily_slug)
          site.pages << GroupPage.new(site, site.source, sub_dir, family, subfamily, 'subfamily', sub_docs)
        end
      end
    end
  end

  class GroupPage < Page
    def initialize(site, base, dir, family, subfamily, type, docs)
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html'

      self.process(@name)
      
      @data = {
        'layout' => 'catalogue',
        'title' => type == 'family' ? "#{family}-Based Assumptions" : "#{subfamily}-Assumptions",
        'family_name' => family,
        'subfamily_name' => subfamily,
        'group_type' => type,
        'assumptions' => docs
      }
      @content = ""
    end
  end
end
