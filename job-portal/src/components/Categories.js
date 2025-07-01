import {
  GraduationCap,
  Heart,
  Shield,
  Monitor,
  PieChart,
  Calculator,
  Palette,
} from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Oil and Gas", count: 20, icon: <Monitor className="w-8 h-8" /> },
    { name: "Healthcare", count: 10, icon: <Heart className="w-8 h-8" /> },
    {
      name: "Education",
      count: 10,
      icon: <GraduationCap className="w-8 h-8" />,
    },
    { name: "Accounting", count: 10, icon: <Calculator className="w-8 h-8" /> },
    {
      name: "Design, Art and Multimedia",
      count: 20,
      icon: <Palette className="w-8 h-8" />,
    },
    { name: "Technology", count: 10, icon: <Monitor className="w-8 h-8" /> },
    { name: "Security", count: 10, icon: <Shield className="w-8 h-8" /> },
    { name: "Data Analyst", count: 10, icon: <PieChart className="w-8 h-8" /> },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                ({category.count} new jobs)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
