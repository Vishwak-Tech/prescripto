import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { AdminContext } from "../../context/AdminContext";

const DoctorProfile = () => {

  const {
    dToken,
    profileData,
    setProfileData,
    getProfileData
  } = useContext(DoctorContext);

  const { currency } = useContext(AppContext);
  const { backendUrl } = useContext(AdminContext)

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  const updateProfile = async () => {
    try {

      const { data } = await axios.put(
        backendUrl + "/api/doctor/update-profile",
        {
          fees: profileData.fees,
          address: profileData.address,
          available: profileData.available
        },
        {
          headers: {
            dtoken: dToken
          }
        }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    profileData && (
      <div className="m-5">
        <div className="flex flex-col gap-4">

          <img
            className="bg-primary/80 w-full sm:max-w-64 rounded-lg"
            src={profileData.image}
            alt="doctor"
          />

          <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">

            <p className="text-3xl font-medium text-gray-700">
              {profileData.name}
            </p>

            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>
                {profileData.degree} - {profileData.speciality}
              </p>

              <button className="py-0.5 px-2 border text-xs rounded-full">
                {profileData.experience} Years
              </button>
            </div>

            <div className="mt-4">
              <p className="font-medium text-neutral-800">
                About:
              </p>

              <p className="text-sm text-gray-600 mt-1">
                {profileData.about}
              </p>
            </div>

            {/* Fees */}

            <p className="text-gray-600 font-medium mt-4">
              Appointment Fee: {currency}

              {isEdit ? (
                <input
                  type="number"
                  className="border ml-2 px-2 py-1"
                  value={profileData.fees}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      fees: e.target.value
                    }))
                  }
                />
              ) : (
                profileData.fees
              )}
            </p>

            {/* Address */}

            <div className="mt-4">
              <p className="font-medium text-neutral-600">
                Address:
              </p>

              {isEdit ? (
                <div className="flex flex-col gap-2 mt-2">
                  <input
                    type="text"
                    className="border px-2 py-1"
                    value={profileData.address.line1}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line1: e.target.value
                        }
                      }))
                    }
                  />

                  <input
                    type="text"
                    className="border px-2 py-1"
                    value={profileData.address.line2}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line2: e.target.value
                        }
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-sm text-gray-600 mt-1">
                  {profileData.address.line1}
                  <br />
                  {profileData.address.line2}
                </p>
              )}
            </div>

            {/* Availability */}

            <div className="flex gap-2 items-center mt-4">

              <input
                type="checkbox"
                checked={profileData.available}
                onChange={() =>
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available
                  }))
                }
                disabled={!isEdit}
              />

              <label>Available</label>

            </div>

            {/* Buttons */}

            {isEdit ? (
              <button
                onClick={updateProfile}
                className="px-6 py-2 border border-primary text-primary rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-6 py-2 border border-primary text-primary rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
              >
                Edit
              </button>
            )}

          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;





























// import { useContext, useState } from "react";
// import { DoctorContext } from "../../context/DoctorContext";
// import { useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
// 
// const DoctorProfile = () => {
  // const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext);
  // const { currency, backendUrl } = useContext(AppContext);
// 
  // const [isEdit, setIsEdit] = useState(false)
// 
  // useEffect(() => {
    // if (dToken) {
      // getProfileData();
    // }
  // }, [dToken]);
// 
  // return (
    // profileData && (
      // <div>
        {/* <div className="flex flex-col gap-4 m-5"> */}
          {/* <div> */}
            {/* <img */}
              // className="bg-primary/80 w-full sm:max-w-64 rounded-lg"
              // src={profileData.image}
              // alt="doc_image"
            // />
          {/* </div> */}
{/*  */}
          {/* <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white"> */}
            {/* <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">{profileData.name}</p> */}
            {/* <div className="flex items-center gap-2 mt-1 text-gray-600"> */}
              {/* <p> */}
                {/* {profileData.degree} - {profileData.speciality} */}
              {/* </p> */}
              {/* <button className="py-0.5 px-2 border text-xs rounded-full">{profileData.experience} Years</button> */}
            {/* </div> */}
{/*  */}
            {/* <div> */}
              {/* <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">About:</p> */}
              {/* <p className="text-sm text-gray-600 max-w-175 mt-1">{profileData.about}</p> */}
            {/* </div> */}
{/*  */}
            {/* <p className="text-gray-600 font-medium mt-4"> */}
              {/* Appointment fee:{" "} */}
              {/* <span className="text-gray-600"> */}
                {/* {currency}  */}
                {/* {isEdit ? ( */}
                  // <input
                    // type="number"
                    // onChange={(e) =>
                      // setProfileData((prev) => ({ ...prev, fees: e.target.value }))}
                      // value={profileData.fees}
                    // />
                // ) : (
                  // profileData.fees
                // )}
              {/* </span> */}
            {/* </p> */}
{/*  */}
            {/* <div className="flex gap-2 py-2"> */}
              {/* <p className="font-medium text-neutral-600">Address:</p> */}
              {/* <p className="text-sm text-gray-600"> */}
                {/* {profileData.address.line1} */}
                {/* <br /> */}
                {/* {profileData.address.line2} */}
               {/* </p> */}
            {/* </div> */}
{/*  */}
            {/* <div className="flex gap-1 pt-2"> */}
              {/* <input checked={profileData.available} type="checkbox" name="" id="" /> */}
              {/* <label htmlFor="">Available</label> */}
            {/* </div> */}
{/*  */}
            {/* <button onClick={()=>setIsEdit(true)} className="px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary */}
            //  hover:text-white transition-all">Edit</button>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    // )
  // );
// };
// 
// export default DoctorProfile;
// 