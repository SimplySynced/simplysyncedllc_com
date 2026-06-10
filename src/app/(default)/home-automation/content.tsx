import ServiceContentSection from '@/components/service-content-section'

export default function HomeAutomationContent() {
  return (
    <ServiceContentSection
      intro="Welcome to the future of living. At Simply Synced, we bring you the latest in home automation technology to enhance your comfort, security, and convenience. We believe in being good stewards of your home, and smart technology helps you do just that. Imagine controlling your entire home with a single touch or voice command — experience the ease of home automation today!"
      whyChooseUs={[
        { icon: '🎯', title: 'Expertise', description: 'Our team of home automation specialists is highly skilled and experienced in designing and implementing custom automation solutions.' },
        { icon: '✨', title: 'Tailored Solutions', description: 'We understand that every home is unique. Our solutions are customized to fit your lifestyle and preferences.' },
        { icon: '🚀', title: 'Cutting-Edge Technology', description: 'We stay ahead of the curve, integrating the latest smart devices and technologies to create a truly connected home.' },
        { icon: '🤝', title: 'Customer Support', description: 'We offer dedicated customer support to ensure that your smart home always runs smoothly.' },
      ]}
      services={[
        { icon: '💡', title: 'Smart Lighting', description: 'Create the perfect ambiance in any room with customizable lighting that can be controlled remotely or automatically adjusted based on your schedule.' },
        { icon: '🔒', title: 'Home Security', description: 'Keep your home safe with smart locks & video doorbells, and security cameras that allow you to monitor and control your property from anywhere.' },
        { icon: '🌡️', title: 'Climate Control', description: 'Enjoy energy savings and comfort with smart thermostats that learn your preferences and adjust the temperature accordingly.' },
        { icon: '🎙️', title: 'Voice Control', description: 'Control your entire home with voice commands through popular virtual assistants like Alexa and Google Assistant.' },
      ]}
      benefits={[
        { icon: '📱', title: 'Convenience', description: "Control your home's devices and systems from your smartphone or voice commands, making life more convenient and efficient." },
        { icon: '⚡', title: 'Energy Efficiency', description: "Save on energy bills by automating your home's heating, cooling, and lighting systems." },
        { icon: '🛡️', title: 'Peace of Mind', description: 'Enjoy peace of mind knowing your home that you can monitor it from anywhere.' },
      ]}
      benefitsTitle="Benefits of Home Automation"
    />
  )
}
