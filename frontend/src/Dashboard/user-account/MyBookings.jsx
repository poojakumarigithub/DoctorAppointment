import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const MyBookings = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );

  const appointments = data?.doctors || [];

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.length > 0 ? (
            appointments.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))
          ) : (
            <h2
              className="mt-5 text-center  text-[20px] font-semibold text-primaryColor leading-7"
            >
              You did not book any doctor yet
            </h2>
          )}
        </div>
      )}
    </div>
  );
};


export default MyBookings