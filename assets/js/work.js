const projects = [
  {
    imageLink: "#",
    imageSrc: "images/status-check.png",
    imageAlt: "Screenshot of the status check porfolio project",
    name: "Status Check - Full Stack",
    description:
      "Tracks whether a resource is up or down based on the HTTP response code. The server will ping the resource every 30 minutes.",
    githubLink: "https://github.com/jess-daniel/node_status_check_be",
    deployedLink: "https://status-check-fe.vercel.app/",
  },
  {
    imageLink: "#",
    imageSrc: "images/budget-blocks.png",
    imageAlt: "Screenshot of the Budget Blocks portfolio project",
    name: "Budget Blocks - Full Stack",
    description:
      "Track your spending in differnent categories with the Plaid banking integration. A build-on project with 6 other engineers. Mobile-first design",
    githubLink: "https://github.com/jess-daniel/budget-blocks-be",
    deployedLink: "https://www.budgetblocks.org",
  },
  {
    imageLink: "#",
    imageSrc: "images/brewery-info.png",
    imageAlt: "Screenshot of the brewery info porfolio project",
    name: "Brewery Info - React Frontend",
    description:
      "Consumes and displays data from a public brewery data API. Uses React, Material-UI, Styled-Components, and Conflux for state management",
    githubLink: "https://github.com/jess-daniel/conflux-example",
    deployedLink: "https://brewery-info.netlify.app/",
  },
  {
    imageLink: "#",
    imageSrc: "images/space-shooter.png",
    imageAlt: "Screenshot of the Space Shooter 2D demo game in unity",
    name: "Space Shooter - Unity",
    description:
      "A 2D unity project with art and music provided. Developed with custom C# for scoring, upgrades, health and taking damage. Hosted on itch.io",
    githubLink: "https://github.com/jess-daniel/SpaceShooterDemo",
    deployedLink: "https://jess-daniel.itch.io/space-shooter-demo",
  },
];

// https://brewery-info.netlify.app/
/*
*** Desired HTML Structure ***
<div class="col-4 col-6-medium col-12-small">
    <article class="box style2">
        <a href="#" class="image featured">
            <img src="images/responsive_design_screenshot.png" alt=""/>
        </a>
        <h3>
            <a href="#">Responsive Design</a>
        </h3>
        <p>
            A fully responsive website based on designs of a potential
            start-up company website.
        </p>
        <a 
        href="https://github.com/jess-daniel/responsive-web-design-I/tree/Michael-Daniel"
        class="button small scrolly">
            View Code
        </a>
    </article>
</div>
*/

const makeProject = (project) => {
  // create elements
  const card = document.createElement("div");
  const article = document.createElement("article");
  const imageLink = document.createElement("a");
  const image = document.createElement("img");
  const projectName = document.createElement("h3");
  const projectDescription = document.createElement("p");
  const githubLink = document.createElement("a");
  const deployedLink = document.createElement("a");

  // create attributes and content
  imageLink.href = project.imageLink;
  image.src = project.imageSrc;
  image.alt = project.imageAlt;
  projectName.textContent = project.name;
  projectDescription.textContent = project.description;
  githubLink.href = project.githubLink;
  githubLink.target = "_blank";
  githubLink.textContent = "View Code";
  deployedLink.href = project.deployedLink;
  deployedLink.target = "_blank";
  deployedLink.textContent = "View Deployed Site";

  // give elements classes
  card.classList.add("col-4");
  card.classList.add("col-6-medium");
  card.classList.add("col-12-small");
  article.classList.add("box");
  article.classList.add("style2");
  imageLink.classList.add("image");
  imageLink.classList.add("featured");
  githubLink.classList.add("button");
  githubLink.classList.add("small");
  githubLink.classList.add("scrolly");
  deployedLink.classList.add("button");
  deployedLink.classList.add("small");
  deployedLink.classList.add("scrolly");

  // create structure
  card.appendChild(article);
  article.appendChild(imageLink);
  imageLink.appendChild(image);
  article.appendChild(projectName);
  article.appendChild(projectDescription);
  article.appendChild(githubLink);
  article.appendChild(deployedLink);

  return card;
};

const root = document.querySelector(".projects");

projects.forEach((project) => {
  const card = makeProject(project);
  root.appendChild(card);
});
