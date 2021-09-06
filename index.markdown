---
layout: default
page: index
title: W project
---

{% include navbar.html %}

<div class="home-section">
    <h4 class="home-tag">photography</h4>
    <h1 class="home-title">W project</h1>
<div class="home-text-container">
    <a class="home-button" href="/about">About W project</a>
    <p class="home-parag">W project is a photography studio based in Barcelona where you can make your projects come to life.
<br>We help you with your vision.</p>
</div>
{% include footer.html %}
    <img src="/assets/images/home-arrow.svg" class="home-arrow" alt="white arrow down"/>
    <div class="video-container">
        <iframe src="https://streamable.com/e/dme3zn?autoplay=1&nocontrols=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>
    </div>
</div>
{% include circlelogo.html %}
<div class="projects-section" id="projects">
    <div id="project-one"   class="project-one-section">
        <div class="stack stack1">
            <div class="card card1" style="background-image: url(../assets/images/editorial1.jpg); background-size: cover"></div>
            <div class="card card1" style="background-image: url(../assets/images/editorial2.jpg); background-size: cover"></div>
            <div class="card card1" style="background-image: url(../assets/images/editorial3.jpg); background-size: cover"></div>
            <div class="card card1" style="background-image: url(../assets/images/editorial4.jpg); background-size: cover"></div>
            <div class="card card1" style="background-image: url(../assets/images/editorial5.jpg); background-size: cover"></div>
        </div>
        <h4 class="projects-tag">projects</h4>
        <h2 class="projects-category">Editorial</h2>
        <a href=""></a>
        <a href="#project-two">
            <h3 class="projects-next">NEXT</h3>
        </a>
        <p class="projects-next-line"></p>
    </div>
    <div id="project-two"  class="project-two-section">
        <div class="stack stack2">
            <div class="card card2" style="background-image: url(../assets/images/wed1.jpg); background-size: cover"></div>
            <div class="card card2" style="background-image: url(../assets/images/wed2.jpg); background-size: cover"></div>
            <div class="card card2" style="background-image: url(../assets/images/wed3.jpg); background-size: cover"></div>
            <div class="card card2" style="background-image: url(../assets/images/wed4.jpg); background-size: cover"></div>
            <div class="card card2" style="background-image: url(../assets/images/wed5.jpg); background-size: cover"></div>
        </div>
        <h4 class="projects-tag">projects</h4>
        <h2 class="projects-category">Weddings</h2>
        <a href="#project-three">
            <h3 class="projects-next">NEXT</h3>
        </a>
        <p class="projects-next-line"></p>
        <a href="#project-one">
            <h3 class="projects-previous">PREVIOUS</h3>
        </a>
        <p class="projects-previous-line"></p>
    </div>
    <div id="project-three" class="project-three-section">
    <div class="stack stack3">
            <div class="card card3" style="background-image: url(../assets/images/event1.jpg); background-size: cover"></div>
            <div class="card card3" style="background-image: url(../assets/images/event2.jpg); background-size: cover"></div>
            <div class="card card3" style="background-image: url(../assets/images/event3.jpg); background-size: cover"></div>
            <div class="card card3" style="background-image: url(../assets/images/event4.jpg); background-size: cover"></div>
            <div class="card card3" style="background-image: url(../assets/images/event5.jpg); background-size: cover"></div>
        </div>
        <h4 class="projects-tag">projects</h4>
        <h2 class="projects-category">Events</h2>
        <a href="#project-two">
            <h3 class="projects-previous">PREVIOUS</h3>
        </a>
        <p class="projects-previous-line"></p>
    </div>
</div>
<script src="../js/cardstack.js"></script>
 <script src="../js/circlelogo.js"></script>
 <script src="../js/bgvideo.js"></script>
