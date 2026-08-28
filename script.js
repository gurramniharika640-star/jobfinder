const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bangalore",
    category: "Web Development",
    experience: "Fresher",
    salary: "₹4 - ₹6 LPA",
    description: "Build responsive websites using HTML, CSS and JavaScript."
  },

  {
    title: "Web Developer",
    company: "Digital Works",
    location: "Hyderabad",
    category: "Web Development",
    experience: "1-2 Years",
    salary: "₹5 - ₹8 LPA",
    description: "Develop and maintain modern web applications."
  },

  {
    title: "Software Developer",
    company: "Innovate Labs",
    location: "Chennai",
    category: "Software Development",
    experience: "2-4 Years",
    salary: "₹8 - ₹12 LPA",
    description: "Work on software development and application maintenance."
  },

  {
    title: "Data Scientist",
    company: "DataTech",
    location: "Pune",
    category: "Data Science",
    experience: "1-2 Years",
    salary: "₹7 - ₹10 LPA",
    description: "Analyze data and create machine learning solutions."
  },

  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Bangalore",
    category: "UI/UX",
    experience: "Fresher",
    salary: "₹3 - ₹5 LPA",
    description: "Design simple and user-friendly interfaces."
  },

  {
    title: "Junior Software Engineer",
    company: "CodeWorld",
    location: "Hyderabad",
    category: "Software Development",
    experience: "Fresher",
    salary: "₹4 - ₹6 LPA",
    description: "Develop software applications and solve programming problems."
  }
];

const jobContainer = document.getElementById("jobContainer");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const categoryFilter = document.getElementById("categoryFilter");
const experienceFilter = document.getElementById("experienceFilter");

function displayJobs() {

  const searchText = searchInput.value.toLowerCase();
  const location = locationFilter.value;
  const category = categoryFilter.value;
  const experience = experienceFilter.value;

  const filteredJobs = jobs.filter(job => {

    const matchesSearch =
      job.title.toLowerCase().includes(searchText);

    const matchesLocation =
      location === "" || job.location === location;

    const matchesCategory =
      category === "" || job.category === category;

    const matchesExperience =
      experience === "" || job.experience === experience;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesExperience
    );
  });

  jobContainer.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobContainer.innerHTML =
      `<div class="no-results">
        <h3>No jobs found 🚫</h3>
        <p>Try changing your search or filters.</p>
      </div>`;
    return;
  }

  filteredJobs.forEach((job, index) => {

    jobContainer.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p>🏢 ${job.company}</p>
        <p>📍 ${job.location}</p>
        <p>💼 ${job.category}</p>
        <p>🎓 ${job.experience}</p>
        <p>💰 ${job.salary}</p>

        <button class="view-btn"
          onclick="showDetails(${jobs.indexOf(job)})">
          View Details
        </button>

        <button class="apply-btn"
          onclick="applyJob('${job.title}')">
          Apply
        </button>
      </div>
    `;
  });
}

function showDetails(index) {

  const job = jobs[index];

  document.getElementById("jobDetails").innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Category:</strong> ${job.category}</p>
    <p><strong>Experience:</strong> ${job.experience}</p>
    <p><strong>Salary:</strong> ${job.salary}</p>
    <p><strong>Description:</strong> ${job.description}</p>

    <button class="apply-btn"
      onclick="applyJob('${job.title}')">
      Apply Now
    </button>
  `;

  document.getElementById("jobModal").style.display = "block";
}

function closeModal() {
  document.getElementById("jobModal").style.display = "none";
}

function applyJob(jobTitle) {
  alert("Application started for: " + jobTitle);
}

searchInput.addEventListener("input", displayJobs);
locationFilter.addEventListener("change", displayJobs);
categoryFilter.addEventListener("change", displayJobs);
experienceFilter.addEventListener("change", displayJobs);

displayJobs();