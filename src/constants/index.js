import haloharbor from '../assets/backgrounds/haloharbor.jpg';
import conv from '../assets/backgrounds/conv1.png';
import windforce from '../assets/backgrounds/windForce.jpg';
import compactwahan from '../assets/backgrounds/compactWahan.jpg';
import loc from '../assets/backgrounds/loc.png';
import health from '../assets/backgrounds/health.jpg';
import heart from '../assets/backgrounds/heart.png';
import cal from '../assets/backgrounds/cal.png';
import privacy from '../assets/backgrounds/priv.png';
import lock from '../assets/backgrounds/lock.png';
import iot from '../assets/backgrounds/iot.png';
import etl from '../assets/backgrounds/etl.png';
import ai from '../assets/backgrounds/ai.png';
import traffic from '../assets/backgrounds/traffic.png';
import dataprivacy from '../assets/backgrounds/datapriv.png';
import res from '../assets/backgrounds/res.png';
import lyri from '../assets/backgrounds/lyri.png';
import cognizant from '../assets/icons/cognizant.png';
import cwru from '../assets/icons/cwru.png';
import ionic from '../assets/icons/ionic.png';
import osmania from '../assets/backgrounds/osmania.jpeg';
import chase from '../assets/icons/chase-bank.png';
import {
  frontend,
  ux,
  prototyping,
  machinelearning,
  database,

} from '../assets';

export const navLinks = [
  // {
  //   id: 'about',
  //   title: 'About',
  // },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'certifications',
    title: 'Certifications',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Developer',
    icon: frontend,
  },
  {
    title: 'Software Developer',
    icon: prototyping,
  },
  {
    title: 'Data Engineer',
    icon: database,
  },
  {
    title: 'AI/ML Engineer',
    icon: machinelearning,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  
];

