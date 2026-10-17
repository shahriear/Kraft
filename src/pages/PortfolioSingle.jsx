import React, { useState } from 'react'
import ProjectSidebar from '../components/PortfolioSingle/ProjectSidebar';
import ProjectGallery from '../components/PortfolioSingle/ProjectGallery';
import NavigationBar from '../components/PortfolioSingle/NavigationBar';
import RelatedWorks from '../components/PortfolioSingle/RelatedWorks';
import ImageModal from '../components/PortfolioSingle/ImageModal';
import { mainGalleryImages, projectInfo, relatedProjects } from '../components/data/projectData';

const PortfolioSingle = () => {
  const [modalTitle, setModalTitle] = useState(null);

  const handlePrev = () => alert('Navigating to previous project...');
  const handleNext = () => alert('Navigating to next project...');
  const handleGrid = () => alert('Opening all portfolio grid...');
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-black selection:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Main Content Grid: Sidebar + Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sidebar Info */}
          <div className="lg:col-span-4">
            <ProjectSidebar projectInfo={projectInfo} />
          </div>

          {/* Right Main Gallery */}
          <div className="lg:col-span-8">
            <ProjectGallery
              galleryData={mainGalleryImages}
              onImageClick={title => setModalTitle(title)}
            />
          </div>
        </div>

        {/* Prev / Grid / Next Navigation */}
        <NavigationBar
          onPrev={handlePrev}
          onNext={handleNext}
          onGridClick={handleGrid}
        />

        {/* Related Works Grid */}
        <RelatedWorks
          projects={relatedProjects}
          onProjectClick={title => setModalTitle(title)}
        />
      </main>

      {/* Lightbox / Preview Modal */}
      <ImageModal
        selectedImage={modalTitle}
        onClose={() => setModalTitle(null)}
      />
    </div>
  );
}

export default PortfolioSingle