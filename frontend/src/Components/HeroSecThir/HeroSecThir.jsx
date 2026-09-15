import React from 'react'

const HeroSecThir = () => {
    const servicesList = [
        {
            category: "GROWTH",
            title: "Omnichannel Growth Marketing",
            description: "Data-driven multi-channel strategies engineered to scale user acquisition and retention.",
            icon: "📈"
        },
        {
            category: "VISIBILITY",
            title: "Advanced SEO & Architecture",
            description: "Technical, on-page, and authority SEO frameworks that dominate search engine rankings.",
            icon: "🔍"
        },
        {
            category: "ADS",
            title: "High-ROI Paid Campaigns",
            description: "Precision-targeted PPC, social ads, and programmatic media buying optimized for conversion.",
            icon: "🎯"
        },
        {
            category: "BUILD",
            title: "Enterprise Web Engineering",
            description: "Lightning-fast, high-performance web applications built to scale effortlessly.",
            icon: "💻"
        },
        {
            category: "ECOMM",
            title: "Custom E-Commerce Ecosystems",
            description: "Scalable online stores, custom checkout funnels, and seamless payment gateways.",
            icon: "🛍️"
        },
        {
            category: "MOBILE",
            title: "Cross-Platform App Development",
            description: "Native iOS & Android experiences powered by fluid UI and peak performance.",
            icon: "📱"
        },
        {
            category: "DESIGN",
            title: "UI/UX & Brand Identity Systems",
            description: "Immersive digital experiences and visual languages that turn users into brand advocates.",
            icon: "✨"
        },
        {
            category: "MEDIA",
            title: "Motion Graphics & Video Production",
            description: "Cinematic brand stories, ad creatives, and motion elements designed to convert.",
            icon: "🎬"
        },
        {
            category: "SOCIAL",
            title: "Viral Content Engineering",
            description: "Scroll-stopping short and long-form content architecture built for organic virality.",
            icon: "⚡"
        },
        {
            category: "CONTENT",
            title: "Strategic Content Pipelines",
            description: "Authority-building content frameworks tailored for every stage of the user funnel.",
            icon: "📝"
        },
        {
            category: "AUTOMATION",
            title: "CRM & Workflow Automation",
            description: "End-to-end CRM integrations, custom funnels, and intelligent chatbot systems.",
            icon: "⚙️"
        },
        {
            category: "INFRA",
            title: "Cloud & Secure Hosting",
            description: "Enterprise-grade cloud architectures with 99.9% uptime and lightning-fast CDN.",
            icon: "🛡️"
        }
    ];

    return (
        <section className="services-grid-section py-5 text-white">
            <div className="container px-3">
        
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">
                        Full-Spectrum Digital Mastery, <br />
                        <span className="gradient-text-service">Crafted With Intent.</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-secondary">
                        Strategy, creative architecture, core engineering, and performance marketing—unified under one roof.
                    </p>
                </div>

                {/* 12 Grid Cards Layout (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
                <div className="row g-4">
                    {servicesList.map((service, index) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={index}>
                            <div className="service-card p-4 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    {/* Top Category & Arrow Icon */}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="service-category">{service.category}</span>
                                        <span className="service-arrow">↗</span>
                                    </div>

                                    {/* Card Title */}
                                    <h4 className="h5 fw-bold mb-2 text-white">{service.title}</h4>
                  
                                    {/* Card Description */}
                                    <p className="service-desc text-secondary small mb-0">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom subtle glow/icon element */}
                                <div className="mt-4 pt-3 border-top border-dark d-flex align-items-center justify-content-between">
                                    <span className="fs-5">{service.icon}</span>
                                    <span className="explore-link">Explore →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HeroSecThir
