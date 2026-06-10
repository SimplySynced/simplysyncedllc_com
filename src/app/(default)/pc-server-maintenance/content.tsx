import ServiceContentSection from '@/components/service-content-section'

export default function PCServerMaintenanceContent() {
  return (
    <ServiceContentSection
      intro="At Simply Synced LLC, we understand that your business relies on technology to stay competitive. We offer top-notch PC and server maintenance services to ensure your systems run smoothly — minimizing downtime and maximizing productivity so you can focus on what matters most."
      whyChooseUs={[
        { icon: '👨‍💻', title: 'Experienced Technicians', description: 'Our team consists of highly skilled and experienced technicians. They are well-versed in diagnosing and resolving a wide range of computer issues.' },
        { icon: '⚡', title: 'Prompt Response', description: 'We understand the urgency of computer problems in a business environment. Our team responds quickly to your service requests, minimizing disruptions to your operations.' },
        { icon: '✨', title: 'Tailored Solutions', description: "We don't believe in one-size-fits-all solutions. Our maintenance plans are customized to meet the specific needs of your business, ensuring optimal performance and reliability." },
        { icon: '🔍', title: 'Proactive Maintenance', description: 'Our proactive approach helps identify potential issues before they become critical, preventing costly downtime and data loss.' },
      ]}
      services={[
        { icon: '🔧', title: 'Hardware Maintenance', description: 'We offer comprehensive hardware maintenance services, including regular inspections, cleaning, and component replacement when necessary.' },
        { icon: '📦', title: 'Software Updates', description: 'Keeping your software up-to-date is crucial for security and performance. We handle all your software updates, including operating systems and applications.' },
        { icon: '🛡️', title: 'Virus & Malware Protection', description: 'We implement robust security measures to protect your business against viruses, malware, and other cyber threats.' },
        { icon: '💾', title: 'Data Backup and Recovery', description: 'We ensure that your critical business data is regularly backed up and can be quickly restored in case of data loss.' },
      ]}
      benefits={[
        { icon: '📈', title: 'Increased Productivity', description: 'Well-maintained computers run faster and more efficiently, allowing your employees to get more done.' },
        { icon: '🔒', title: 'Data Security', description: 'Protect your sensitive business data from cyber threats and data loss.' },
        { icon: '💰', title: 'Cost Savings', description: 'Prevent costly repairs and downtime by addressing issues proactively.' },
        { icon: '⏳', title: 'Longer Lifespan', description: 'Extend the life of your computers, reducing the need for frequent replacements.' },
      ]}
      benefitsTitle="Why Regular Maintenance Matters"
    />
  )
}
