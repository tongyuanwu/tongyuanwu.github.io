---
layout: about
title: about
permalink: /
one_page_nav: true
show_home_news: false

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
    My research lies at the intersection of <strong>sustainable construction</strong> and
    <strong>industrial ecology</strong>. Using material flow, carbon, and spatial analysis, I study how
    construction materials shape emissions, biodiversity, and climate risks. My goal is to support a
    low-carbon, resource-efficient, climate-resilient, and biodiversity-sensitive built environment.
  </p>

  <div class="home-interests">
    <div class="home-interests-label">Research interests</div>
    <ul class="home-interest-list">
      <li>Material flow analysis of building and construction material systems</li>
      <li>Carbon accounting and decarbonization of the building sector</li>
      <li>Biodiversity impacts of construction material extraction</li>
    </ul>
  </div>

</div>

{% if page.show_home_news %}
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
{% endif %}

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

<section class="home-section one-page-section" id="research">
  <div class="home-section-kicker">What I work on</div>
  <h2>research</h2>
  <p class="home-section-intro">
    My research examines the <strong>carbon and biodiversity implications of construction materials</strong>,
    with a particular focus on cement, sand, and gravel.
  </p>

  <div class="home-project-grid">
    <article class="home-project home-project-featured home-project-static">
      <div class="home-project-image">
        <img
          src="{{ '/assets/img/research/mining-panels-ab.jpg' | relative_url }}"
          alt="Global construction aggregate extraction scenarios and country-level reductions shown in panels a and b"
          loading="lazy"
        >
      </div>
      <div class="home-project-body">
        <span class="home-card-meta">Biodiversity &amp; mining</span>
        <h3>Mapping future biodiversity risks of aggregate mining</h3>
        <p>
          Tracing how future demand for sand, gravel, and crushed stone may reshape mining footprints
          and terrestrial biodiversity risks worldwide.
        </p>
        <span class="home-project-link">Global assessment · Scenario modelling · 2025</span>
      </div>
    </article>
  </div>

</section>

<section class="home-section one-page-section" id="publications">
  <div class="home-section-kicker">Research output</div>
  <h2>publications</h2>
  <p class="home-section-intro">
    You can also find my work on
    <a href="https://scholar.google.com/citations?user=NFY15oIAAAAJ&hl=en">Google Scholar</a>.
    An asterisk denotes a corresponding author.
  </p>

  <div class="publications">
    {% bibliography %}
  </div>
</section>

<section class="home-section one-page-section" id="teaching">
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
</section>
