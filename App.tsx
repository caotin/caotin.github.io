import { motion } from 'framer-motion';
import { Mail, MapPin, Code, Database, Globe, Star, GraduationCap, Briefcase, Brain, Server, Cloud, Smartphone, Monitor, Cog, Zap, Layers, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';

export default function App() {
  const technologyStack = {
    frontend: [
      { name: 'React.js', experience: '6y', icon: '⚛️' },
      { name: 'Flutter', experience: '4y', icon: '📱' },
      { name: 'TypeScript', experience: '6y', icon: '🔷' },
      { name: 'Next.js', experience: '5y', icon: '▲' },
      { name: 'Vue.js', experience: '3y', icon: '💚' },
    ],
    backend: [
      { name: 'Node.js', experience: '6y', icon: '🟢' },
      { name: 'Python', experience: '5y', icon: '🐍' },
      { name: 'Express.js', experience: '6y', icon: '🚀' },
      { name: 'FastAPI', experience: '4y', icon: '⚡' },
      { name: 'GraphQL', experience: '3y', icon: '🔗' },
    ],
    database: [
      { name: 'PostgreSQL', experience: '5y', icon: '🐘' },
      { name: 'MySQL', experience: '5y', icon: '🗄️' },
      { name: 'MongoDB', experience: '4y', icon: '🍃' },
      { name: 'Redis', experience: '3y', icon: '🔴' },
    ],
    infrastructure: [
      { name: 'AWS', experience: '5y', icon: '☁️' },
      { name: 'Terraform', experience: '4y', icon: '🏗️' },
      { name: 'Docker', experience: '5y', icon: '🐳' },
      { name: 'Kubernetes', experience: '3y', icon: '⚓' },
      { name: 'CI/CD', experience: '5y', icon: '🔄' },
    ]
  };

  const projectCapabilities = [
    {
      title: 'Full-Stack Web Applications',
      description: 'Complete web solutions from React/Vue frontend to Node.js/Python backend with database integration',
      icon: Monitor,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps using Flutter with backend API integration and real-time features',
      icon: Smartphone,
      technologies: ['Flutter', 'Firebase', 'REST APIs', 'Push Notifications']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture on AWS with Infrastructure as Code using Terraform',
      icon: Cloud,
      technologies: ['AWS', 'Terraform', 'Docker', 'Load Balancers']
    },
    {
      title: 'AI/ML Integration',
      description: 'Intelligent systems with machine learning models, automation, and data processing pipelines',
      icon: Brain,
      technologies: ['Python', 'TensorFlow', 'API Integration', 'Data Analytics']
    }
  ];

  const servicesOffered = [
    {
      title: 'Project Architecture & Planning',
      description: 'Complete technical architecture design and project roadmap planning',
      icon: Layers
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end development from frontend UI to backend APIs and database design',
      icon: Code
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'Cloud deployment, CI/CD pipelines, monitoring, and infrastructure automation',
      icon: Cog
    },
    {
      title: 'Team Leadership & Mentoring',
      description: 'Technical leadership, code reviews, and team member mentoring',
      icon: Star
    },
    {
      title: 'Performance Optimization',
      description: 'Application performance tuning, database optimization, and scaling strategies',
      icon: Zap
    },
    {
      title: 'Security Implementation',
      description: 'Authentication systems, data protection, and security best practices',
      icon: Shield
    }
  ];

  const experienceHighlights = [
    'Senior Developer & Team Leader with 7+ years experience',
    'AI Engineer specializing in machine learning and automation',
    'Full-stack development from mobile apps to cloud infrastructure',
    'DevOps expertise with AWS, Docker, and Terraform',
    'Project architecture and technical leadership',
    'Teaching and mentoring development teams',
    'SEO optimization and performance tuning',
    'Strong problem-solving and debugging skills'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Huynh Van Cao Tin
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 mb-6">Full-Stack Developer & AI Engineer</p>
            <div className="flex items-center justify-center gap-6 text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>tin.huynh@napaglobal.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Da Nang, Vietnam</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                7+ Years Experience
              </Badge>
              <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                Project Ready
              </Badge>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to deliver complete projects from React/Flutter frontend to Node.js/Python backend with AWS infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-700">
                Experienced full-stack developer and AI engineer capable of delivering complete projects from conception to deployment. 
                Skilled in modern frontend technologies (React, Flutter), robust backend systems (Node.js, Python), 
                and scalable cloud infrastructure (AWS, Terraform). Proven track record in team leadership, 
                project architecture, and mentoring developers across the full technology stack.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {experienceHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
                  >
                    <Star className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Code className="w-6 h-6 text-purple-600" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {Object.entries(technologyStack).map(([category, technologies], categoryIndex) => (
                <div key={category}>
                  <h3 className="text-xl capitalize mb-4 flex items-center gap-2">
                    {category === 'frontend' && <Monitor className="w-5 h-5 text-blue-600" />}
                    {category === 'backend' && <Server className="w-5 h-5 text-green-600" />}
                    {category === 'database' && <Database className="w-5 h-5 text-orange-600" />}
                    {category === 'infrastructure' && <Cloud className="w-5 h-5 text-purple-600" />}
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 text-center"
                      >
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <h4 className="font-medium text-slate-900 mb-1">{tech.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {tech.experience}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Project Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Layers className="w-6 h-6 text-green-600" />
                Project Delivery Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {projectCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-medium text-slate-900">{capability.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Services Offered */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Cog className="w-6 h-6 text-orange-600" />
                Services Offered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesOffered.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="w-5 h-5 text-orange-600" />
                      <h4 className="font-medium text-slate-900">{service.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <h4 className="font-medium text-slate-900 mb-2">Information Technology</h4>
                  <p className="text-slate-600 mb-2">Da Nang Science and Education University</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>Vietnam</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Globe className="w-6 h-6 text-cyan-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-slate-900">Vietnamese</h4>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                      Native
                    </Badge>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-slate-900">English</h4>
                    <Badge variant="secondary">
                      Intermediate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl mb-4">Ready for Your Next Project?</h2>
              <p className="text-xl mb-8 text-blue-100">
                From React frontends to AWS infrastructure - I deliver complete, production-ready solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="text-blue-100">
                  ✅ Full-Stack Development
                </div>
                <div className="text-blue-100">
                  ✅ Cloud Infrastructure
                </div>
                <div className="text-blue-100">
                  ✅ Team Leadership
                </div>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = 'mailto:tin.huynh@napaglobal.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}