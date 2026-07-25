---
layout: about
title: about
permalink: /

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p><a href="https://www.cityu.edu.hk/en/ace/">Department of Architecture and Civil Engineering (ACE)</a></p>
    <p>City University of Hong Kong</p>
    <p>Kowloon Tong, Hong Kong</p>

selected_papers: false # rendered manually after the homepage news section
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="home-intro">
  <p>
    Hello! I am <strong>Tongyuan Wu (吴统元)</strong>, a postdoctoral researcher at the
    <a href="https://www.cityu.edu.hk/en/ace/">Department of Architecture and Civil Engineering (ACE)</a>,
    City University of Hong Kong.
  </p>

  <p>
    My research broadly focuses on <strong>sustainable construction</strong>, drawing on
    <strong>industrial ecology</strong> to understand and reduce the environmental impacts of
    construction materials and building systems across their life cycles. I use material flow analysis,
    carbon accounting, and spatial analysis to examine material use and accumulation, carbon emissions,
    biodiversity impacts, and climate-related risks. My doctoral work investigated decarbonization
    pathways for cement and concrete systems, while my current research examines biodiversity risks
    associated with construction aggregate extraction and climate-related extreme events, particularly
    flooding. Across these themes, I aim to develop spatially explicit and policy-relevant evidence for
    a low-carbon, resource-efficient, climate-resilient, and biodiversity-sensitive built environment.
  </p>

  <div class="home-interests">
    <div class="home-interests-label">Research interests</div>
    <ul class="home-interest-list">
      <li>Material flow analysis of building and construction material systems</li>
      <li>Carbon accounting and decarbonization of the building sector</li>
      <li>Biodiversity impacts of construction material extraction</li>
      <li>Climate change impacts, particularly flooding, on the building sector and ecosystems</li>
    </ul>
  </div>

  <div class="home-actions">
    <a class="home-action-primary" href="{{ '/research/' | relative_url }}">Explore my research</a>
    <a class="home-action-secondary" href="{{ '/publications/' | relative_url }}">View publications</a>
  </div>
</div>

<section class="home-section home-section-news">
  <div class="home-section-kicker">Latest updates</div>
  <h2>news</h2>
  <div class="home-news-list">
    <a class="home-news-item" href="{{ '/teachings/2025-spatial-analysis-workshop/' | relative_url }}">
      <time datetime="2025-07">Jul 2025</time>
      <span>Led a hands-on spatial analysis workshop at Nankai University.</span>
      <span class="home-news-arrow" aria-hidden="true">→</span>
    </a>
    <a class="home-news-item" href="https://doi.org/10.1016/j.jclepro.2025.146375">
      <time datetime="2025">2025</time>
      <span>Published a county-level analysis of priority locations for cement-sector CCS deployment.</span>
      <span class="home-news-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="home-news-item" href="https://doi.org/10.1016/j.rser.2024.115098">
      <time datetime="2025">2025</time>
      <span>Published an integrated assessment of CCS in China's cement decarbonization pathways.</span>
      <span class="home-news-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="home-news-item" href="https://doi.org/10.1021/acs.est.4c14724">
      <time datetime="2025">2025</time>
      <span>Co-authored a stock-flow and energy-system study of China's cement industry.</span>
      <span class="home-news-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

<section class="home-section home-section-publications">
  <div class="home-section-kicker">Selected work</div>
  <h2>
    <a href="{{ '/publications/' | relative_url }}" style="color: inherit">selected publications</a>
  </h2>
  {% include selected_papers.liquid %}
</section>

<section class="home-section" id="background">
  <div class="home-section-kicker">Background</div>
  <h2>current position & education</h2>
  <div class="home-timeline">
    <div class="home-timeline-row">
      <div class="home-timeline-date">Present</div>
      <div class="home-timeline-content">
        <h3>Postdoctoral Research Fellow</h3>
        <div class="home-affiliations">
          <div class="home-affiliation">
            <span class="home-affiliation-name">City University of Hong Kong</span>
            <span>Department of Architecture and Civil Engineering (ACE)</span>
          </div>
          <div class="home-affiliation">
            <span class="home-affiliation-name">The University of Hong Kong</span>
            <span>Department of Civil Engineering</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-timeline-row">
      <div class="home-timeline-date">2024</div>
      <div class="home-timeline-content">
        <h3>Ph.D. in Construction and Infrastructure Management</h3>
        <p>The University of Hong Kong</p>
      </div>
    </div>
    <div class="home-timeline-row">
      <div class="home-timeline-date">2020</div>
      <div class="home-timeline-content">
        <h3>Master of Engineering in Construction Management</h3>
        <p>South China University of Technology</p>
      </div>
    </div>
    <div class="home-timeline-row">
      <div class="home-timeline-date">2017</div>
      <div class="home-timeline-content">
        <h3>Bachelor of Engineering in Civil Engineering</h3>
        <p>Shenzhen University</p>
      </div>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="home-section-kicker">Knowledge sharing</div>
  <h2>teaching & workshops</h2>
  <div class="home-grid home-grid-compact">
    <a class="home-card" href="{{ '/teachings/2025-spatial-analysis-workshop/' | relative_url }}">
      <span class="home-card-meta">Workshop · 2025</span>
      <h3>Spatial Analysis Workshop</h3>
      <p>Python, Google Earth Engine, remote sensing, random forests, and scientific visualization.</p>
    </a>
    <a class="home-card" href="{{ '/teachings/2020-civil-engineering-management/' | relative_url }}">
      <span class="home-card-meta">Undergraduate course · 2020–2024</span>
      <h3>Principles of Civil Engineering Management</h3>
      <p>Project planning, scheduling, cost estimation, and construction logistics.</p>
    </a>
  </div>
  <a class="home-text-link" href="{{ '/teaching/' | relative_url }}">See all teaching activities →</a>
</section>
