import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

export default function AboutPage() {


  const expertiseAreas = [
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS/Azure/GCP Architecture', 'Serverless Computing', 'Containerization (Docker/K8s)', 'Infrastructure as Code', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      skills: ['Network Security', 'Compliance Frameworks', 'Risk Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      category: 'Project Management',
      skills: ['Agile/Scrum Methodology', 'Stakeholder Management', 'Budget Planning', 'Team Leadership', 'Vendor Management']
    },
    {
      category: 'Technical Specialties',
      skills: ['Network Architecture', 'System Administration', 'Database Management', 'API Development', 'Technical Documentation']
    }
  ];

  return (
    <Container>
      <div className="py-20 md:py-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            About Me & My Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto font-inter mb-8">
            With over 10 years of hands-on experience in IT consulting and solutions architecture,
            I bring technical expertise, strategic vision, and proven results to every project.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/mingmanhk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-inter font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/mingmanhk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              title="View GitHub Profile"
            >
              <Github className="w-5 h-5" />
              <span className="font-inter font-medium">GitHub</span>
            </a>
            <a
              href="https://mingmanhk.github.io/React-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
              title="View Portfolio"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-inter font-medium">Portfolio</span>
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <div className="font-display font-bold text-3xl text-rose mb-2">10+</div>
            <div className="font-inter text-gray-medium">Years Experience</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-display font-bold text-3xl text-rose mb-2">200+</div>
            <div className="font-inter text-gray-medium">Projects Delivered</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-display font-bold text-3xl text-rose mb-2">99.9%</div>
            <div className="font-inter text-gray-medium">Client Satisfaction</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-display font-bold text-3xl text-rose mb-2">50+</div>
            <div className="font-inter text-gray-medium">Clients Served</div>
          </Card>
        </div>


        {/* Areas of Expertise */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-8">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-display font-bold text-xl text-charcoal mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-rose rounded-full mr-3"></span>
                      <span className="font-inter text-gray-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Availability & Approach */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-8">
            Availability & Working Approach
          </h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-4">Availability</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="font-inter text-gray-medium">
                      <strong>Standard Hours:</strong> Mon-Fri, 9 AM - 6 PM PST
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-inter text-gray-medium">
                      <strong>Emergency Support:</strong> 24/7 for existing clients
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="font-inter text-gray-medium">
                      <strong>Consultation Slots:</strong> Available within 24-48 hours
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-rose rounded-full mr-3"></span>
                    <span className="font-inter text-gray-medium">
                      <strong>Response Time:</strong> Typically within 2 hours during business hours
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-4">Working Philosophy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">
                      <strong>Client-Centric:</strong> Solutions tailored to your specific business needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">
                      <strong>Transparent Communication:</strong> Regular updates and clear documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">
                      <strong>Future-Proof Solutions:</strong> Scalable architectures that grow with your business
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">
                      <strong>Continuous Learning:</strong> Staying current with latest technologies and best practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto mb-8 font-inter">
            Let&apos;s discuss how my experience can help solve your technology challenges and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
            <Button href="/it-services" variant="outline" size="lg">
              View My Services
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}