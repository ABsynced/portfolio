import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjects';
import { profile } from '../data/profile';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { projects } = useProjects();

  if (!projects.length) return null;

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="projects" linkLabel="View all on GitHub" linkHref={profile.social.github} />
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project._id || project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
