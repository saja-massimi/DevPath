import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axiosInstance from '../../api/axiosInstance';
import { useEffect, useState } from 'react';

function Dashboard({ id }) {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {


    const fetchProfile = async () => {
      try {


        const response = await axiosInstance.get(`/teacherDashboard/${id}`);
        console.log(response.data);
        setCourseData(response.data.courses);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();

  }, []);

  return (
    <div>
      <ResponsiveContainer width="70%" height={400}>
        <BarChart data={courseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="students_count" fill="#EFBB20" name="Number of Students" label={{ position: "top" }} />
        </BarChart>
      </ResponsiveContainer>


    </div>
  );
}

export default Dashboard;