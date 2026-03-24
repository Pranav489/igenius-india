// components/courses/CourseTabs.jsx
'use client';

const CourseTabs = ({ activeTab, setActiveTab, colors, hasGallery = true }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', sectionId: 'overview-section' },
    { id: 'curriculum', label: 'Curriculum', sectionId: 'curriculum-section' },
    { id: 'benefits', label: 'Benefits', sectionId: 'benefits-section' },
    ...(hasGallery ? [{ id: 'gallery', label: 'Gallery', sectionId: 'gallery-section' }] : []),
    { id: 'faq', label: 'FAQ', sectionId: 'faq-section' }
  ];

  const handleTabClick = (tabId, sectionId) => {
    setActiveTab(tabId);
    
    // Smooth scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="sticky top-[72px] md:top-20 z-30 bg-white border-b border-gold-tan/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 sm:gap-4 py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.sectionId)}
              className={`
                px-4 py-2 rounded-full font-headline text-sm whitespace-nowrap capitalize
                transition-all duration-300 cursor-pointer
                ${activeTab === tab.id 
                  ? `${colors.bg} ${colors.primary} border-2 ${colors.border}` 
                  : 'text-dark-green/60 hover:text-dark-green border-2 border-transparent'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;