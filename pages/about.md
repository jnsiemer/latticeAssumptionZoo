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
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>

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

<div class="chart-container">
  <h4 style="text-align: center;">Introduced Assumptions by Year</h4>
  <p style="text-align: center; font-size: 0.85em; color: #666; margin-top: -10px;">Click on any bar to see the specific assumptions introduced that year.</p>
  <canvas id="introChart" style="max-height: 300px;"></canvas>

  <div id="year-details-container" style="display: none; margin-top: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-bottom: 15px;">
      <h4 id="inspector-title" style="margin: 0; color: #333;">Assumptions Introduced in <span id="inspector-year"></span></h4>
      <button onclick="document.getElementById('year-details-container').style.display='none'" style="background: none; border: none; font-size: 1.2em; cursor: pointer; color: #888;">&times;</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div>
        <h5 style="color: #0A9396; margin-top: 0;">Base Assumptions</h5>
        <ul id="inspector-base-list" style="font-size: 0.9em; padding-left: 20px; margin: 0; line-height: 1.6;"></ul>
      </div>
      <div>
        <h5 style="color: #EE9B00; margin-top: 0;">Variants</h5>
        <ul id="inspector-variant-list" style="font-size: 0.9em; padding-left: 20px; margin: 0; line-height: 1.6;"></ul>
      </div>
    </div>
  </div>
</div>

