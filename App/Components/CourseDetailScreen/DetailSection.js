import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";

export default function DetailSection({ course }) {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            padding: 10,
            borderRadius: 15,
            backgroundColor: Colors.WHITE,
          }}>
          <Image
            source={{ uri: course?.banner?.url }}
            style={{
              width: Dimensions.get("screen").width * 0.94,
              height: 190,
              borderRadius: 50,
            }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, marginTop: 7, fontWeight: "500" }}>
              {course.name}
            </Text>
            <View>
              <View style={styles.rowStyle}>
                <OptionItem
                  icon={"book-outline"}
                  value={course.chapters?.length + "Chapter"}
                />
                <OptionItem icon={"md-time-outline"} value={course?.time} />
              </View>
              <View style={styles.rowStyle}>
                <OptionItem
                  icon={"person-circle-outline"}
                  value={course?.author}
                />
                <OptionItem icon={"cellular-outline"} value={course?.level} />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>Description</Text>
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.GRAY,
                  fontWeight: "500",
                  lineHeight: 24,
                }}>
                {course.description?.markdown}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                gap: 25,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.PRIMARY,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                    padding: 15,
                  }}>
                  Enroll for free
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.DARK_BLUE,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                    padding: 15,
                  }}>
                  Membership ${course.price}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
