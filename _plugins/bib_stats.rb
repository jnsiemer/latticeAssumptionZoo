module Jekyll
  class BibStatsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      bib_path = File.join(site.source, '_bibliography', 'references.bib')
      return unless File.exist?(bib_path)

      content = File.read(bib_path)
      entries = content.scan(/@\w+\s*\{[^@]+/m)
      total_papers = entries.count

      years = Hash.new(0)
      content.scan(/year\s*=\s*[{"]?(\d{4})[}"]?/i).each do |match|
        years[match[0]] += 1
      end

      venues = {}

      # Helper to increment a venue easily
      add_venue = ->(short_name, category) {
        venues[short_name] ||= { 'count' => 0, 'category' => category }
        venues[short_name]['count'] += 1
      }

      entries.each do |entry|
        # Extract the prefix from the key (e.g., "CCS" from "CCS:AKSY22")
        key_prefix = entry.match(/@\w+\s*\{\s*([A-Za-z0-9_-]+):/i)&.captures&.first&.upcase
        
        # Extract ONLY the venue-related text (URL IS REMOVED to prevent false positives)
        venue_text = ""
        in_venue_field = false
        entry.each_line do |line|
          if line.match?(/^\s*(booktitle|journal|howpublished|series)\s*=/i)
            in_venue_field = true
          elsif line.match?(/^\s*\w+\s*=/i)
            in_venue_field = false
          end
          venue_text += line if in_venue_field
        end

        # Strict mapping logic: Match Prefix OR Strict Regex
        if ["EC", "EUROCRYPT"].include?(key_prefix) || venue_text.match?(/\beurocrypt\b/i)
          add_venue.call("EUROCRYPT", "Cryptography")
          
        elsif ["AC", "ASIACRYPT"].include?(key_prefix) || venue_text.match?(/\basiacrypt\b/i)
          add_venue.call("ASIACRYPT", "Cryptography")
          
        elsif ["C", "CRYPTO"].include?(key_prefix) || venue_text.match?(/Advances in Cryptology - CRYPTO/i) || venue_text.match?(/\bcrypto\b\s+\d{4}/i)
          add_venue.call("CRYPTO", "Cryptography")
          
        elsif ["TCC"].include?(key_prefix) || venue_text.match?(/\btcc\b/i)
          add_venue.call("TCC", "Cryptography")
          
        elsif ["PKC"].include?(key_prefix) || venue_text.match?(/\bpkc\b/i)
          add_venue.call("PKC", "Cryptography")
          
        elsif ["PQCRYPTO"].include?(key_prefix) || venue_text.match?(/\bpqcrypto\b/i)
          add_venue.call("PQCrypto", "Cryptography")
        
        elsif ["CTRSA"].include?(key_prefix) || venue_text.match?(/\bct-rsa\b|cryptographers' track at the rsa/i)
          add_venue.call("CT-RSA", "Cryptography")
          
        elsif ["SAC"].include?(key_prefix) || venue_text.match?(/\bsac\b|selected areas in cryptography/i)
          add_venue.call("SAC", "Cryptography")
          
        elsif ["FC"].include?(key_prefix) || venue_text.match?(/\bfc\b|financial cryptography/i)
          add_venue.call("FC", "Security")
          
        elsif ["JC"].include?(key_prefix) || venue_text.match?(/journal of cryptology|j\. cryptol\./i)
          add_venue.call("JoC", "Cryptography")
          
        elsif ["CIC"].include?(key_prefix) || venue_text.match?(/commun\. cryptol\./i)
          add_venue.call("CiC", "Cryptography")
          
        elsif ["CHES", "TCHES"].include?(key_prefix) || venue_text.match?(/\bches\b|hardw\. embed\. syst\./i)
          add_venue.call("CHES", "Cryptography")
          
        elsif ["SCN"].include?(key_prefix) || venue_text.match?(/\bscn\b|security and cryptography for networks/i)
          add_venue.call("SCN", "Cryptography")
          
        elsif ["DCC"].include?(key_prefix) || venue_text.match?(/des\. codes cryptogr\./i)
          add_venue.call("DCC", "Cryptography")
          
        elsif ["EPRINT"].include?(key_prefix) || venue_text.match?(/\beprint\b/i)
          add_venue.call("EPRINT", "Cryptography")

        # --- Security Conferences ---
        elsif ["CCS"].include?(key_prefix) || venue_text.match?(/\bccs\b/i) || venue_text.match?(/ACM.*?Computer and Communications Security/i)
          add_venue.call("ACM CCS", "Security")
          
        elsif ["SP", "SSP"].include?(key_prefix) || venue_text.match?(/\bs\&p\b/i) || venue_text.match?(/Symposium on Security and Privacy/i)
          add_venue.call("IEEE S&P", "Security")
          
        elsif ["USENIX"].include?(key_prefix) || venue_text.match?(/\busenix\b/i)
          add_venue.call("USENIX", "Security")
          
        elsif ["NDSS"].include?(key_prefix) || venue_text.match?(/\bndss\b/i)
          add_venue.call("NDSS", "Security")

        # --- Theory Conferences ---
        elsif ["STOC"].include?(key_prefix) || venue_text.match?(/\bstoc\b|Theory of Computing/i)
          add_venue.call("STOC", "Theory")
          
        elsif ["FOCS"].include?(key_prefix) || venue_text.match?(/\bfocs\b|Foundations of Computer Science/i)
          add_venue.call("FOCS", "Theory")
          
        elsif ["ICALP"].include?(key_prefix) || venue_text.match?(/\bicalp\b/i)
          add_venue.call("ICALP", "Theory")

        # Anything else falls here (ARXIV, SODA, ACISP, ACNS, TIT, etc.)
        else
          add_venue.call("Other", "Other")
        end
      end

      site.data['bib_stats'] = {
        'total_papers' => total_papers,
        'years' => years,
        'venues' => venues
      }
    end
  end
end
