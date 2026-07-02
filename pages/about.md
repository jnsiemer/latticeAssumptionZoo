---
title: "About the Zoo"
permalink: /about/
layout: single
last_updated: 2026-07-01
---

The Lattice Assumption Zoo is an ongoing effort to catalogue, categorise, and track the evolving landscape of lattice-based cryptographic assumptions, their hardness guarantees and their relations.

Recently, the number of assumptions in lattice-based cryptography has grown rapidly. This project aims to provide a centralised, visual, and structured catalogue for researchers and students navigating this space.

## The Lineage of Zoos

This project does not exist in a vacuum. It was heavily inspired by several predecessors that recognised the need to catalogue the complexity of cryptographic assumptions:

- [**Cryptographic Primitives and Hard Problems in Cryptography Wiki**](https://web.archive.org/web/20121224073103/http://www.ecrypt.eu.org/wiki/index.php/Main_Page){:target="_blank"}: A project from 2012 (now resting in the Wayback Machine) that attempted to catalogue basic primitives as well as assumptions from the areas: discrete logarithms, factoring, product groups, pairings, and lattices.
- [**Is it broken yet?**](https://malb.io/are-graded-encoding-schemes-broken-yet.html){:target="_blank"}: A page tracking attacks on Graded Encoding schemes.
- [**SIS-with-Hints Zoo**](https://malb.io/sis-with-hints.html){:target="_blank"}: A page collecting all SIS assumptions with additional hints.
- [**Complexity Zoo**](https://complexityzoo.net/Complexity_Zoo){:target="_blank"}: A wiki for complexity classes first opened in 2002.

## Our Approach

Historically, projects like this were built using traditional Wiki software (like [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki)) or smaller, single-page collections. Both struggle with structured data and modern visualisations -- an issue that the community of the _Complexity Zoo_ approaches via [external sources](https://www.math.ucdavis.edu/~greg/zoology/diagram.xml){:target="_blank"}. To address these issues, the Lattice Assumption Zoo uses a different architecture designed to serve both the users of the website and the community maintaining it.

### The Architecture
The data displayed on this website is not stored in a database. It's a collection of Markdown files with support for LaTeX and (structured) YAML data. This collection is converted into a website using [Jekyll](https://jekyllrb.com/){:target="_blank"} -- the default static site generator for [GitHub Pages](https://docs.github.com/en/pages){:target="_blank"}. As several academics host their personal websites via GitHub Pages, the (simple Markdown) environment might be familiar, lowering the entry barrier for contributions.

Further, maintaining a collection of Markdown files is done best with [Git](https://github.com/jnsiemer/latticeassumptionzoo){:target="_blank"}. Using Git for version control fundamentally changes how updates are managed compared to MediaWiki. Rather than making live, isolated edits on a single wiki page, contributors submit [Pull Requests](https://github.com/jnsiemer/latticeAssumptionZoo/pulls){:target="_blank"}. This allows us to review changes across multiple files -- ensuring that a modification to an assumption's page is synchronised with its visual representation in the graph before it goes live. 

### The Experience: Structured Discovery
While Jekyll natively provides standard tools like an internal search and an [RSS feed](/feed.xml), the core of the Zoo relies on two custom pages built to navigate the landscape of lattice-based assumptions:
1. [**The Assumption Graph:**](/graph/) An interactive graph designed to explore this landscape. By rendering assumptions as nodes and their relationships (reductions and generalisations) as edges, the graph allows users to immediately discover and understand the provable relations between assumptions.
2. [**The Catalogue:**](/catalogue/) For a more traditional view, the _Catalogue of Assumptions_ organises all assumptions in a nested hierarchy of families / categories. Entries are tagged with `STANDARD`, `IMPLIED`, or `BROKEN`, providing a high-level indication of their provable hardness guarantees.

### The Result
This structured approach serves two primary audiences within the cryptographic community:
* **For Designers:** By making it simple to find and understand existing assumptions, the Zoo encourages reusing existing assumptions rather than introducing ad-hoc ones. It also makes tracking novel assumptions effortless via our [RSS feed](/feed.xml).
* **For Cryptanalysts:** The repository serves as an organised index of targets, simplifying the identification of compelling assumptions to analyse.

To keep this resource accurate and comprehensive, the Lattice Assumption Zoo relies on community input. Due to the chosen infrastructure, advertising a newly published attack, adding a missing assumption, or correcting a mistake is a simple process. Detailed instructions can be found in [our Contributing file](https://github.com/jnsiemer/latticeAssumptionZoo/blob/main/CONTRIBUTING.md){:target="_blank"}.

If there are any questions, please reach out to [Jan Niklas Siemer](https://jnsiemer.de/){:target="_blank"} who maintains this website.

---

# The Zoo in Numbers

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
  .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 40px; }
  .stat-card { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .stat-value { font-size: 2.5em; font-weight: bold; color: #333; margin-bottom: 5px; }
  .stat-label { font-size: 0.9em; color: #666; text-transform: uppercase; letter-spacing: 1px; }
  
  .chart-container { background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee; margin-bottom: 30px; }
  .chart-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr)); gap: 20px; }
  
  .avatar-grid { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin-top: 20px; }
  .avatar { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #ddd; transition: transform 0.2s; }
  .avatar:hover { transform: scale(1.1); }
</style>

<!-- HERO METRICS -->
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-value">{{ site.assumptions | size }}</div>
    <div class="stat-label">Assumptions</div>
  </div>
  <div class="stat-card">
    <div class="stat-value" id="val-variants">--</div>
    <div class="stat-label">Assumption Variants</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">{{ site.data.bib_stats.total_papers | default: "--" }}</div>
    <div class="stat-label">Papers Cited</div>
  </div>
</div>

<div class="chart-row">
  <div class="chart-container">
    <h4 style="text-align: center;">Assumption Families</h4>
    <div style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center;">
      <canvas id="familiesChart"></canvas> 
    </div>
  </div>
  <div class="chart-container">
    <h4 style="text-align: center;">Assumption Status</h4>
    <div style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center;">
      <canvas id="statusChart"></canvas>
    </div>
  </div>
</div>

<!-- LITERATURE CHARTS -->
<h2>Statistics on References</h2>
<div class="chart-container">
  <h4 style="text-align: center;">Cited Publications by Year</h4>
  <canvas id="yearChart" style="max-height: 300px;"></canvas>
</div>
<div class="chart-container">
  <h4 style="text-align: center;">Cited Publication Venues</h4>
  <canvas id="venueChart" style="max-height: 500px;"></canvas>
</div>

<!-- COMMUNITY / GITHUB -->
<h2>Statistics on Development</h2>
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-value">{{ site.data.github.total_commits | default: "--" }}</div>
    <div class="stat-label">Total Commits</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">{{ site.data.github.last_modified | default: "--" }}</div>
    <div class="stat-label">Last Modified</div>
  </div>
</div>

<div class="chart-container" style="text-align: center;">
  <h4>Contributors</h4>
  <p>Thank you to everyone who contributed to this Zoo.</p>
  <div class="avatar-grid">
    {% for user in site.data.github.contributors %}
      <a href="{{ user.html_url }}" target="_blank" title="{{ user.login }}">
        <!-- The browser fetches this image directly from GitHub's CDN on page load -->
        <img class="avatar" src="{{ user.avatar_url }}" alt="{{ user.login }}">
      </a>
    {% endfor %}
  </div>
</div>

<script type="text/javascript" src="/graph/data.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function() {
  
  // ==========================================
  // EXTRACT DATA FROM YAML Front-Matter
  // ==========================================
  const familyData = {};
  const statusData = { 'standard': 0, 'implied': 0, 'broken': 0, 'unassigned': 0 };

  {% for assumption in site.assumptions %}
  { // <-- The curly brace isolates the scope for each loop iteration
    let stat = "{{ assumption.assumption_status | downcase | strip }}";
    
    // Increment the correct status counter safely
    if (stat === "standard") statusData.standard++;
    else if (stat === "implied") statusData.implied++;
    else if (stat === "broken") statusData.broken++;
    else statusData.unassigned++;
    
    // Extract Families
    let fam = "{{ assumption.family | default: 'Uncategorised' | escape }}";
    let subfam = "{{ assumption.subfamily | default: 'Unclassified' | escape }}";
    
    if (!familyData[fam]) familyData[fam] = {};
    if (!familyData[fam][subfam]) familyData[fam][subfam] = 0;
    familyData[fam][subfam]++;
  }
  {% endfor %}

  // ==========================================
  // EXTRACT METRICS FROM GRAPH
  // ==========================================
  if (typeof assumptions !== 'undefined') {
    // Filter out the hidden 'anchor' nodes used for assumption families
    const variants = assumptions.filter(node => node.hidden !== true);
    
    // Update the DOM element
    const variantsEl = document.getElementById('val-variants');
    if (variantsEl) variantsEl.innerText = variants.length;
  }

  // ==========================================
  // INJECT BIBTEX DATA FOR CHARTS
  // ==========================================
  
  // A. Calculate Average Papers per Page
  const totalPapers = {{ site.data.bib_stats.total_papers | default: 0 }};
  const numAssumptionPages = {{ site.assumptions | size | default: 1 }};

  // B. Load Chart Data
  const yearData = {{ site.data.bib_stats.years | jsonify | default: "null" }};
  const venueData = {{ site.data.bib_stats.venues | jsonify | default: "null" }};
  
  if (yearData && venueData) {
    renderLiteratureCharts(yearData, venueData);
  }

  // ==========================================
  // RENDER CHART.JS DIAGRAMS
  // ==========================================
  
  // Horizontal Bar Chart (Assumption Status)
  new Chart(document.getElementById('statusChart'), {
    type: 'doughnut',
    data: {
      labels: ['Standard', 'Implied', 'Broken', 'Unassigned'],
      datasets: [{
        data: [statusData.standard, statusData.implied, statusData.broken, statusData.unassigned],
        backgroundColor: ['#5cb85c', '#5c9abd', '#d9534f', '#6f777d'],
        borderWidth: 2
      }]
    },
    options: { 
      responsive: true,
      plugins: { 
        legend: { 
          display: false,
          position: 'bottom'
        } 
      } 
    }
  });

  // Nested Donut Chart (Families & Subfamilies)
  
  // Helper to turn names into URL slugs (e.g., "Module LWE" -> "module-lwe")
  const slugify = text => text.toString().toLowerCase()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')       
    .replace(/\-\-+/g, '-')         
    .replace(/^-+/, '')             
    .replace(/-+$/, '');

  const famLabels = [];
  const famData = [];
  const famRoutes = []; // Stores the base family name for inner ring routing
  const famColors = ['#0A9396', '#EE9B00', '#94D2BD', '#E9D8A6', '#CA6702', '#BB3E03']; 
  
  const subLabels = [];
  const subData = [];
  const subFamRoutes = []; // Stores the parent family name for outer ring routing
  const subColors = [];

  let colorIndex = 0;
  for (const [fam, subObj] of Object.entries(familyData)) {
    let famTotal = 0;
    const baseColor = famColors[colorIndex % famColors.length];
    
    for (const [subfam, count] of Object.entries(subObj)) {
      famTotal += count;
      subLabels.push(subfam); 
      subData.push(count);
      subFamRoutes.push(fam); // Remember the parent family!
      subColors.push(baseColor); 
    }
    
    famLabels.push(`${fam}-Based Assumptions`); 
    famData.push(famTotal);
    famRoutes.push(fam);
    colorIndex++;
  }

  new Chart(document.getElementById('familiesChart'), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          // Outer Ring (Subfamilies)
          data: subData,
          backgroundColor: subColors,
          borderWidth: 1,
          customLabels: subLabels, 
          customParentFam: subFamRoutes // Attach routing data
        },
        {
          // Inner Ring (Main Families)
          data: famData,
          backgroundColor: famColors,
          borderWidth: 2,
          customLabels: famLabels,
          customFam: famRoutes // Attach routing data
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { 
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.dataset.customLabels[context.dataIndex];
              const value = context.parsed;
              return ` ${label}: ${value}`;
            }
          }
        }
      },
      // Change mouse to pointer when hovering over slices
      onHover: (event, chartElement) => {
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      },
      // Handle the routing on click
      onClick: (event, elements, chart) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;
          const dataset = chart.data.datasets[datasetIndex];
          
          let url = '/catalogue/';
          
          if (datasetIndex === 1) {
            // Clicked Inner Ring -> Go to Family (e.g., /catalogue/lwe/)
            url += slugify(dataset.customFam[dataIndex]) + '/';
          } else if (datasetIndex === 0) {
            // Clicked Outer Ring -> Go to Subfamily
            const familySlug = slugify(dataset.customParentFam[dataIndex]);
            const rawSubFam = dataset.customLabels[dataIndex];
            
            // ROUTING EXCEPTION: Catch "Unclassified" and route to parent family
            if (rawSubFam === 'Unclassified') {
              url += `${familySlug}/`;
            } else {
              const subFamSlug = slugify(rawSubFam);
              url += `${familySlug}/${subFamSlug}/`;
            }
          }
          
          window.location.href = url;
        }
      }
    }
  });

  // Literature Charts
  function renderLiteratureCharts(yearData, venueData) {
    // Calculate the full range of years
    const numericYears = Object.keys(yearData).map(Number);
    const minYear = Math.min(...numericYears);
    const maxYear = Math.max(...numericYears);
    
    const completeYears = [];
    const completeYearCounts = [];
    
    // Loop through every year, injecting 0 for missing data
    for (let y = minYear; y <= maxYear; y++) {
      completeYears.push(y);
      completeYearCounts.push(yearData[y] || 0);
    }

    new Chart(document.getElementById('yearChart'), {
      type: 'bar',
      data: {
        labels: completeYears,
        datasets: [{
          label: 'Papers Published',
          data: completeYearCounts,
          backgroundColor: '#0A9396'
        }]
      },
      options: { plugins: { legend: { display: false } } }
    });

    // Render Top Venues (Color-Coded by Category)
    // The Ruby plugin now provides an object: { count: int, category: string }
    const sortedVenues = Object.entries(venueData)
      .sort((a, b) => b[1].count - a[1].count);
    
    const venueLabels = [];
    const venueCounts = [];
    const venueColors = [];

    const categoryColors = {
      "Cryptography": "#0A9396",
      "Security": "#CA6702",
      "Theory": "#94D2BD",
      "Other": "#c0c0c0",
    };

    sortedVenues.forEach(v => {
      venueLabels.push(v[0]);
      venueCounts.push(v[1].count);
      venueColors.push(categoryColors[v[1].category] || "#6f777d");
    });
    
    new Chart(document.getElementById('venueChart'), {
      type: 'bar',
      data: {
        labels: venueLabels,
        datasets: [{
          data: venueCounts,
          backgroundColor: venueColors
        }]
      },
      options: { 
        indexAxis: 'y', 
        plugins: { legend: { display: false } } 
      }
    });
  }

  // ==========================================
  // SANITY CHECKS
  // ==========================================
  function runSanityChecks() {
    const errors = [];
    const totalAssumptionPages = {{ site.assumptions | size | default: 0 }};
    
    // Test 1: Do the Statuses sum to the Total Assumptions?
    const sumStatuses = statusData.standard + statusData.implied + statusData.broken + statusData.unassigned;
    if (sumStatuses !== totalAssumptionPages) {
      errors.push(`Status Mismatch: Statuses sum to ${sumStatuses}, but there are ${totalAssumptionPages} pages.`);
    }

    // Test 2: Do the Families/Subfamilies sum to the Total Assumptions?
    let sumFamilies = 0;
    for (const [fam, subObj] of Object.entries(familyData)) {
      let famTotal = 0;
      for (const count of Object.values(subObj)) {
        famTotal += count; // Sums subfamilies
      }
      sumFamilies += famTotal;
    }
    if (sumFamilies !== totalAssumptionPages) {
      errors.push(`Family Mismatch: Subfamilies sum to ${sumFamilies}, but there are ${totalAssumptionPages} pages.`);
    }

    // Tests 3 & 4: Do the Bibliography extractions match the Total Papers?
    if (yearData && venueData) {
      // Sum the venues
      const sumVenues = Object.values(venueData).reduce((acc, v) => acc + v.count, 0);
      if (sumVenues !== totalPapers) {
        errors.push(`Venue Mismatch: Venue counts sum to ${sumVenues}, but the bib file has ${totalPapers} papers.`);
      }

      // Sum the years
      const sumYears = Object.values(yearData).reduce((acc, count) => acc + count, 0);
      if (sumYears !== totalPapers) {
        errors.push(`Year Mismatch: Year counts sum to ${sumYears}, but the bib file has ${totalPapers} papers.`);
      }
    }

    // If error, then log in console
    if (errors.length > 0) {
      console.group("Zoo Statistics Sanity Checks FAILED", "color: #d9534f; font-size: 1.2em; font-weight: bold;");
      errors.forEach(err => console.error(err));
      console.groupEnd();
    }
  }

  // Execute the tests
  runSanityChecks();
});
</script>
