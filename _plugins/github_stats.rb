require 'net/http'
require 'json'
require 'date'

module Jekyll
  class GithubStatsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      repo = "jnsiemer/latticeassumptionzoo"
      
      # Fetch Repository Metadata
      uri = URI("https://api.github.com/repos/#{repo}")
      response = Net::HTTP.get(uri)
      repo_data = JSON.parse(response)
      
      last_modified = Date.parse(repo_data['pushed_at']).strftime("%B %d, %Y") rescue "Unknown"

      # Fetch Contributors (which includes individual commit counts)
      uri_contribs = URI("https://api.github.com/repos/#{repo}/contributors")
      response_contribs = Net::HTTP.get(uri_contribs)
      contributors = JSON.parse(response_contribs)
      
      # Sum total commits from all contributors
      total_commits = contributors.sum { |user| user['contributions'] } rescue 0

      # Inject data globally into site.data
      site.data['github'] = {
        'last_modified' => last_modified,
        'total_commits' => total_commits,
        'contributors' => contributors # This array contains avatar_urls and logins
      }
    end
  end
end
