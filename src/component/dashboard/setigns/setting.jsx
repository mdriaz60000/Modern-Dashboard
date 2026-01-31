"use client";

import Image from "next/image";
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FaRegEdit } from "react-icons/fa";

const ProfileSettings = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TabGroup>
      <div className="bg-[#193560] mini-h-screen p-4 lg:p-8 text-white">
        <TabList className="flex gap-8 mb-8 text-[24px] border-b border-white/30">
          <Tab
            className={({ selected }) =>
              `cursor-pointer pb-2 transition-all duration-200 ${
                selected
                  ? "border-b-4 border-white font-semibold"
                  : "text-white/70"
              }`
            }
          >
            Profile
          </Tab>

          <Tab
            className={({ selected }) =>
              `cursor-pointer pb-2 transition-all duration-200 ${
                selected
                  ? "border-b-4 border-white font-semibold"
                  : "text-white/70"
              }`
            }
          >
            Password Settings
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="mb-8">
              <p className="text-[20px] mb-4">Profile Image</p>

              <section className="flex items-end gap-4">
                <div className="w-25 h-25 rounded-full overflow-hidden">
                  <Image
                    src="/Elipse 5.png"
                    width={102}
                    height={102}
                    alt="profile"
                    className="object-cover"
                  />
                </div>

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  type="button"
                  className="px-4 py-1.5 text-sm rounded-2xl sidebar-active
                             transition-all duration-200 mb-2 hover:bg-black"
                >
                  {isEditing ? (
                    <FaRegEdit className="text-2xl" />
                  ) : (
                    "Edit Profile"
                  )}
                </button>
              </section>
            </div>

            {/* Editable Form */}
            {isEditing ? (
              <div className="space-y-6 text-[20px] max-w-4xl">
                {/* row 1 */}
                <section className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div className="flex flex-col flex-1">
                    <label className="mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Mohammad Riaz"
                      className="rounded-md bg-[#1a2942] px-4 py-2 w-full"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label className="mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="riaz@gmail.com"
                      className="rounded-md bg-[#1a2942] px-4 py-2 w-full"
                    />
                  </div>
                </section>

                {/* row 2 */}
                <section className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div className="flex flex-col flex-1">
                    <label className="mb-2">Store Name</label>
                    <input
                      type="text"
                      placeholder="Store Name"
                      className="rounded-md bg-[#1a2942] px-4 py-2 w-full"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label className="mb-2">Store Address</label>
                    <input
                      type="text"
                      placeholder="123 Main Street, New York"
                      className="rounded-md bg-[#1a2942] px-4 py-2 w-full"
                    />
                  </div>
                </section>

                <section className="pt-8 flex justify-center">
                  <button className="rounded-md bg-[#00C950] px-16 py-3">
                    Save
                  </button>
                </section>
              </div>
            ) : (
              <div className="space-y-6 text-[20px] max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-center gap-2">
                  <label>Full Name:</label>
                  <div>Jane D</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-center gap-2">
                  <label>Email:</label>
                  <div>jane@gmail.com</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-center gap-2">
                  <label>Store Name:</label>
                  <div>Ubreakifix Store</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-center gap-2">
                  <label>Store Address:</label>
                  <div>123 Main Street, New York, NY 10001</div>
                </div>
              </div>
            )}
          </TabPanel>

          <TabPanel>
            <div className="text-[20px]">
              <p>Password settings content here...</p>
            </div>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  );
};

export default ProfileSettings;
