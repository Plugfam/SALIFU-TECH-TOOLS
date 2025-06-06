
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Karim Salifu's Site</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    /* Top Menu Styles */
    .top-bar {
      background: #075E54;
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .menu {
      position: relative;
      display: inline-block;
    }
    .menu-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .menu-content a {
      color: black;
padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .menu-content a:hover {
      background-color: #ddd;
    }
    .menu:hover .menu-content {
      display: block;
    }
    /* Content Sections */
    .content-section {
      display: none;
      padding: 20px;
    }
    .settings span {
      color: red;
      display: block;
    }
    /* Bottom Tab Navigation */
    .tab-nav {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #075E54;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;
    }
    .tab-nav div {
      color: white;
      text-align: center;
      flex-grow: 1;
      cursor: pointer;
      padding: 10px 0;
    }
    .tab-nav .active {
      background: #128C7E;
    }
    .tab-content {
      display: none;
      padding: 20px;
    }
  </style>
</head>
<body>

<!-- Top Bar -->
<div class="top-bar">
  <div>Welcome to Karim's Site</div>
  <div class="menu">
    ☰
    <div class="menu-content">
      <a href="#" onclick="showSection('about')">ABOUT</a>
      <a href="#" onclick="showSection('contact')">CONTACT</a>
      <a href="#" onclick="showSection('service')">SERVICE</a>
      <a href="#" onclick="showSection('settings')">SETTINGS</a>
    </div>
</div>
</div>

<!-- Content Sections -->
<div id="about" class="content-section">
  <h3>ABOUT</h3>
  <p>I'm Karim Salifu from Nalerigu, North East Region. A web developer, graphic designer, and provide all kinds of scam proofs.</p>
</div>

<div id="contact" class="content-section">
  <h3>CONTACT</h3>
  <p>Phone: 0559278841</p>
  <p>Email: karimsalifu2740@gmail.com</p>
</div>

<div id="service" class="content-section">
  <h3>SERVICE</h3>
  <p>Graphic Design, iPrint, Artist, Hacker</p>
</div>

<div id="settings" class="content-section settings">
  <h3>SETTINGS</h3>
  <span>Font</span>
  <span>Theme</span>
  <span>Logout</span>
</div>

<!-- Tab Content -->
<div id="chats" class="tab-content">
  <h3>Chats</h3>
  <p>This is the Chats section.</p>
</div>

<div id="status" class="tab-content">
  <h3>Status</h3>
  <p>This is the Status section.</p>
</div>

<div id="calls" class="tab-content">
  <h3>Calls</h3>
  <p>This is the Calls section.</p>
</div>

<div id="tab-settings" class="tab-content">
  <h3>Settings</h3>
  <p>This is the Settings section.</p>
</div>

<!-- Bottom Tab Navigation -->
<div class="tab-nav">
  <div onclick="showTab('chats')" id="tab-chats">Chats</div>
  <div onclick="showTab('status')" id="tab-status">Status</div>
<div onclick="showTab('calls')" id="tab-calls">Calls</div>
  <div onclick="showTab('tab-settings')" id="tab-tab-settings">Settings</div>
</div>

<script>
  // Function to show top menu sections
  function showSection(id) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
  }

  // Function to show tab content
  function showTab(id) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';

    // Update active tab
    var tabButtons = document.querySelectorAll('.tab-nav div');
    tabButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    document.getElementById('tab-' + id).classList.add('active');
  }

  // Initialize default tab
  showTab('chats');
</script>

</body>
</html>
