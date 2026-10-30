// Replace empty URLs with your real public links. Never publish private contact details without consent.
export const profile = {
  name: 'Neil Palissery',
  initials: 'NP',
  location: 'Mumbai, India',
  headline: 'Computer Engineering Student & Full-Stack Developer',
  tagline: 'I build practical digital experiences, from full-stack web applications to IoT and AI-driven ideas.',
  email: 'neil070806@gmail.com', // e.g. yourname@example.com
  github: 'https://github.com/Neil-07', // e.g. https://github.com/username
  linkedin: 'https://www.linkedin.com/in/neil-joseph-baabb5381', // e.g. https://www.linkedin.com/in/username/
  resume: '/resume.pdf', // Add your PDF in public/resume.pdf before enabling
  resumeAvailable: true,
  education: 'B.E. Computer Engineering · Don Bosco Institute of Technology',
  graduation: 'Expected 2028',
  about: 'I am a Computer Engineering student at Don Bosco Institute of Technology, Mumbai, with hands-on experience in web development, backend APIs, and collaborative software projects. I enjoy solving practical problems, exploring emerging technologies, and strengthening my skills through projects and continuous learning. I am currently expanding my knowledge of machine learning.'
}
export const skillGroups = [
  { title: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Frontend', items: ['React.js', 'Responsive Design', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { title: 'Databases & Cloud', items: ['MongoDB', 'Firebase (Basic)', 'Azure (Academic)'] },
  { title: 'Tools & Workflow', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Vercel'] },
  { title: 'Exploring', items: ['Machine Learning', 'AI Optimization', 'IoT'] }
]
export const projects = [
  { id: 1, title: 'Agrove-Farm', category: 'Full Stack', status: 'Project', description: 'Farm management platform featuring secure user authentication, farmer onboarding, farm details, and backend APIs.', stack: ['React', 'Node.js', 'Express', 'MongoDB'], github: '', demo: '', accent: 'emerald', symbol: '🌱', highlights: ['JWT-based authentication', 'Farm and field onboarding'] },
  { id: 2, title: 'Smart Attendance Tracker', category: 'Web Development', status: 'Academic Project', description: 'Responsive attendance-tracking interface built around rotating QR codes and location-aware attendance concepts.', stack: ['HTML', 'CSS', 'JavaScript'], github: '', demo: '', accent: 'blue', symbol: '📱', highlights: ['QR-based attendance flow', 'Responsive UI'] },
  { id: 3, title: 'RailOpt AI', category: 'AI / Optimization', status: 'Concept / Prototype', description: 'AI-assisted railway maintenance block planning concept focused on conflict detection and operational scheduling.', stack: ['AI', 'Scheduling', 'Optimization'], github: '', demo: '', accent: 'violet', symbol: '🚆', highlights: ['Maintenance block planning', 'Conflict-aware scheduling concept'] },
  { id: 4, title: 'Air Quality Monitor', category: 'IoT', status: 'Award-Recognized', description: 'ESP32-based environmental monitoring mini-project with sensor readings and cloud dashboard visualization.', stack: ['ESP32', 'IoT', 'Sensors', 'Cloud'], github: '', demo: '', accent: 'amber', symbol: '🌤️', highlights: ['Sensor-based monitoring', '2nd rank in IoT mini-project'] },
  { id: 5, title: 'MediConnect', category: 'Full Stack', status: 'In Progress', description: 'Healthcare-oriented web application exploring account registration, authentication, and connected user workflows.', stack: ['React', 'Authentication', 'Backend'], github: '', demo: '', accent: 'rose', symbol: '🩺', highlights: ['Login and registration workflows', 'Ongoing development'] }
]
export const experience = [{ role: 'Software Engineer Intern', company: 'Sapphire Infocom Pvt. Ltd.', period: 'Aug 2026 – Nov 2026', details: ['Worked on backend functionality for the company website.', 'Implemented dashboard data-fetching functionality.', 'Contributed to CSV data export features.'] }]
export const achievements = [
  { title: '2nd Rank — IoT System Design Mini Project', detail: 'Air Quality Monitor · DBIT · October 2026' },
  { title: 'Smart India Hackathon', detail: 'Participated twice in SIH-related team initiatives' },
  { title: 'Cyber Security Analyst Job Simulation', detail: 'Tata · Forage' }
]
export const interests = ['⚽ Football', '🎸 Playing Guitar', '🧠 Learning New Technologies', '🌍 Building Impactful Solutions']
