"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [language, setLanguage] = useState("tr");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-10 relative">
      {/* Language Selector */}
      <div className="language-selector">
        <div className="language-buttons flex">
          <button 
            className={`lang-btn py-2 px-4 rounded-lg font-medium ${language === 'tr' ? 'active' : ''}`}
            onClick={() => setLanguage("tr")}
          >
            TR
          </button>
          <button 
            className={`lang-btn py-2 px-4 rounded-lg font-medium ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-4xl">
        {/* Profile Card */}
        <div className="card p-6 md:p-10 w-full">
          {/* Profile Image and Basic Info */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-40 h-40 mb-6 flex justify-center">
              <Link href="https://www.instagram.com/silekardaefe/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                  width={160}
                  height={160}
                  className="rounded-full object-cover profile-img border-4 border-indigo-500 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fadeIn text-gradient">
                Arda Efe Silek
              </h1>
              <p className="text-indigo-400 text-xl mb-4 animate-fadeIn delay-100 font-medium">
                {language === "tr" 
                  ? "Elektrik-Elektronik Mühendisliği Öğrencisi" 
                  : "Electrical & Electronics Engineering Student"}
              </p>
              
            </div>
          </div>
          
          {/* About Me */}
          <section className="mb-10 animate-fadeIn delay-300 text-content-center">
            <h2 className="text-2xl font-semibold mb-6 section-title section-title-center">
              {language === "tr" ? "Hakkımda" : "About Me"}
            </h2>
            <div className="space-y-6 enhanced-text">
              <p>
                {language === "tr" 
                  ? "Elektrik-Elektronik Mühendisliği alanında lisans eğitimime devam etmekteyim. Gömülü sistemler, yapay zeka ve insansız hava araçları (İHA) teknolojileri üzerine yoğunlaşıyorum."
                  : "I am currently pursuing my bachelor's degree in Electrical and Electronics Engineering. I am focusing on embedded systems, artificial intelligence, and unmanned aerial vehicle (UAV) technologies."}
              </p>
              <p>
                {language === "tr" 
                  ? "PCB tasarımı, drone ve otonom sistemler üzerine projeler geliştiriyorum. Aynı zamanda web geliştirme ve IoT alanlarında kendimi sürekli olarak geliştiriyorum."
                  : "I develop projects on PCB design, drones, and autonomous systems. I am also constantly improving myself in web development and IoT."}
              </p>
              <p>
                {language === "tr" 
                  ? "Teknoloji ve inovasyon tutkusu ile donanmış, disiplinlerarası projelerde yer almaktan keyif alan bir mühendislik öğrencisiyim."
                  : "I am an engineering student with a passion for technology and innovation, enjoying working on interdisciplinary projects."}
              </p>
              
            </div>
          </section>
          
          {/* Skills */}
          <section className="mb-10 animate-fadeIn delay-400 text-content-center">
            <h2 className="text-2xl font-semibold mb-6 section-title section-title-center">
              {language === "tr" ? "Yetenekler" : "Skills"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="feature-card">
                <i className="fas fa-microchip text-xl text-indigo-400 mb-2"></i>
                <p className="font-medium text-sm">{language === "tr" ? "Analitik Beceriler" : "Strong Analytical Skills"}</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-code text-xl text-indigo-400 mb-2"></i>
                <p className="font-medium text-sm">{language === "tr" ? "Web Geliştirme" : "Web Development"}</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-project-diagram text-xl text-indigo-400 mb-2"></i>
                <p className="font-medium text-sm">{language === "tr" ? "Veri Analizi" : "Data Analysis"}</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-drone text-xl text-indigo-400 mb-2"></i>
                <p className="font-medium text-sm">{language === "tr" ? "İHA Teknolojileri" : "UAV Technologies"}</p>
              </div>
            </div>
          </section>
          
          {/* Projects */}
          <section className="mb-10 animate-fadeIn text-content-center">
            <h2 className="text-2xl font-semibold mb-6 section-title section-title-center">
              {language === "tr" ? "Projeler" : "Projects"}
            </h2>
            
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-medium mb-4 text-indigo-200 text-center">
                {language === "tr" ? "İHA Arayüzü" : "UAV Interface"}
              </h3>
              <div className="text-gray-300 mb-4 enhanced-text">
                <p className="mb-2">
                  {language === "tr" 
                    ? "İnsansız hava aracı (İHA) telemetri verilerini gerçek zamanlı olarak görselleştiren ve kumanda edebilen bir web arayüzü geliştirdim. MAVLink protokolü üzerinden veri iletişimi sağlandı."
                    : "Developed a web interface that visualizes and controls unmanned aerial vehicle (UAV) telemetry data in real time. Data communication was provided via the MAVLink protocol."}
                </p>
                <p>
                  {language === "tr" 
                    ? "Arayüz, video yayını, harita üzerinde uçuş rotası planlama ve görev yönetimi özelliklerine sahiptir."
                    : "The interface features video streaming, flight route planning on a map, and mission management."}
                </p>
              </div>
              <div className="project-image-container">
                <div className="project-image-wrapper">
                  <img 
                    src="/images/ev-charging.jpg" 
                    alt="UAV Project" 
                    className="project-image"
                  />
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-medium mb-4 text-indigo-200 text-center">
                {language === "tr" ? "Kaplan İKA Kamera & Arayüz Entegrasyonu" : "Kaplan UGV Camera & Interface Integration"}
              </h3>
              <div className="text-gray-300 mb-4 enhanced-text">
                <p className="mb-2">
                  {language === "tr" 
                    ? "Kaplan İKA (İnsansız Kara Aracı) projesinde kamera, veri ve arayüz bağlantılarının entegrasyonunda görev aldım."
                    : "I contributed to the Kaplan UGV (Unmanned Ground Vehicle) project by integrating the camera, data and interface connections."}
                </p>
                <p>
                  {language === "tr" 
                    ? "Sistem, araç üzerindeki kamera verilerinin arayüz ile sorunsuz şekilde iletilmesini ve kullanıcıların gerçek zamanlı görüntüleri takip edebilmesini sağlıyor."
                    : "The system ensures seamless transmission of onboard camera data to the interface, enabling users to monitor real-time visuals effectively."}
                </p>
                
              </div>
              <div className="project-image-container">
                <div className="project-image-wrapper">
                  <img 
                    src="/images/tank.jpg" 
                    alt="EV Charging Project" 
                    className="project-image"
                  />
                </div>
              </div>
                            <div className="project-image-container">
                <div className="project-image-wrapper">
                  <img 
                    src="/images/uav-project.jpg" 
                    alt="EV Charging Project" 
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact */}
         <section className="mt-10 pt-8 border-t border-gray-700 text-content-center">
  <h2 className="text-2xl font-semibold mb-8 section-title section-title-center">
    {language === "tr" ? "İletişim" : "Contact"}
  </h2>
  
<div className="flex flex-col items-center gap-6 mb-8">
  <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-md">
    <a href="https://www.linkedin.com/in/arda-efe-silek-50b360328" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-lg w-full text-[#0A66C2]">
      <i className="fab fa-linkedin-in mr-3 text-xl"></i>
      LinkedIn
    </a>
    <a href="mailto:ardaefesilek35@gmail.com" className="bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-lg w-full text-[#FFA500]">
      <i className="fas fa-envelope mr-3 text-xl"></i>
      {language === "tr" ? "E-posta" : "Email"}
    </a>
    <a href="https://www.instagram.com/silekardaefe/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-red-500 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-lg w-full bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #F58529, #DD2A7B, #8134AF)" }}>
      <i className="fab fa-instagram mr-3 text-xl"></i>
      Instagram
    </a>
  </div>
</div>
  
  <div className="flex flex-col items-center gap-4 mt-6">
    <div className="text-center">
      <p className="text-gray-300 mb-3 enhanced-text text-lg flex items-center justify-center">
        <i className="fas fa-envelope mr-3 text-indigo-400 text-xl"></i>
        ardaefesilek35@gmail.com
      </p>
    </div>
  </div>
</section>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-400 mt-8 pb-6 enhanced-text">
          <p>© 2025 Arda Efe Silek. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}</p>
        </footer>
      </div>
    </div>
  );
}