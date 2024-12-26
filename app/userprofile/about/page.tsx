"use client";
import { useState } from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-4">
      <div className="bg-background-secondary rounded-lg  flex">
        {/* About Section */}
        <div className="border-r-2 border-divider">
          {/* About Navigation */}
          <div className="w-[275px]  p-2">
            <div className="text-xl font-semibold p-2">About</div>
            <div className=" bg-background-selected my-1  rounded-md p-2 cursor-pointer text-text-selected text-lg">
              Overview
            </div>
            <div className="active:bg-button-active my-1 hover:bg-button-hover rounded-md p-2 cursor-pointer text-text-primary text-lg">
              Work and education
            </div>
            <div className="active:bg-button-active my-1 hover:bg-button-hover rounded-md p-2 cursor-pointer text-text-primary text-lg">
              Places Lived
            </div>
            <div className="active:bg-button-active my-1 hover:bg-button-hover rounded-md p-2 cursor-pointer text-text-primary text-lg">
              Details about you
            </div>
          </div>
        </div>
        {/* About İnputs */}
        <div className="w-full p-2">
          <AddAWorkPlace />
          <AddSchool />
          <AddCurrentCity />
          <AddDetails />
        </div>
      </div>
    </div>
  );
}

function AddAWorkPlace() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen && "hidden"
        } flex items-center text-text-selected group cursor-pointer p-2`}
      >
        <span className="material-symbols-outlined material-icons mr-2">
          add_circle
        </span>
        <p className="group-hover:underline">Add a workplace</p>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} p-2`}>
        <form>
          <input
            name="company"
            placeholder="Company"
            className="bg-background-primary w-full my-1 p-2"
            required
          />
          <input
            name="position"
            placeholder="Position"
            className="bg-background-primary w-full my-1 p-2"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="bg-background-primary w-full my-1 p-2"
            required
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-button-primary rounded-md   p-2 hover:bg-button-hover"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-button-primary rounded-md p-2  hover:bg-button-hover"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AddSchool() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen && "hidden"
        } flex items-center text-text-selected group cursor-pointer p-2`}
      >
        <span className="material-symbols-outlined material-icons mr-2">
          add_circle
        </span>
        <p className="group-hover:underline">Add a high school</p>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} p-2`}>
        <form>
          <input
            name="school"
            placeholder="School"
            className="bg-background-primary w-full my-1 p-2"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="bg-background-primary w-full my-1 p-2"
            required
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-button-primary rounded-md   p-2 hover:bg-button-hover"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-button-primary rounded-md p-2  hover:bg-button-hover"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AddCurrentCity() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen && "hidden"
        } flex items-center text-text-selected group cursor-pointer p-2`}
      >
        <span className="material-symbols-outlined material-icons mr-2">
          add_circle
        </span>
        <p className="group-hover:underline">Add a current city</p>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} p-2`}>
        <form>
          <input
            name="current_city"
            placeholder="Current city"
            className="bg-background-primary w-full my-1 p-2"
            required
          />

          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-button-primary rounded-md   p-2 hover:bg-button-hover"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-button-primary rounded-md p-2  hover:bg-button-hover"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function AddDetails() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen && "hidden"
        } flex items-center text-text-selected group cursor-pointer p-2`}
      >
        <span className="material-symbols-outlined material-icons mr-2">
          add_circle
        </span>
        <p className="group-hover:underline">Add a details</p>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} p-2`}>
        <form>
          <textarea
            name="details"
            placeholder="Details"
            className="bg-background-primary w-full my-1 p-2"
            required
          />

          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-button-primary rounded-md   p-2 hover:bg-button-hover"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-button-primary rounded-md p-2  hover:bg-button-hover"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
