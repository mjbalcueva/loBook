<!-- Responsive Logo -->
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./resources/img/WhiteLogo.png" width="400" height="480">
    <source media="(prefers-color-scheme: light)" srcset="./resources/img/BlackLogo.png" width="400" height="480">
    <img alt="Logo" src="./resources/img/BlackLogo.png" width="400" height="480">
  </picture>
</p>

<!-- Badges -->
<div align="center">
  <a href="https://github.com/mjbalcueva/project-booklet/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/mjbalcueva/project-booklet?style=flat-square">
  </a>
  <a href="https://github.com/mjbalcueva/project-booklet/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors-anon/mjbalcueva/project-booklet?style=flat-square">
  </a>
  <a href="https://github.com/mjbalcueva/project-booklet/network/members">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/mjbalcueva/project-booklet?style=flat-square">
  </a>
</div>

<!-- Short Description -->
<p align="center">
Welcome to loBook, your all-in-one solution for customizing and organizing your book collection! loBook is an intuitive software crafted to elevate the reading experience for each user. Emulating a library environment, it effortlessly streamlines the management of your books.
</p>

<!-- Quick Links -->
<div align="center">
  <a href="techStack">Tech Stack</a>
  <span> • </span>
  <a href="sdlc">SDLC</a>
  <span> • </span>
  <a href="features">Features</a>
  <span> • </span>
  <a href="install">Install</a>
</div>

<!-- Showcase SECTION -->
<h2>Showcase</h2>
<img alt="sample" src="./resources/img/showcase_1.png">
<img alt="sample" src="./resources/img/showcase_2.png">

<!-- Tech SECTION -->
<h2 id="techStack">Tech Stack</h2>
<p align="justify">
The loBook tech stack combines <b>Laravel Breeze</b>, <b>React</b>, <b>PEST</b>, <b>MySQL</b>, <b>Node.js</b>, and <b>PHP</b>, collectively providing a comprehensive and robust solution for customizing and managing book collections.
</p>

<ul align="justify">
  <li><b>Laravel Breeze:</b> 
    handles user authentication and sets up the basic structure of the Laravel application.
  </li>
  <li><b>React:</b> 
    is utilized to develop the frontend (client-side) of the loBook application, providing a responsive and user-friendly interface for managing book collections.
  </li>
  <li><b>PEST:</b> 
    employed for testing various components of the PHP backend to ensure the reliability and functionality of the loBook software.
  </li>
  <li><b>MySQL:</b> 
   serves as the database management system for loBook, storing and organizing data related to book collections, user information, and other relevant data.
  </li>
  <li><b>Node.js:</b> 
    for server-side scripting and handling asynchronous tasks in the backend of the application.
   </li>
  <li><b>PHP:</b> 
    the primary server-side scripting language for the loBook application, handling the backend logic and communication with the database.
  </li>
</ul >

<!-- SDLC -->
<h2 id="sdlc">SDLC</h2>
<div align="justify">
  <p>Given the dynamic nature of the system, we have chosen the <b>iterative model</b>. This model allows for the evolution of features over successive cycles, which is especially valuable when catering to diverse needs. For example, functionalities such as adding and editing content may undergo refinement based on user feedback.

  The incremental development structure ensures that core features are delivered early, enabling users to benefit from the system's essential capabilities swiftly. Moreover, the iterative model facilitates continuous user feedback, fostering a collaborative development process that aligns the evolving system with user expectations.

  The approach's flexibility is particularly advantageous in addressing challenges associated with CSV file uploads. It allows for a gradual and refined implementation of this crucial functionality.
  </p>
</div>

<!-- Features SECTION -->
<h2 id="features">Features</h2>
<ul align="justify">
  <li><b>User-friendly Interface:</b> 
    Enhances software accessibility, foster higher user retention, and ease of use
  </li>
  <li><b>Responsive Design:</b> 
   Adapts seamlessly to the user's current device, ensuring an optimal and tailored experience 
  </li>
  <li><b>Security Measures:</b> 
    Implemented email verification to mitigate the risk of fraudulent account creation using fake or disposable email addresses
  </li>
      <li><b>File import:</b> 
   Allows the user to upload data csv data 
  </li>
</ul >

<!-- Installation SECTION -->
<h2 id="install">Installation</h2>
<p>
Welcome to the installation guide for loBook. Follow these simple steps to get started with our project:
</p>
<ol>
  <li>Clone the repository: <b>https://github.com/mjbalcueva/loBook.git</b></li>
  <li>Using the terminal, install composer: <b>composer install</b></li>
  <li>Install the node dependencies: <b>npm i</b></li>
  <li>Setup the .env variables</li>
  <li>Run table migrations using: <b>php artisan migrate</b></li>
  <li>Run the server: <b>php artisan serve</b> and <b>npm run dev</b></li>
</ol>
