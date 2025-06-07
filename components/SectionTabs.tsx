// "use client";

// import React, { useState, KeyboardEvent } from "react";
// import Link from "next/link";
// import { Calendar, TrendingUp, BarChart3 } from "lucide-react";

// interface SectionItem {
//   name: string;
//   icon: React.ReactNode;
//   path: string;
// }

// const sectionItems: SectionItem[] = [
//   { name: "Tracker", icon: <Calendar className="w-4 h-4" />, path: "/tracker" },
//   { name: "History", icon: <TrendingUp className="w-4 h-4" />, path: "/history" },
//   { name: "Stats", icon: <BarChart3 className="w-4 h-4" />, path: "/stats" },
// ];

// const SectionTabs: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<string>(sectionItems[0].name);

//   const handleSectionChange = (name: string) => {
//     setActiveSection(name);
//   };

//   const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, name: string) => {
//     if (e.key === "Enter" || e.key === " ") {
//       handleSectionChange(name);
//     }
//   };

//   return (
//     <section className="w-full max-w-xl mx-auto p-4">
//       <div className="flex gap-2 mb-6">
//         {sectionItems.map(({ name, icon, path }) => {
//           const isActive = activeSection === name;

//           return (
//             <Link href={path} key={name} className="flex-1">
//               <button
//                 onClick={() => handleSectionChange(name)}
//                 onKeyDown={(e) => handleKeyDown(e, name)}
//                 className={`flex items-center justify-center gap-2 w-full h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors
//                   ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
//                   disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
//                   ${
//                     isActive
//                       ? "bg-black text-white"
//                       : "bg-transparent text-gray-500 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
//                   }
//                 `}
//                 type="button"
//                 role="tab"
//                 aria-selected={isActive}
//               >
//                 {icon}
//                 {name}
//               </button>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default SectionTabs;


