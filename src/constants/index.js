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
    <li><strong>Back-End:</strong> C# , Java,C++, Node.js (for certain services)</li>
    <li><strong>Data & Analytics:</strong> SQL Server (T-SQL), PostgreSQL, Apache Spark, Apache Kafka, SSRS, Report Builder</li>
    <li><strong>Cloud & DevOps:</strong> AWS S3 (cloud storage), Azure DevOps (CI/CD pipelines), GitHub, TFS, Docker, Kubernetes</li>
    <li><strong>Security:</strong> OAuth 2.0, JWT, Role-Based Access Control, Healthcare data compliance (HIPAA)</li>
</ul>`,
    contributions: `<ul>
    <li>UI Performance Optimization: Built scalable and responsive user interfaces using ReactJS, Redux, and TypeScript, cutting UI load times by 30%.</li>
    <li>Real-Time System Integration: Integrated RESTful APIs and WebSockets for real-time updates, enhancing system performance and reducing latency by 40%.</li>
    <li>Frontend Efficiency Enhancements: Leveraged React Query, Lazy Loading, and Code Splitting to improve frontend efficiency by 35%.</li>
    <li>Security Improvements: Implemented robust security measures using OAuth 2.0, JWT, and RBAC, which increased system security and reduced unauthorized access by 25%.</li>
    <li>Reliability and Uptime: Achieved 99.9% system uptime, ensuring the platform remains highly reliable.</li>
   </ul>`,
    description: `
            <ul>
            As part of a key project, I engineered and optimized scalable, responsive user interfaces that enhanced performance and user experience. 
            I utilized ReactJS, Redux, and TypeScript to build dynamic UIs while significantly reducing load times by 30%. By integrating real-time updates through RESTful APIs and WebSockets, 
            I enabled efficient and fast imaging updates, decreasing latency by 40%. Additionally, I improved the overall frontend efficiency with React Query, Lazy Loading, and Code Splitting, which contributed to a 35% performance boost. To secure the platform, I implemented OAuth 2.0, JWT, and RBAC authentication, ensuring a highly secure environment with 99.9% uptime and a 25% reduction in unauthorized access.
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
  <li>Cloud-Native Application Development: Conceptualized and developed cloud-native applications and microservices, improving scalability, performance, and deployment efficiency.</li>
  <li>Team Leadership and Mentorship: Mentored 4 junior developers, guiding them in best coding practices and fostering their growth in software development.</li>
  <li>Software Design and Clarity: Analyzed functional and software specifications, crafting low-level designs that increased system clarity and maintainability by 8%.</li>
  <li>High-Performance Application Development: Engineered Java, J2EE, and Spring Boot applications, reducing defect rates by 20% with robust coding practices.</li>
  <li>Cloud Infrastructure Optimization: Revamped and deployed cloud-native apps using AWS, Kubernetes, and Docker, enhancing scalability and cutting deployment overhead by 30%.</li>
  <li>Service-Oriented Architecture (SOA): Established an SOA-based integration approach that enabled cross-platform communication used by over 10 departments, increasing collaboration and expediting project delivery.</li>
  <li>Backend Optimization: Optimized backend operations using ElasticSearch and Gemfire Cache, cutting data retrieval times by 35% and improving user experience.</li>
  <li>CI/CD Pipeline Enhancement: Improved CI/CD pipelines with Jenkins, Jules, and automated testing tools, reducing deployment failures by 20%.</li>
  <li>Microservices Uptime and Scalability: Enhanced containerized microservices architecture, ensuring 99.98% uptime and seamless scalability for enterprise-level applications.</li></ul>`,
     description:`
      <ul>
      n my work, I focused on creating cloud-native applications and microservices that could scale easily and perform better. A key part of this was leading a small team of four junior developers, mentoring them and helping them grow. I spent a lot of time analyzing the existing software and functional specifications, and from there, I designed solutions that made the system easier to understand and maintain. This also led to a noticeable reduction in system errors.

Using Java, J2EE, and Spring Boot, I built high-performing applications that worked reliably, reducing issues by 20%. I also revamped cloud applications, deploying them on AWS, Kubernetes, and Docker, which made them more scalable and reduced deployment challenges. One of the highlights was introducing a new integration method that enabled better communication between more than 10 departments, improving collaboration and speeding up project timelines.

Additionally, I optimized backend systems using ElasticSearch and Gemfire Cache, significantly cutting down the time it took to retrieve data and improving user experience. I also worked on refining the CI/CD pipeline, using tools like Jenkins and Jules, which helped reduce deployment failures and kept the system up and running 99.98% of the time.








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
    <li><strong>Databases & Reporting:</strong> SQL Server, PostgreSQL, Hibernate (ORM),Crystal Reports, HDFS, Hive, Pig, Java Spark, ETL</li>
    <li><strong>Tools & Methodologies:</strong> CI/CD, AWS, Github (source control), Agile/Scrum, Jenkins (CI builds), OAuth 2.0 & JWT</li>
</ul>`,
contributions: `<ul>
<li>Architecture and Backend Performance: Designed and developed analytics tools and microservices, enhancing system efficiency and scalability by 25%.</li>
<li>Data Analytics Optimization: Built a Java-based analytics tool with Hadoop, increasing data analysis speed by 35%.</li>
<li>Legacy System Modernization: Led the migration of legacy applications to microservices, improving efficiency by 35% and reducing server costs by 20%.</li>
<li><li>Backend Refactoring: Refactored backend code and implemented caching, reducing load times by 40%.</li>
Database Optimization: Streamlined database transactions with Hibernate, improving query execution time by 25% and increasing scalability.</li>
</ul>`,
       description:`
       <ul>
       In my role, I architected and developed advanced analytics tools, microservices, and optimized backend performance, improving overall system scalability and efficiency by 25%. I engineered a Java-based analytics tool utilizing Hadoop, resulting in a 35% increase in data analysis speed. Additionally, I spearheaded the migration of legacy applications to microservices, which boosted operational efficiency by 35% and cut server costs by 20%. Through backend code refactoring and the implementation of caching strategies, I reduced system load times by 40%. By optimizing database transactions using Hibernate, I improved query execution times by 25% and enhanced the scalability of the system.
   </ul>
  `
  }
];

export { services, technologies, experiences, projects ,educations};
