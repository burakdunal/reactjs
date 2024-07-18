"use client";
import { Typography } from "@material-tailwind/react";
import InfoCard from "@/components/material/info-card";

// const SKILLS = [
//   {
//     icon: FireIcon,
//     title: "Front-End Frameworks",
//     date: "Technical Skills",
//     children:
//       "Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.",
//   },
//   {
//     icon: FireIcon,
//     title: "Attention to Detail",
//     date: "Soft Skills",
//     children:
//       "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
//   },
//   {
//     icon: FireIcon,
//     title: "Responsive Web Design",
//     date: "Technical Skills",
//     children:
//       "Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.",
//   },
//   {
//     icon: FireIcon,
//     title: "Time Management",
//     date: "Soft Skills",
//     children:
//       "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
//   },
// ];

export function InformationSection({userData}) {
  return (
    <section id="bilgilerim" className="p-8 information-section-pt">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Eğitim & Sertifikalar
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Eğitim geçmişime bakın.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {userData.educationData.map((item, idx) => (
              <InfoCard
                key={idx}
                icon={item.resumeCategories[0].icon}
                title={item.title}
                date={item.date}
                children={item.descr}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Deneyim
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Çalışma geçmişime bakın.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {userData.experienceData.map((item, idx) => (
              <InfoCard
                key={idx}
                icon={item.resumeCategories[0].icon}
                title={item.title}
                date={item.date}
                children={item.descr}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
