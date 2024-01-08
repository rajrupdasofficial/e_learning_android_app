import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";

export default function CourseList({ level }) {
  const [CourseList, setCourse] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList(level).then((resp) => {
      console.log("Response", resp);
      setCourse(resp?.courses);
    });
  };
  return <View></View>;
}
