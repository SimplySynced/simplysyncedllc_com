import ServiceContentSection from '@/components/service-content-section'

export default function WebPresenceContent() {
  return (
    <ServiceContentSection
      intro="Welcome to the world of captivating web design and development! At Simply Synced, we specialize in creating visually stunning and highly functional websites that leave a lasting impression. Whether you're a small business, church, or organization — we have the expertise to bring your vision to life with excellence and purpose."
      whyChooseUs={[
        { icon: '🎨', title: 'Creative Excellence', description: 'Our team of talented designers and developers is passionate about crafting unique and engaging web experiences.' },
        { icon: '✨', title: 'Customization', description: 'We believe in tailor-made solutions. Your website will be designed to reflect your brand and meet your specific goals.' },
        { icon: '🚀', title: 'Cutting-Edge Technology', description: 'We stay ahead of the curve, using the latest web technologies to ensure your site is both visually appealing and technologically advanced.' },
        { icon: '🤝', title: 'Customer-Centric Approach', description: 'We prioritize your ideas, feedback, and goals throughout the design and development process.' },
      ]}
      services={[
        { icon: '🌐', title: 'Website Design & Development', description: "We create visually stunning, user-friendly designs that capture your brand's essence and engage your audience. Our developers bring designs to life, ensuring that your website functions flawlessly on all devices and platforms." },
        { icon: '📝', title: 'Content Management Systems (CMS)', description: 'Manage and update your website effortlessly with our user-friendly CMS solutions.' },
        { icon: '📱', title: 'Responsive Design', description: 'Your website will be responsive, adapting seamlessly to various screen sizes for an optimal user experience.' },
      ]}
      benefits={[
        { icon: '💎', title: 'Professionalism & Engagement', description: 'A professionally designed website enhances your credibility and brand image. All while engaging and retaining visitors with an intuitive and visually appealing design.' },
        { icon: '📱', title: 'Mobile Accessibility', description: 'Reach a wider audience with a mobile-friendly and responsive design.' },
        { icon: '🔍', title: 'Search Engine Optimization (SEO)', description: "Improve your site's visibility in search engines, attracting more organic traffic." },
      ]}
      benefitsTitle="Benefits of Our Services"
    />
  )
}
