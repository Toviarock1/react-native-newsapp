import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { JSDOM } from "jsdom-jscore-rn";
import axios from "axios";
import { Readability } from "@mozilla/readability";

const SingleNews = ({ route }) => {
  const [newsContent, setNewsContent] = useState("");
  const { item } = route.params;
  console.log(item);

  const getNewsContent = async () => {
    // await fetch(`http://localhost:5000/?url=${item.url}`)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    // axios
    //   .get(`http://localhost:5000/?url=${item.url}`)
    //   .then((res) => {
    //     // setNewsContent(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNewsContent();
  }, []);

  return (
    <View>
      <Text>{item.description}</Text>
      <Text>{item.content}</Text>
      <Text>{newsContent}</Text>
    </View>
  );
};

export default SingleNews;