<div class="chart-row">
  <div class="chart-container">
    <h4 style="text-align: center;">Assumption Families</h4>
    <p style="text-align: center; font-size: 0.85em; color: #666; margin-top: -10px;">Click to inspect families.</p>
    <div style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center;">
      <canvas id="familiesChart"></canvas> 
    </div>
    
    <div id="family-inspector-container" style="display: none; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-bottom: 10px;">
        <h5 id="family-inspector-title" style="margin: 0; color: #333;"></h5>
        <button onclick="document.getElementById('family-inspector-container').style.display='none'" style="background: none; border: none; font-size: 1.2em; cursor: pointer; color: #888;">&times;</button>
      </div>
      <p id="family-inspector-count" style="font-size: 0.9em; color: #666; margin: 0 0 15px 0;"></p>
      <a id="family-inspector-link" href="#" style="display: block; text-align: center; background: #0A9396; color: white; padding: 10px; border-radius: 5px; text-decoration: none; font-weight: bold;">Go to Catalogue Page</a>
    </div>
  </div>

  <div class="chart-container">
    <h4 style="text-align: center;">Assumption Status</h4>
    <p style="text-align: center; font-size: 0.85em; color: #666; margin-top: -10px;">Click to inspect the specific assumptions.</p>
    <div style="position: relative; height: 350px; width: 100%; display: flex; justify-content: center;">
      <canvas id="statusChart"></canvas>
    </div>
    
    <div id="status-inspector-container" style="display: none; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-bottom: 15px;">
        <h5 id="status-inspector-title" style="margin: 0; color: #333; text-transform: capitalize;"></h5>
        <button onclick="document.getElementById('status-inspector-container').style.display='none'" style="background: none; border: none; font-size: 1.2em; cursor: pointer; color: #888;">&times;</button>
      </div>
      <ul id="status-inspector-list" style="font-size: 0.9em; padding-left: 20px; margin: 0; line-height: 1.6;"></ul>
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
  const statusData = { 
    'standard': { count: 0, items: [] }, 
    'implied': { count: 0, items: [] }, 
    'broken': { count: 0, items: [] }, 
    'unassigned': { count: 0, items: [] } 
  };

  {% for assumption in site.assumptions %}
  { 
    let stat = "{{ assumption.assumption_status | downcase | strip }}";
    let listItem = `<li><a href="{{ assumption.url | relative_url }}" style="color: #333; text-decoration: none;"><strong>{{ assumption.seo_title | default: assumption.title | escape }}</strong></a></li>`;
    
    if (stat === "standard") { statusData.standard.count++; statusData.standard.items.push(listItem); }
    else if (stat === "implied") { statusData.implied.count++; statusData.implied.items.push(listItem); }
    else if (stat === "broken") { statusData.broken.count++; statusData.broken.items.push(listItem); }
    else { statusData.unassigned.count++; statusData.unassigned.items.push(listItem); }
    
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
  const baseYears = {};
  const variantYears = {};
  const nodesByYear = {};
  let totalNodes = 0;

  if (typeof assumptions !== 'undefined') {
    assumptions.forEach(node => {
      if (node.hidden === true) return; 

      const year = parseInt(node.year_published);
      if (!year || isNaN(year)) return;

      // Initialize the year array if it doesn't exist yet
      if (!nodesByYear[year]) {
        nodesByYear[year] = { base: [], variants: [] };
      }

      totalNodes++;

      if (node.is_variant === true) {
        variantYears[year] = (variantYears[year] || 0) + 1;
        nodesByYear[year].variants.push(node);
      } else {
        baseYears[year] = (baseYears[year] || 0) + 1;
        nodesByYear[year].base.push(node);
      }
    });

    const variantsEl = document.getElementById('val-variants');
    if (variantsEl) variantsEl.innerText = totalNodes;
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
  
  // 1. Assumption Status Chart (With Mobile Labels & Click Inspector)
  const statusLabels = ['Standard', 'Implied', 'Broken', 'Unassigned'];
  const statusKeys = ['standard', 'implied', 'broken', 'unassigned']; // For routing to data

  new Chart(document.getElementById('statusChart'), {
    type: 'doughnut',
    plugins: [ChartDataLabels], // <--- Local registration prevents it from breaking your Literature charts!
    data: {
      labels: statusLabels,
      datasets: [{
        data: [statusData.standard.count, statusData.implied.count, statusData.broken.count, statusData.unassigned.count],
        backgroundColor: ['#5cb85c', '#5c9abd', '#d9534f', '#6f777d'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: { 
        legend: { display: false },
        // Standard tooltips work fine here, so we remove the buggy custom callback
        datalabels: {
          // ONLY display the numbers inside the pie if the screen is mobile-sized (< 768px)
          display: function(context) {
            return window.innerWidth < 768 && context.dataset.data[context.dataIndex] > 0;
          },
          color: '#ffffff',
          font: { weight: 'bold', size: 14 }
        }
      },
      onHover: (event, chartElement) => {
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      },
      // Click handler to open the Inspector Panel
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const statusName = statusLabels[index];
          const key = statusKeys[index];
          const items = statusData[key].items;

          document.getElementById('status-inspector-title').innerText = `${statusName} Assumptions`;
          
          if (items.length === 0) {
            document.getElementById('status-inspector-list').innerHTML = '<li style="color: #999; list-style: none; margin-left: -20px;">None found.</li>';
          } else {
            // Sort alphabetically before injecting
            document.getElementById('status-inspector-list').innerHTML = items.sort().join('');
          }
          
          document.getElementById('status-inspector-container').style.display = 'block';
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
      // Smart routing: Panel for Mobile, Instant Navigation for Desktop
      onClick: (event, elements, chart) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;
          const dataset = chart.data.datasets[datasetIndex];
          
          let url = '/catalogue/';
          let name = "";
          let count = dataset.data[dataIndex];
          
          // Determine URL and Name based on which ring was clicked
          if (datasetIndex === 1) { // Inner Ring (Main Families)
            name = dataset.customLabels[dataIndex];
            url += slugify(dataset.customFam[dataIndex]) + '/';
          } else if (datasetIndex === 0) { // Outer Ring (Subfamilies)
            const familySlug = slugify(dataset.customParentFam[dataIndex]);
            const rawSubFam = dataset.customLabels[dataIndex];
            name = rawSubFam;
            
            if (rawSubFam === 'Unclassified') {
              url += `${familySlug}/`;
              name = `${dataset.customParentFam[dataIndex]} (Unclassified)`;
            } else {
              url += `${familySlug}/${slugify(rawSubFam)}/`;
            }
          }

          // Reliably detect if user is on a mobile device / touch screen
          const isTouchDevice = window.matchMedia("(hover: none), (max-width: 768px)").matches;

          if (isTouchDevice) {
            // Mobile: Show the Inspector Panel with info and link
            document.getElementById('family-inspector-title').innerText = name;
            document.getElementById('family-inspector-count').innerText = `Contains ${count} assumption${count > 1 ? 's' : ''}.`;
            document.getElementById('family-inspector-link').href = url;
            document.getElementById('family-inspector-container').style.display = 'block';
          } else {
            // Desktop: Navigate immediately
            window.location.href = url;
          }
        }
      }
    }
  });

  // ==========================================
  // ASSUMPTION TIMELINE CHART & INSPECTOR
  // ==========================================
  const allIntroYears = new Set([...Object.keys(baseYears).map(Number), ...Object.keys(variantYears).map(Number)]);
  const sortedIntroYears = Array.from(allIntroYears).sort();

  if (sortedIntroYears.length > 0) {
    const minIntroYear = Math.min(...sortedIntroYears);
    const maxIntroYear = Math.max(...sortedIntroYears);
    const completeIntroYears = [];
    const baseCounts = [];
    const variantCounts = [];

    for (let y = minIntroYear; y <= maxIntroYear; y++) {
      completeIntroYears.push(y);
      baseCounts.push(baseYears[y] || 0);
      variantCounts.push(variantYears[y] || 0);
    }

    new Chart(document.getElementById('introChart'), {
      type: 'bar',
      data: {
        labels: completeIntroYears,
        datasets: [
          { label: 'Base Assumptions', data: baseCounts, backgroundColor: '#0A9396' },
          { label: 'Variants', data: variantCounts, backgroundColor: '#EE9B00' }
        ]
      },
      options: {
        responsive: true,
        scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } },
        plugins: { legend: { position: 'bottom' } },
        // 1. Change cursor to pointer to indicate clickability
        onHover: (event, chartElement) => {
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        },
        // 2. Handle the click to open the inspector
        onClick: (event, elements, chart) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const clickedYear = chart.data.labels[index];
            const dataForYear = nodesByYear[clickedYear];
            
            if (dataForYear) {
              document.getElementById('inspector-year').innerText = clickedYear;
              
              // Helper to generate the list items
              const buildList = (items) => {
                if (items.length === 0) return '<li style="color: #999; list-style: none; margin-left: -20px;">None</li>';
                return items.sort((a,b) => a.title.localeCompare(b.title))
                            .map(n => `<li><a href="${n.url}" style="color: #333; text-decoration: none;"><strong>${n.label}</strong>: ${n.title}</a></li>`)
                            .join('');
              };

              document.getElementById('inspector-base-list').innerHTML = buildList(dataForYear.base);
              document.getElementById('inspector-variant-list').innerHTML = buildList(dataForYear.variants);
              
              // Reveal the panel
              document.getElementById('year-details-container').style.display = 'block';
            }
          }
        }
      }
    });
  }

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
  // SANITY CHECKS (Development Only)
  // ==========================================
  {% if jekyll.environment == "development" %}
  function runSanityChecks() {
    const errors = [];
    const totalAssumptionPages = {{ site.assumptions | size | default: 0 }};
    
    // Test 1: Do the Statuses sum to the Total Assumptions?
    const sumStatuses = statusData.standard.count + statusData.implied.count + statusData.broken.count + statusData.unassigned.count;
    if (sumStatuses !== totalAssumptionPages) {
      errors.push(`Status Mismatch: Statuses sum to ${sumStatuses}, but there are ${totalAssumptionPages} pages.`);
    }

    // Test 2: Do the Families/Subfamilies sum to the Total Assumptions?
    let sumFamilies = 0;
    for (const [fam, subObj] of Object.entries(familyData)) {
      let famTotal = 0;
      for (const count of Object.values(subObj)) {
        famTotal += count; 
      }
      sumFamilies += famTotal;
    }
    if (sumFamilies !== totalAssumptionPages) {
      errors.push(`Family Mismatch: Subfamilies sum to ${sumFamilies}, but there are ${totalAssumptionPages} pages.`);
    }

    // Test 3 & 4: Do the Bibliography extractions match the Total Papers?
    if (typeof yearData !== 'undefined' && typeof venueData !== 'undefined') {
      const sumVenues = Object.values(venueData).reduce((acc, v) => acc + v.count, 0);
      if (sumVenues !== totalPapers) {
        errors.push(`Venue Mismatch: Venue counts sum to ${sumVenues}, but the bib file has ${totalPapers} papers.`);
      }

      const sumYears = Object.values(yearData).reduce((acc, count) => acc + count, 0);
      if (sumYears !== totalPapers) {
        errors.push(`Year Mismatch: Year counts sum to ${sumYears}, but the bib file has ${totalPapers} papers.`);
      }
    }

    // Test 5: Graph Extraction vs Markdown Extraction Count
    const totalBaseInGraph = Object.values(baseYears).reduce((a, b) => a + b, 0);
    if (totalBaseInGraph !== totalAssumptionPages) {
      errors.push(`Integrity Error: You have ${totalAssumptionPages} markdown files, but ${totalBaseInGraph} base assumptions in data.js.`);
    }

    // Test 6: Cross-Origin ID Mapping
    const jekyllDocs = [
      {% for a in site.assumptions %}
        { title: "{{ a.title | escape }}", graph_id: "{{ a.graph_id | escape }}" }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];
    
    if (typeof assumptions !== 'undefined') {
      const graphNodes = assumptions.filter(n => n.hidden !== true && n.is_variant !== true);
      const graphIds = graphNodes.map(n => n.id || n.label);
      const jekyllIds = jekyllDocs.map(d => d.graph_id);

      // Check Markdown against data.js
      const missingInDataJs = jekyllDocs.filter(doc => !graphIds.includes(doc.graph_id));
      if (missingInDataJs.length > 0) {
        missingInDataJs.forEach(doc => {
          errors.push(`Orphaned Markdown: "${doc.title}" has graph_id "${doc.graph_id}", but no matching base node exists in data.js.`);
        });
      }

      // Check data.js against Markdown
      const missingInJekyll = graphNodes.filter(node => !jekyllIds.includes(node.id || node.label));
      if (missingInJekyll.length > 0) {
        missingInJekyll.forEach(node => {
          errors.push(`Missing Markdown: Base node "${node.id || node.label}" exists in data.js, but no Markdown file references it.`);
        });
      }
    }

    // If error, then log in console
    if (errors.length > 0) {
      console.group("Zoo Statistics Sanity Checks FAILED");
      errors.forEach(err => console.error(err));
      console.groupEnd();
    } else {
      console.log("Zoo Statistics Sanity Checks Passed");
    }
  }

  // Execute the tests
  runSanityChecks();
  {% endif %}

});
</script>
