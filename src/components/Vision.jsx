/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab) => {
    setActiveTab(tab);
  }

  const tab1Data = {
    image: "https://www.blockchaininafrica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finnovation-illustration.fef049a9.png&w=828&q=75",
    text: "Content for tab 1",
  };

  const tab2Data = {
    image: "https://www.blockchaininafrica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finnovation-illustration.fef049a9.png&w=828&q=75",
    text: "Content for tab 2",
  };

  const tab3Data = {
    image: "https://www.blockchaininafrica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollaboration-illustration.2f0ca2b5.png&w=828&q=75",
    text: "Content for tab 3",
  };

  return (
    <section className="tabs-section relative isolate overflow-hidden bg-gray-900 py-2 sm:py-32">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      {/* Title and Tab Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-0 px-5 md:px-0">
        {/* Title */}
        <div className="title text-white text-4xl font-bold mb-4 md:mb-0">Your Title Here</div>

        {/* Tab Buttons */}
        <div className="tab-buttons flex flex-wrap md:pr-10">
          <button
            className={`tab-button px-4 py-2 rounded-md mr-2 shadow-md ${activeTab === "tab1" ? "bg-blue-500 text-black" : "bg-gray-100 hover:bg-gray-200"}`}
            onClick={() => handleClick("tab1")}
          >
            Tab 1
          </button>
          <button
            className={`tab-button px-4 py-2 rounded-md mr-2 shadow-md ${activeTab === "tab2" ? "bg-blue-500 text-black" : "bg-gray-100 hover:bg-gray-200"}`}
            onClick={() => handleClick("tab2")}
          >
            Tab 2
          </button>
          <button
            className={`tab-button px-4 py-2 rounded-md shadow-md ${activeTab === "tab3" ? "bg-blue-500 text-black" : "bg-gray-100 hover:bg-gray-200"}`}
            onClick={() => handleClick("tab3")}
          >
            Tab 3
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content align-center p-4 mt-4">
        {activeTab === "tab1" && (
          <div className="tab-content-item bg-gray-800 p-4 rounded-lg mb-4 md:mr-4 md:w-1/2 flex flex-col md:flex-row items-start md:items-center">
            <img src={tab1Data.image} alt="Tab 1 Image" className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 object-cover" />
            <p className="text-white max-w-xl md:max-w-none md:w-1/2 ">{tab1Data.text}</p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="tab-content-item bg-gray-800 p-4 rounded-lg mb-4 md:mr-4 md:w-1/2 flex flex-col md:flex-row items-start md:items-center">
            <img src={tab2Data.image} alt="Tab 2 Image" className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 object-cover" />
            <p className="text-white max-w-xl md:max-w-none md:w-1/2 ">{tab2Data.text}</p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="tab-content-item bg-gray-800 p-4 rounded-lg mb-4 md:mr-4 md:w-1/2 flex flex-col md:flex-row items-start md:items-center">
            <img src={tab3Data.image} alt="Tab 3 Image" className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 object-cover" />
            <p className="text-white max-w-xl md:max-w-none md:w-1/2 ">{tab3Data.text}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tabs;
