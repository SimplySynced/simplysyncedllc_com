import ServiceContentSection from '@/components/service-content-section'

export default function PCBuildingAndRepairContent() {
  return (
    <ServiceContentSection
      intro="Welcome to the world of personalized computing! At Simply Synced, we are your trusted experts in home PC building and maintenance. Whether you're looking to build a high-performance system or need professional maintenance for your existing computer, we have you covered — with honest guidance and reliable service every step of the way."
      whyChooseUs={[
        { icon: '🎯', title: 'Expertise', description: 'Our team comprises seasoned technicians and builders with a deep passion for technology and years of experience in custom PC building and maintenance.' },
        { icon: '✨', title: 'Customized Solutions', description: 'We believe in tailor-made solutions. Every PC we build and maintain is designed to meet your unique needs and preferences.' },
        { icon: '🏆', title: 'Top-Quality Components', description: 'We use only the highest quality components to ensure your PC delivers the best performance and reliability.' },
        { icon: '🤝', title: 'Customer Satisfaction', description: 'Our commitment to customer satisfaction means we go above and beyond to meet your expectations.' },
      ]}
      services={[
        { icon: '🖥️', title: 'Custom PC Building', description: 'We design and build custom PCs for a variety of purposes, including gaming, content creation, and business use.' },
        { icon: '🔧', title: 'Upgrades and Repairs', description: 'If your existing PC needs an upgrade or has encountered issues, our experts can diagnose and resolve the problem efficiently.' },
        { icon: '⚙️', title: 'Routine Maintenance', description: 'Keep your PC running smoothly with regular maintenance, including cleaning, hardware checks, and software optimization.' },
        { icon: '🛡️', title: 'Virus and Malware Removal', description: 'We provide comprehensive virus and malware removal services to ensure your PC is free from threats.' },
      ]}
      benefits={[
        { icon: '🚀', title: 'Performance', description: 'Our custom-built PCs are optimized for exceptional performance, ensuring you get the most out of your computer.' },
        { icon: '✅', title: 'Reliability', description: 'Regular maintenance and high-quality components result in a PC that runs smoothly and lasts longer.' },
        { icon: '💬', title: 'Expert Support', description: 'Our team is always ready to assist you with any PC-related queries or problems.' },
      ]}
      benefitsTitle="Benefits of Our Services"
    />
  )
}
