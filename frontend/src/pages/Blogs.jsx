// import React from "react";
// import blog1 from "../assets/blog1.png";
// import blog2 from "../assets/blog2.png";

// const BlogPage = () => {
//   const containerStyle = {
//     display: "flex",
//     maxWidth: "80%",
//   };

//   const leftSectionStyle = {
//     width: "60%",
//     padding: "45px",
//     marginLeft: "50px",
//   };

//   const rightSectionStyle = {
//     width: "100%",
//     padding: "20px",
//     paddingLeft: "160px",
//   };

//   const sidebarStyle = {
//     backgroundColor: "#F3F1FF",
//     padding: "15px",
//     borderRadius: "10px",
//     marginBottom: "120px",
//   };

//   const searchBarStyle = {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#F3F1FF",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     marginBottom: "20px",
//   };

//   const searchInputStyle = {
//     flex: 1,
//     border: "none",
//     outline: "none",
//     padding: "5px",
//     fontSize: "50px",
//   };

//   const categoryTitleStyle = {
//     fontSize: "80px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   };

//   const categoryItemStyle = {
//     fontSize: "40px",
//     margin: "25px 40px",
//     cursor: "pointer",
//   };

//   const topBlogTitleStyle = {
//     fontSize: "80px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   };

//   const topBlogItemStyle = {
//     display: "flex",
//     alignItems: "flex-start",
//     marginBottom: "10px",
//     fontSize: "40px",
//   };

//   const blogIndexStyle = {
//     fontSize: "40px",
//     fontWeight: "bold",
//     marginRight: "10px",
//   };

//   const textContainerStyle = {
//     flex: 1,
//   };

//   const dateStyle = {
//     fontSize: "25px",
//     color: "gray",
//   };

//   const titleBoldStyle = {
//     fontSize: "40px",
//   };

//   const headerStyle = {
//     background: "linear-gradient(0deg, #6770F3 0%, #8346F8 100%)",
//     padding: "30px 110px",
//     color: "white",
//     fontSize: "75px",
//     fontWeight: "bold",
//     width: "100%",
//   };

//   const blogListHeaderStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "38px",
//     width: "130%",
//   };

//   const titleStyle = {
//     fontSize: "90px",
//     fontWeight: "bold",
//   };

//   const viewAllStyle = {
//     fontSize: "40px",
//     color: "black",
//     textDecoration: "none",
//     cursor: "pointer",
//     width: "10%",
//   };

//   const blogItemStyle = {
//     display: "flex",
//     gap: "20px",
//     marginBottom: "20px",
//     width: "130%",
//   };

//   const blogImageContainer = {
//     flexDirection: "column",
//     alignItems: "center",
//     width: "100%",
//   };

//   const imageStyle = {
//     width: "100%",
//     borderRadius: "5px",
//     marginBottom: "10px",
//   };

//   const blogTextContainer = {
//     textAlign: "center",
//   };

//   return (
//     <div>
//       <h1 style={headerStyle}>Blogs</h1>

//       <div style={containerStyle}>
//         <div style={leftSectionStyle}>
//           <div style={searchBarStyle}>
//             <input type="text" placeholder="Search..." style={searchInputStyle} />
//           </div>
//           <div style={sidebarStyle}>
//             <h3 style={categoryTitleStyle}>Categories</h3>
//             <p style={categoryItemStyle}>Cloud Computing</p>
//             <p style={categoryItemStyle}>Data Analysis</p>
//             <p style={categoryItemStyle}>Oracle Database Development</p>
//             <p style={categoryItemStyle}>Python with Data Science</p>
//             <p style={categoryItemStyle}>Web development</p>
//           </div>

//           <div style={sidebarStyle}>
//             <h3 style={topBlogTitleStyle}>Top Blog</h3>
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} style={topBlogItemStyle}>
//                 <span style={blogIndexStyle}>{num}</span>
//                 <div style={textContainerStyle}>
//                   <p style={titleBoldStyle}>Exploratory Data Analysis EDA</p>
//                   <p style={dateStyle}>13 Nov, 2024</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div style={rightSectionStyle}>
//           <div style={blogListHeaderStyle}>
//             <h1 style={titleStyle}>Data Analysis</h1>
//             <span style={viewAllStyle}>View all</span>
//           </div>

//           {[1, 2, 3].map((_, index) => (
//             <div key={index} style={blogItemStyle}>
//               <div style={blogImageContainer}>
//                 <img src={blog1} alt="Blog" style={imageStyle} />
//                 <div style={blogTextContainer}>
//                   <p style={dateStyle}>Data Analysis - 13 Nov, 2024</p>
//                   <p style={titleBoldStyle}>Exploratory Data Analysis EDA</p>
//                 </div>
//               </div>
//               <div style={blogImageContainer}>
//                 <img src={blog2} alt="Process" style={imageStyle} />
//                 <div style={blogTextContainer}>
//                   <p style={dateStyle}>Data Analysis - 13 Nov, 2024</p>
//                   <p style={titleBoldStyle}>Data Cleaning & Processing</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';


function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Cloud Computing',
    'Data Analysis',
    'Oracle Database Development',
    'Python with Data Science',
    'Web Development'
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'Data Analysis',
      title: 'Exploratory Data Analysis EDA',
      date: '13 Nov, 2024',
      image:  blog1
    },
    {
      id: 2,
      category: 'Data Analysis',
      title: 'Data Cleaning & Processing',
      date: '13 Nov, 2024',
      image:  blog2
    },
    {
      id: 3,
      category: 'Data Analysis',
      title: 'Advanced Data Visualization',
      date: '13 Nov, 2024',
      image: blog1
    },
    {
      id: 4,
      category: 'Data Analysis',
      title: 'Exploratory Data Analysis EDA',
      date: '13 Nov, 2024',
      image:  blog2
    },
    {
      id: 5,
      category: 'Data Analysis',
      title: 'Data Cleaning & Processing',
      date: '13 Nov, 2024',
      image:  blog1
    },
    {
      id: 6,
      category: 'Data Analysis',
      title: 'Advanced Data Visualization',
      date: '13 Nov, 2024',
      image: blog2
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-purple-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Blogs</h1>
        </div>
      </header> */}

      <div className="bg-gradient-to-t from-[#6770F3] to-[#8346F8] px-[50px] py-[30px] text-white text-[75px] font-bold w-full">
      <h1 className="text-3xl font-bold text-white">Blogs</h1>
</div>


      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      className="text-gray-600 hover:text-purple-500 flex items-center w-full text-left"
                      onClick={() => setSearchQuery(category)}
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Blog Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Top Blog</h2>
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map((post, index) => (
                  <div key={post.id} className="flex items-start">
                    <span className="text-2xl font-bold text-purple-500 mr-4">{index + 1}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{searchQuery || 'All Posts'}</h2>
              <button className="text-purple-500 hover:text-purple-600">View all</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-500">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <button className="text-purple-500 hover:text-purple-600 font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;