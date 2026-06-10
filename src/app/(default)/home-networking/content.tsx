import ServiceContentSection from '@/components/service-content-section'

export default function HomeNetworkingContent() {
  return (
    <ServiceContentSection
      intro="In today's connected world, a robust home network is essential. At Simply Synced, we specialize in delivering seamless home networking solutions that ensure all your devices are effortlessly connected. We approach every home with the same care, honesty, and attention we would give our own."
      whyChooseUs={[
        { icon: '🎯', title: 'Expertise', description: 'Our team of certified networking professionals has years of experience in designing and optimizing home networks for maximum performance and security.' },
        { icon: '✨', title: 'Customized Solutions', description: 'We understand that every home is unique. Our solutions are tailored to your specific needs, ensuring that your network works precisely the way you want it to.' },
        { icon: '🚀', title: 'Cutting-Edge Technology', description: 'We stay up-to-date with the latest networking technologies to provide you with the best and most reliable solutions.' },
      ]}
      services={[
        { icon: '📡', title: 'Home Network Installation', description: 'We design and install wireless home networks, ensuring full coverage throughout your property.' },
        { icon: '📶', title: 'Wi-Fi Optimization', description: 'Our experts optimize your Wi-Fi network for maximum speed and reliability, eliminating dead zones.' },
        { icon: '🔐', title: 'Network Security', description: 'Protect your home network and personal data from cyber threats with robust security solutions.' },
      ]}
      benefits={[
        { icon: '⚡', title: 'High-Speed Internet', description: 'Enjoy lightning-fast internet speeds for streaming, online gaming, and working from home.' },
        { icon: '🎬', title: 'Family Entertainment', description: 'Stream movies, music, and games on multiple devices simultaneously without buffering.' },
        { icon: '💼', title: 'Work from Home', description: 'Ensure a stable connection for remote work, video conferencing, and virtual learning.' },
      ]}
      benefitsTitle="Benefits of a Strong Home Network"
    />
  )
}
