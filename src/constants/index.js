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
import {
  frontend,
  ux,
  prototyping,
  machinelearning,
  database,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
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
    repo: 'https://github.com/Shikhara17',
    demo: 'https://haloharbor.io',
    techStack: 'React, CSS, Java Script, HTML, Docker, Docker Kubertees, Tailwind.css, AWS Nitro Enclave, AWS, ACA-PY, python, MongoDB, OAuth, JWT, GoogleAPI, Postman, FIGMA, Machine Learning, Federated Learning, Neural networks',
    category: ['Full Stack', 'AI/ML', 'Frontend','DevOps']
  },
  {
    id: '2',
    name: 'SYCLConv',
    description: "This project implements depthwise separable convolution using SYCL and integrates it into the AI3 framework, aiming to enhance computational efficiency by replacing PyTorch's standard conv2d implementation. Utilizing the principles from the MobileNets paper, it focuses on optimizing performance for devices with limited resources and improving inference time.",
    image: conv,
    repo: 'https://github.com/Shikhara17',
    demo: 'https://drive.google.com/file/d/1EgthIjx-qHRmpkcgwEzv4zaMt_BPWXgf/view?usp=sharing',
    techStack: "SYCL, AI3 Framework, PyTorch, Tensors, CNN, Keras, Tensorflow, MobileNets Architecture, C++, NVIDIA GPU",
    category: ['Machine Learning', 'AI/ML', ]
  },
  {
    id: '5',
    name: 'ClassTrack',
    description: 'ClassTrack is an integrated system designed to streamline the process of course enrollment and attendance tracking. It enables users to easily sign up for courses and manage attendance, enhancing administrative efficiency and user accessibility.',
    image: res,
    repo: 'https://github.com/Shikhara17',
    demo: '#',
    techStack: 'Core Java, Java Script, HTML, CSS, Bootstrap, JSP, Servlets, Xml, Spring MVC, Spring Boot, Spring Security, MongoDB, MySQL, Microservices, Java',
    category: ['Full Stack','Frontend']
  },
  {
    id: '3',
    name: 'Smart Health Card',
    description: 'Smart Health Card is a web application designed to digitize health records, allowing secure and easy access through QR code scanning. It employs Firebase for backend operations and authentication, ensuring each account is linked with a unique QR code for streamlined data retrieval.',
    image: heart,
    repo: 'https://github.com/Shikhara17',
    demo: '#',
    techStack: 'HTML, CSS, JavaScript, Bootstrap, Firebase, NodeJS, Document Object Model',
    category: ['Full Stack','Frontend','Cloud']
  },
  {
    id: '4',
    name: 'WindForce ML',
    description: 'This project uses machine learning for predictive regression techniques, specifically in modeling wind turbine power curves. It addresses the challenges of intermittent renewable energy by enhancing the predictability and efficiency of wind power generation.',
    image: windforce,
    repo: 'https://github.com/Shikhara17',
    demo: '#',
    techStack: 'Python, Machine Learning, Numpy, Seaborn, Matplotlib, Sklearn and Pandas',
    category: ['Machine Learning', 'AI/ML', ]
  },
  {
    id: '6',
    name: 'Location Obfuscation',
    description: 'The project explores advanced techniques for anonymizing location data to enhance user privacy in location-based services. Utilized methods such as K-Anonymity and obfuscation, to develop privacy-preserving solutions that safeguard users against unauthorized access to their geographical information. This not only protects personal data but also addresses the increasing concerns surrounding location privacy in digital applications.',
    image: loc,
    repo: 'https://github.com/Shikhara17',
    demo: '#',
    techStack: 'Python, Geospatial Analysis Tools, Data Anonymization Algorithms',
    category: ['Data Privacy', 'Backend']
  },
  {
    id: '7',
    name: 'Compact Wahan',
    description: 'Compact Wahan is an IoT-based prototype for a self-driving vehicle equipped with advanced smart features. It includes self-parking capabilities, obstacle detection, and accident detection, all enabled through a network of integrated sensors. This project aims to enhance vehicular safety and autonomy, pushing the boundaries of traditional driving systems.',
    image: iot,
    repo: 'https://github.com/Shikhara17',
    demo: 'https://demo-link.com',
    techStack: 'IoT Devices, Sensors (LIDAR), ultrasonic, infrared, Python, Raspberry Pi, Arduino, Machine Learning Libraries',
    category: 'IOT'
  },
  {

    id: '10',
    name: 'Lyrisense',
    description: "LyriSense uses Natural Language Processing (NLP) and Machine Learning (ML) to decode emotional and thematic patterns in song lyrics. By leveraging state-of-the-art techniques like BERT tokenization and TensorFlow's distributed training strategies, it classifies lyrics into specific themes such as Sadness or Romance. This project offers significant insights for applications ranging from music streaming services to cultural studies, enabling objective, data-driven analysis of lyrical content.",
    image: lyri,
    repo: 'https://github.com/Shikhara17',
    demo: 'https://demo-link.com',
    techStack: 'Machine Learning, NLP & ML Techniques, Data Handling, Parallel Computing, BERT Tokenization, Tensorflow, keras, matplotlib, nvidia-smi, pandas, numpy, Multi Worker mirrored Strategy',
    category: ['Artificial Intelligence','Backend']
  },
  {
    id: '9',
    name: 'DataSpark',
    description: 'A data engineering project using Python and Spark to process large datasets.',
    image: etl,
    repo: 'https://github.com/Shikhara17',
    demo: 'https://demo-link.com',
    techStack: 'PySpark, AWS Elastic MapReduce (EMR), AWS S3, HDFS, PySpark, HTML, CSS, JavaScript, Bootstrap, jQuery, JSON, XML, SWAGGER, GIT, Jira, Control M, Docker, Google Kubernetes Engine, Agile Development, CI/CD',
    category: 'React'
  },
  {
    id: '8',
    name: 'Resource Rally',
    description: 'Resource Rally is an advanced resource management system that automates the collection and deposition of resources in a game environment using multiple agents. It utilizes the A* algorithm for efficient pathfinding and task execution within the SEPIA framework.',
    image: cal,
    repo: 'https://github.com/Shikhara17',
    demo: 'https://demo-link.com',
    techStack: 'java, Sepia, A*, Strips Action, HashMaps, Stacks',
    category: ['Artificial Intelligence','Backend']
  },
  // {
  //   id: '11',
  //   name: 'Urban Flow',
  //   description: 'This project is designed to manage traffic at a four-way intersection, ensuring efficient vehicle and pedestrian flow while maintaining safety. It features synchronized traffic signals for both vehicles and pedestrians, with distinct phases for each direction to avoid conflicts and potential accidents.',
  //   image: traffic,
  //   repo: 'https://github.com/Shikhara17',
  //   demo: 'https://demo-link.com',
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
const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Ionic Health',
    icon: ionic,
    iconBg: '#3c9eb0',
    date: 'Jan 2024 - Present',
    age:'1+ years',
    description: `
    <p style=color:#6cd56c>Technologies/Tools: HTML, CSS, JavaScript, React.js</p>
    <p>Spearheaded digital transformation initiatives, playing a key role in frontend development to enable client access to patient data and reports, enhancing healthcare service efficiency by 35% and improving care quality.</p>`
   
  
  },
  {
    title: 'Graduate Research Assistant',
    company_name: 'Case Western Researve University',
    icon: cwru,
    iconBg: '#003071',
    date: 'Jan 2024 - Present',
    age:'1+ years',
   
    description:`
    <p style=color:#6cd56c>Technologies/Tools: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, WordPress, Powerpoint, Jira, Python, Data Analytics</p>
    In my role as the Graduate Research Assitant, I directed a dynamic team of 10 summer interns in a series of pivotal education and research projects within healthcare administration and technology. Our goal was to advance academic knowledge and practical applications in this vital sector, focusing on increasing operational efficiencies and expanding educational outreach.
        <p><strong>Contributions:</strong></p>
    <ul>
        <li><strong>Leadership and Team Management:</strong> Directed a team of 10 summer interns, enhancing their skills in healthcare technology and administration through targeted project assignments and mentorship.</li>
        <li><strong>Frontend Development:</strong> Spearheaded the development of the web portal using React.js, ensuring a responsive and interactive user experience tailored to the needs of healthcare professionals.</li>
        <li><strong>User-Centered Design:</strong> Collaborated with healthcare professionals to gather requirements and feedback, which guided the design and functionality of the user interface.</li>
        <li><strong>System Integration:</strong> Integrated the frontend solution with existing hospital information systems for seamless data flow and improved data accuracy.</li>
        <li><strong>Security and Compliance:</strong> Implemented security measures, including data encryption and compliance checks, to protect sensitive patient information.</li>
        <li><strong>Performance Optimization:</strong> Optimized the application’s performance to handle high volumes of data, ensuring quick and reliable access to information.</li>
        <li><strong>Impact:</strong> The deployment of the Healthcare Access Portal led to a 35% improvement in service efficiency and significantly enhanced the quality of patient care, providing a modern tool for data management and decision-making.</li>
    </ul>
    ` },
  {
    title: 'Software Developer Engineer',
    company_name: 'Cognizant',
    icon: cognizant,
    iconBg: '#fff',
    date: 'Jan 2021 - Dec 2023',
    age: '3 years',
     description:`
  <p>Client: JPMorgan Chase<p>
  <p style=color:#6cd56c>Technologies/Tools: API Swagger, IntelliJ, Control-M, Bit Bucket, Git, Spark, Hadoop, Hive, Unix</p>
  
  <strong> Project Overview:</strong> 
  
  This project at JPMorgan Chase was an ambitious initiative aimed at overhauling the existing ETL (Extraction, Transformation, and Loading) processes to enhance data management and reporting capabilities in multiple Banking sector. This project focused on redesigning the ETL pipelines to improve data ingestion, quality, and accessibility, leveraging advanced Big Data technologies.
 
  <p><strong> Contributions:</strong></p>

      <ul style="list-style-type: disc; padding-left: 20px;">
            <li><strong>Design and Documentation: </strong>Participated in the analysis of business, functional, and system requirements to ensure thorough understanding and documentation.</li>
            <li><strong>ETL Development:</strong> Engineered robust ETL pipelines tailored for enhanced performance and reliability. Implemented sophisticated data loading techniques and contributed to the development of pipeline registration and data verification processes using Swagger.</li>
            <li><strong>Automation and Scheduling:</strong> Utilized Control-M for efficient scheduling of batch jobs, ensuring timely data processing. Employed Putty for server interactions and to execute Unix shell script commands for operational tasks.</li>
            <li><strong>Quality Assurance:</strong> Conducted rigorous unit testing and bug fixing to maintain high standards of quality. Managed CDC (Change Data Capture) development for Type1 and Type2, crucial for maintaining the data warehouse's historical accuracy.</li>
            <li><strong>Reporting and Compliance:</strong> Assisted in the preparation of detailed status reports and documentation, crucial for project tracking and compliance with JPMC's stringent regulatory requirements.</li>
            <li>Architected and deployed multiple Spring Boot web applications, integrating advanced server-side programming and form validations that improved data processing efficiency by 25%. Led the design and implementation of robust database architectures for three full-stack web applications, enhancing data security and operational performance by 30%.</li>
            <li><strong>Impact:</strong> The project significantly enhanced the data processing capabilities at JPMorgan Chase, enabling faster and more accurate data analysis and reporting. It improved operational efficiency and data quality, directly impacting decision-making processes within the banking sector.</li>
        </ul>
`
  
  
  },
  // {
  //   title: 'Software Developer',
  //   company_name: 'Cognizant',
  //   icon: cognizant,
  //   iconBg: '#fff',
  //   date: 'Jan 2021 - Jul 2021',
  //   description:`
  //   <p style=color:#6cd56c>Technology/Tools: Spring MVC, Spring Security, HTML, CSS, JavaScript, Firebase, QR Code Technology, <p>
  //   <p>During my tenure as a software developer, I actively contributed to two significant projects that aimed to enhance healthcare administration and session management systems. These projects allowed me to apply and expand my technical skills in a practical environment.</p>
  //   <p><strong> Contributions:</strong></p>
  //       <li>Architected and deployed multiple Spring Boot web applications, integrating advanced server-side programming and form validations that improved data processing efficiency by 25%. Led the design and implementation of robust database architectures for three full-stack web applications, enhancing data security and operational performance by 30%.</li>
  //       <li>Utilized firebase for backend operations and authentication, and featured QR code integration for user data access.</li>
  //       <li>Worked on database design and handled user data.</li>    
  //       </ul>
  //   `
  // },
];

export { services, technologies, experiences, projects };
