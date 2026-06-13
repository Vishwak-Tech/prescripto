import { assets } from "../assets/assets";

const Careers = () => {

  const jobs = [
    {
      title: "General Physician",
      location: "Mumbai",
      type: "Full Time",
      experience: "2+ Years",
      image: assets.doc1
    },
    {
      title: "Cardiologist",
      location: "Delhi",
      type: "Full Time",
      experience: "5+ Years",
      image: assets.doc2
    },
    {
      title: "General Surgeon",
      location: "Remote",
      type: "Internship",
      experience: "0-1 Years",
      image: assets.doc2
    }
  ];

  return (
    <div className="px-6 md:px-16 py-10">

      {/* Hero */}

      <div className="relative rounded-3xl overflow-hidden mb-14 h-[350px]">

        <img
          src={assets.contact_image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Join Our Healthcare Team
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl">
            Build your career with passionate healthcare professionals
            and help improve lives around the world.
          </p>

          <button className="mt-6 bg-primary px-6 py-3 rounded-full text-white hover:scale-105 transition-all">
            View Open Positions
          </button>

        </div>

      </div>


      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Open Positions
        </h2>

        <div className="w-20 h-1 bg-primary rounded-full mt-2"></div>
      </div>


      {/* Cards */}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">

        {jobs.map((job,index)=>(

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* Card Image */}

            <img
              src={job.image}
              alt=""
              className="w-full h-52 object-cover"
            />


            <div className="p-6">

              <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs">
                Hiring Now
              </span>

              <h2 className="text-xl font-bold text-gray-800 mt-4">
                {job.title}
              </h2>

              <div className="mt-4 space-y-2 text-gray-600">

                <p>📍 {job.location}</p>

                <p>💼 {job.type}</p>

                <p>⭐ {job.experience}</p>

              </div>

              <button
                className="w-full mt-6 bg-primary text-white py-3 rounded-xl hover:bg-indigo-600 transition"
              >
                Apply Now →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Careers;





















