const projects = [
  {
    id: '1',
    name: 'Halo Harbor',
    description: 'A personal data management project which enhances data privacy and user control by integrating federated learning and secure computation technologies, offering robust protection and efficiency.',
    image: dataprivacy, 
    repo: 'https://github.com/Shikhara17/HaloHarbor',
    demo: 'https://haloharbor.io',
    techStack: 'React, CSS, Java Script, HTML, Docker, Docker Kubertees, Tailwind.css, AWS Nitro Enclave, AWS, ACA-PY, python, MongoDB, OAuth, JWT, GoogleAPI, Postman, FIGMA, Machine Learning, Federated Learning, Neural networks',
    category: ['Full Stack', 'AI/ML', 'Frontend','DevOps']
  },
  {
    id: '2',
    name: 'SYCLConv',
    description: "This project implements depthwise separable convolution using SYCL and integrates it into the AI3 framework, aiming to enhance computational efficiency by replacing PyTorch's standard conv2d implementation. Utilizing the principles from the MobileNets paper, it focuses on optimizing performance for devices with limited resources and improving inference time.",
    image: conv,
    repo: 'https://github.com/Shikhara17/SYCLConv',
    demo: 'https://drive.google.com/file/d/1EgthIjx-qHRmpkcgwEzv4zaMt_BPWXgf/view?usp=sharing',
    techStack: "SYCL, AI3 Framework, PyTorch, Tensors, CNN, Keras, Tensorflow, MobileNets Architecture, C++, NVIDIA GPU",
    category: ['Machine Learning', 'AI/ML', ]
  },
  {
    id: '5',
    name: 'ClassTrack',
    description: 'ClassTrack is an integrated system designed to streamline the process of course enrollment and attendance tracking. It enables users to easily sign up for courses and manage attendance, enhancing administrative efficiency and user accessibility.',
    image: res,
    repo: 'https://github.com/Shikhara17/ClassTrack',
    demo: 'https://github.com/Shikhara17/ClassTrack',
    techStack: 'Core Java, Java Script, HTML, CSS, Bootstrap, JSP, Servlets, Xml, Spring MVC, Spring Boot, Spring Security, MongoDB, MySQL, Microservices, Java',
    category: ['Full Stack','Frontend']
  },
  {
    id: '3',
    name: 'Smart Health Card',
    description: 'Smart Health Card is a web application designed to digitize health records, allowing secure and easy access through QR code scanning. It employs Firebase for backend operations and authentication, ensuring each account is linked with a unique QR code for streamlined data retrieval.',
    image: heart,
    repo: 'https://github.com/Shikhara17/SmartHealthCard',
    demo: 'https://github.com/Shikhara17/SmartHealthCard',
    techStack: 'HTML, CSS, JavaScript, Bootstrap, Firebase, NodeJS, Document Object Model',
    category: ['Full Stack','Frontend','Cloud']
  },
  {
    id: '4',
    name: 'WindForce ML',
    description: 'This project uses machine learning for predictive regression techniques, specifically in modeling wind turbine power curves. It addresses the challenges of intermittent renewable energy by enhancing the predictability and efficiency of wind power generation.',
    image: windforce,
    repo: 'https://github.com/Shikhara17/WindforceML',
    demo: 'https://github.com/Shikhara17/WindforceML',
    techStack: 'Python, Machine Learning, Numpy, Seaborn, Matplotlib, Sklearn and Pandas',
    category: ['Machine Learning', 'AI/ML', ]
  },
  {
    id: '6',
    name: 'Location Obfuscation',
    description: 'The project explores advanced techniques for anonymizing location data to enhance user privacy in location-based services. Utilized methods such as K-Anonymity and obfuscation, to develop privacy-preserving solutions that safeguard users against unauthorized access to their geographical information. This not only protects personal data but also addresses the increasing concerns surrounding location privacy in digital applications.',
    image: loc,
    repo: 'https://github.com/Shikhara17/LocationObfuscation',
    demo: 'https://github.com/Shikhara17/LocationObfuscation',
    techStack: 'Python, Geospatial Analysis Tools, Data Anonymization Algorithms',
    category: ['Data Privacy', 'Backend']
  },
  {
    id: '7',
    name: 'Compact Wahan',
    description: 'Compact Wahan is an IoT-based prototype for a self-driving vehicle equipped with advanced smart features. It includes self-parking capabilities, obstacle detection, and accident detection, all enabled through a network of integrated sensors. This project aims to enhance vehicular safety and autonomy, pushing the boundaries of traditional driving systems.',
    image: iot,
    repo: 'https://github.com/Shikhara17/CompactWahan',
    demo: 'https://github.com/Shikhara17/CompactWahan',
    techStack: 'IoT Devices, Sensors (LIDAR), ultrasonic, infrared, Python, Raspberry Pi, Arduino, Machine Learning Libraries',
    category: 'IOT'
  },
  {

    id: '10',
    name: 'Lyrisense',
    description: "LyriSense uses Natural Language Processing (NLP) and Machine Learning (ML) to decode emotional and thematic patterns in song lyrics. By leveraging state-of-the-art techniques like BERT tokenization and TensorFlow's distributed training strategies, it classifies lyrics into specific themes such as Sadness or Romance. This project offers significant insights for applications ranging from music streaming services to cultural studies, enabling objective, data-driven analysis of lyrical content.",
    image: lyri,
    repo: 'https://github.com/Shikhara17/LyriSense',
    demo: 'https://github.com/Shikhara17/LyriSense',
    techStack: 'Machine Learning, NLP & ML Techniques, Data Handling, Parallel Computing, BERT Tokenization, Tensorflow, keras, matplotlib, nvidia-smi, pandas, numpy, Multi Worker mirrored Strategy',
    category: ['Artificial Intelligence','Backend']
  },
  {
    id: '9',
    name: 'DataSpark',
    description: 'A data engineering project using Python and Spark to process large datasets.',
    image: etl,
    repo: 'https://github.com/Shikhara17/DataSpark',
    demo: 'https://github.com/Shikhara17/DataSpark',
    techStack: 'PySpark, AWS Elastic MapReduce (EMR), AWS S3, HDFS, PySpark, HTML, CSS, JavaScript, Bootstrap, jQuery, JSON, XML, SWAGGER, GIT, Jira, Control M, Docker, Google Kubernetes Engine, Agile Development, CI/CD',
    category: 'React'
  },
  {
    id: '8',
    name: 'Resource Rally',
    description: 'Resource Rally is an advanced resource management system that automates the collection and deposition of resources in a game environment using multiple agents. It utilizes the A* algorithm for efficient pathfinding and task execution within the SEPIA framework.',
    image: cal,
    repo: 'https://github.com/Shikhara17/ResourceRally',
    demo: 'https://github.com/Shikhara17/ResourceRally',
    techStack: 'java, Sepia, A*, Strips Action, HashMaps, Stacks',
    category: ['Artificial Intelligence','Backend']
  },
  // {
  //   id: '11',
  //   name: 'Urban Flow',
  //   description: 'This project is designed to manage traffic at a four-way intersection, ensuring efficient vehicle and pedestrian flow while maintaining safety. It features synchronized traffic signals for both vehicles and pedestrians, with distinct phases for each direction to avoid conflicts and potential accidents.',
  //   image: traffic,
  //   repo: 'https://github.com/Shikhara17/UrbanFlow',
  //   demo: 'https://github.com/Shikhara17/UrbanFlow',
  //   techStack: 'Python, Pygame, Threading',
  //   category: 'Backend'
  // }
  
  // More projects can be added here
];
const technologies = {
  Programming_Languages: [
    { name: 'C/C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
  ],
  Frontend_Technologies: [
    { name: 'HTML 5', icon: 'fab fa-html5' },
    { name: 'CSS 3', icon: 'fab fa-css3-alt' },
    { name: ' React.js ', icon: 'fab fa-react' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  ],
  Backend_Technologies: [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'OAuth', icon: 'fas fa-lock' },
    { name: 'JWT', icon: 'fas fa-lock' },
    { name: 'REST', icon: 'fas fa-network-wired' },
  ],
  Frameworks: [
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Express', icon: 'fas fa-server' }, // General representation
    { name: 'Spring Boot', icon: 'fas fa-leaf' }, // Playful reference
    { name: 'Django', icon: 'fab fa-python' } // Using Python icon
  ],
  Data_Engineer: [
    { name: 'ETL', icon: 'fas fa-tools' }, // General representation
    { name: 'HDFS', icon: 'fas fa-hdd' },
    { name: 'Map Reduce', icon: 'fas fa-stream' },
    { name: 'Hive', icon: 'fas fa-database' },
    { name: 'Apache Spark', icon: 'fas fa-bolt' },
    { name: 'Pyspark', icon: 'fas fa-bolt' }, // Using Spark icon
    { name: 'Informatica', icon: 'fas fa-info-circle' },
    { name: 'Snowflake', icon: 'fas fa-snowflake' }
  ],
  Cloud_Technologies: [
    {name: 'Amazon EC2',icon: 'fas fa-server'},
    {name: 'Amazon Athena',  icon: 'fas fa-search' },
    {name: 'Amazon RDS',icon: 'fas fa-database'},
    {name: 'Amazon DynamoDB',icon: 'fas fa-table'},
    { name: 'Amazon EC2 Nitro Enclaves',icon: 'fas fa-shield-alt' },
    { name: 'Amazon EMR',icon: 'fas fa-chart-area'}
    
  ],
  Machine_Learning: [
    { name: 'Tensorflow', icon: 'fas fa-brain' },
    { name: 'Keras', icon: 'fas fa-k' },
    { name: 'PyTorch', icon: 'fas fa-fire-flame-curved' },
    { name: 'Scikit-Learn', icon: 'fas fa-robot' }
  ],
  DevOps: [
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fab fa-sun' },
    { name: 'Jenkins', icon: 'fab fa-jenkins' },
    { name: 'git', icon: 'fab fa-git-alt' },
    { name: 'Bitbucket', icon: 'fab fa-bitbucket' },
    { name: 'Django', icon: 'fab fa-python' } // Using Python icon
  ],
  Database_Technologies: [
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-database' }
  ],
  Other_Tools: [
    { name: 'OAUTH', icon: 'fas fa-user-lock' },
    { name: 'JWT', icon: 'fas fa-key' },
    { name: 'REST', icon: 'fas fa-network-wired' },
    { name: 'Control-M', icon: 'fas fa-cogs' },
    { name: 'Jira', icon: 'fas fa-jira' },
    { name: 'Swagger', icon: 'fas fa-file-code' },
    { name: 'Postman', icon: 'fas fa-mail-bulk' }
  ]
};

const educations = [
  {
    title: 'Masters in Computer Science',
    company_name: 'Case Western Reserve University',
    icon: cwru,
    iconBg: '#003071',
  },
  {
    title: 'Bachelor of Engieering in Electrical and Electronic Engineering',
    company_name: 'Osmania University',
    icon: osmania,
    iconBg: '#fff',
  },
  
];


const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Ionic Health',
    icon: ionic,
    iconBg: '#3c9eb0',
    date: 'Jan 2024 - Present',
    age:'1+ years',
    techUsed:`<ul>
    <li><strong>Front-End:</strong> React, Redux, JavaScript/TypeScript, HTML5, CSS3 (Tailwind CSS, LESS), jQuery</li>
    <li><strong>Back-End:</strong> C# (.NET Core/MVC), VB.NET, ASP.NET Web API (REST/OData), Entity Framework, Node.js (for certain services)</li>
    <li><strong>Data & Analytics:</strong> SQL Server (T-SQL), PostgreSQL, Apache Spark, Apache Kafka, SSRS, Report Builder</li>
    <li><strong>Cloud & DevOps:</strong> AWS S3 (cloud storage), Azure DevOps (CI/CD pipelines), GitHub, TFS, Docker, Kubernetes</li>
    <li><strong>Security:</strong> OAuth 2.0, JWT, Role-Based Access Control, Healthcare data compliance (HIPAA)</li>
</ul>`,
    contributions: `<ul>
    <li>Enhanced overall system performance by 30% through back-end optimization and efficient use of .NET and database technologies.</li>
    <li>Decreased API request latency by 20% by implementing optimized web services (REST/OData) and improving client-server data exchange patterns.</li>
    <li>Reduced database query execution times by 40% through query optimization and indexing, significantly speeding up data retrieval for large medical imaging datasets.</li>
    <li>Cut front-end load times by 30% through responsive design and code-splitting techniques, providing faster access to the application for end-users.</li>
    
    <li>Ensured 99.9% system uptime and reliability for the application’s services by implementing robust cloud infrastructure and fail-safes.</li>
    <li>Strengthened security by reducing unauthorized access attempts by 25% through the introduction of strict authentication and authorization measures.</li>
</ul>`,
    description: `
            <ul>
                <li>Developed and maintained a SaaS-based healthcare web application using .NET (C# and VB.NET with ASP.NET and Entity Framework) and SQL Server.</li>
                <li>Built and consumed RESTful APIs (including OData services) to enable seamless communication between front-end clients and server-side components.</li>
                <li>Created responsive and dynamic user interfaces using React, TypeScript, HTML5/CSS3 (with LESS), and JavaScript (including jQuery) to enhance user experience for clinicians and patients.</li>
                <li>Integrated real-time updates via WebSockets on the front end to live-stream medical imaging data (CT scans), allowing instant data refreshes for radiologists.</li>
                <li>Optimized database operations and data storage by designing efficient T-SQL queries, stored procedures, and indexing strategies on SQL Server and PostgreSQL to improve query execution times.</li>
                
                <li>Implemented robust security and privacy measures to comply with healthcare regulations (HIPAA), including OAuth 2.0 authorization, JWT-based authentication, and role-based access control (RBAC).</li>
                <li>Managed source control and automated deployments using Azure DevOps and GitHub/TFS, setting up CI/CD pipelines to streamline testing and deployment.</li>
                <li>Developed advanced reporting features using SQL Server Reporting Services (SSRS) and Report Builder to provide real-time financial and operational analytics.</li>
            </ul>`
  
  },
  // <li>c:Improved anomaly detection in medical images by 30% after integrating machine learning pipelines (Spark and Kafka), leading to quicker and more accurate identification of critical cases.</li>
  // <li>d:Integrated secure cloud storage via AWS S3 for storing large imaging files, ensuring reliable retrieval and backup of medical data.</li>
  //  li>d: Incorporated AI-driven data processing in the workflow by leveraging Apache Spark and Apache Kafka pipelines to process imaging data and detect anomalies in scans.</li>
  {
    title: 'Graduate Research Assistant',
    company_name: 'Case Western Reserve University',
    icon: cwru,
    iconBg: '#003071',
    date: 'Jan 2024 - Present',
    age:'1+ years',
    techUsed:`<ul>
    <li><strong>Programming & ML:</strong> Python (for data analysis and scripting), TensorFlow (for machine learning), scikit-learn, OpenAI GPT, Hugging Face Transformers</li>
    <li><strong>Data Analysis:</strong> Statistical methods, numerical algorithms, predictive analytics tools, and deep learning models for text and image generation</li>
    <li><strong>Generative AI:</strong> OpenAI API, Stable Diffusion, LangChain, LLM-based automation</li>
    <li><strong>Reporting & Visualization:</strong> Automated reporting using pandas, matplotlib, Excel, Power BI, and AI-generated insights using NLP</li>
</ul>
`,
    contributions: `<ul>
    <li>Increased predictive model accuracy by 15% by refining ML algorithms and incorporating Generative AI models for data augmentation.</li>
    <li>Reduced data analysis time by 50% by automating report generation using NLP-powered AI summarization tools.</li>
    <li>Improved data processing efficiency by 20% using optimized numerical methods, OOP, and AI-assisted anomaly detection.</li>
    <li>Boosted decision-making accuracy by 10% for program directors by implementing AI-driven forecasting models.</li>
    <li>Mentored 10 interns, training them in traditional ML techniques and cutting-edge Generative AI technologies.</li>
</ul>`,
    description:`
    <ul>
    <li>Increased predictive model accuracy by 15% by refining ML algorithms and incorporating Generative AI models for data augmentation.</li>
    <li>Reduced data analysis time by 50% by automating report generation using NLP-powered AI summarization tools.</li>
    <li>Improved data processing efficiency by 20% using optimized numerical methods, OOP, and AI-assisted anomaly detection.</li>
    <li>Boosted decision-making accuracy by 10% for program directors by implementing AI-driven forecasting models.</li>
    <li>Mentored 10 interns, training them in traditional ML techniques and cutting-edge Generative AI technologies.</li>
</ul>
    ` 
  },
  {
    title: 'Software Developer Engineer',
    company_name: 'JP Morgan Chase & Co - Cognizant',
    icon: chase,
    iconBg: '#fff',
    date: 'Jan 2021 - Dec 2023',
    age: '3 years',
  techUsed:`<ul>
  <li><strong>Programming & Frameworks:</strong> Java (J2EE, Spring Boot), Python (PySpark), JavaScript/TypeScript (Node.js, Express.js, GraphQL)</li>
  <li><strong>Data & Storage:</strong> Hadoop (Hive, HDFS), Relational databases (AWS RDS, PostgreSQL), NoSQL databases (DynamoDB)</li>
  <li><strong>Caching Tools:</strong> Redis, Elasticsearch</li>
  <li><strong>Cloud & DevOps:</strong> AWS services (EC2, S3, EMR), Containerization (Docker, Kubernetes)</li>
  <li><strong>CI/CD Pipelines:</strong> Jenkins, Bitbucket, GitHub Actions</li>
  <li><strong>Version Control:</strong> BitBucket, Git</li>
</ul>`,
  contributions: `<ul>
  <li>Reduced operational costs by 20% and saved 10+ hours per week by automating data pipeline workflows and reporting processes.</li>
  <li>Implemented a big data analytics platform that contributed to a 25% increase in revenue over two years by enabling deeper insights into customer data.</li>
  <li>Saved approximately $40,000 annually through optimized ETL pipelines that streamlined data ingestion for multiple business units.</li>
  <li>Accelerated data processing speeds by 65% by integrating Hadoop into existing ETL operations, significantly improving batch processing times.</li>
  <li>Achieved 99.98% system uptime by leveraging a containerized microservices architecture and robust cloud infrastructure, ensuring high availability of critical applications.</li>
  <li>Decreased deployment failures by 20% and accelerated release cycles via improved CI/CD practices, resulting in more reliable and frequent software releases.</li>
</ul>`,
     description:`
      <ul>
      <li>Developed scalable cloud-native applications and microservices using Java, Python, and Node.js to support enterprise banking operations.</li>
      <li>Built high-performance APIs (REST and GraphQL) for cross-platform integration across 10+ internal departments.</li>
      <li>Designed and optimized large-scale data pipelines and ETL workflows to handle big data processing needs.</li>
      <li>Implemented Hadoop-based solutions (Hive, HDFS, PySpark) for batch and real-time data analytics, integrating them with traditional ETL processes.</li>
      <li>Deployed and managed containerized services on cloud platforms (AWS EC2, S3, EMR) using Docker and Kubernetes to ensure scalability and resilience.</li>
      <li>Improved continuous integration and delivery (CI/CD) pipelines using Jenkins, Bitbucket, and GitHub Actions to accelerate release cycles.</li>
      <li>Optimized backend performance through caching and database tuning using Redis and Elasticsearch to improve data retrieval latency.</li>
      <li>Collaborated on system design and architecture, analyzing software requirements and creating detailed design documents to improve maintainability.</li>
      <li>Ensured coding best practices and documentation standards were followed across the team.</li>
      <li>Mentored a team of 4 junior developers, providing guidance in coding standards, system design, and debugging techniques to improve productivity and code quality.</li>
  </ul>
`
},
  {
    title: 'Software Developer',
    company_name: 'Cognizant',
    icon: cognizant,
    iconBg: '#fff',
    date: 'Jan 2021 - Jul 2021',
    techUsed:` <ul>
    <li><strong>Languages & Frameworks:</strong> Java (J2EE, Spring), Python (Flask/PySpark), C# (ASP.NET MVC), Hadoop (HDFS, MapReduce)</li>
    <li><strong>Databases & Reporting:</strong> SQL Server, PostgreSQL, Hibernate (ORM), SQLAlchemy (Python ORM), SSRS, Crystal Reports</li>
    <li><strong>Tools & Methodologies:</strong> Azure DevOps, TFS (source control), Agile/Scrum, Jenkins (CI builds), OAuth 2.0 & JWT</li>
</ul>`,
contributions: `<ul>
    <li>Improved overall system efficiency by 25% through backend optimization and performance tuning.</li>
    <li>Increased data analysis speed by 35% by developing advanced analytics tools using Hadoop and PySpark.</li>
    <li>Reduced server infrastructure costs by 20% after migrating legacy applications to a microservices architecture.</li>
    <li>Cut application load times by 40% through code refactoring and caching strategies.</li>
    <li>Decreased database query execution time by 25% by optimizing SQL queries and database transactions.</li>
</ul>`,
       description:`
       <ul>
       <li>Developed enterprise analytics tools and backend microservices to improve client business processes.</li>
       <li>Utilized Java and Python ecosystems with Hadoop and PySpark for big data processing and analysis tasks.</li>
       <li>Created data pipelines to aggregate and analyze large datasets, providing valuable business insights.</li>
       <li>Developed SaaS web applications using ASP.NET MVC with C# and Entity Framework, backed by SQL Server and PostgreSQL.</li>
       <li>Designed and implemented custom reporting modules using SQL Server Reporting Services (SSRS) and Crystal Reports.</li>
       <li>Implemented secure authentication and authorization systems using OAuth 2.0 and JWT tokens for role-based access control.</li>
       <li>Collaborated in an Agile (Scrum) environment, coordinating with cross-functional teams for efficient project delivery.</li>
   </ul>
  `
  }
];


export { services, technologies, experiences, projects ,educations};
