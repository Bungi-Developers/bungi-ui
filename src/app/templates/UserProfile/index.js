import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../../HOCs";
import { StyledImage, Header } from "../../components";
import InfoPane from "./InfoPane";

const UserProfile = ({
  user: { name, rating, profile },
  editable = false,
  styles
}) => {
  const [featuredImage, ...imageUrls] = profile.imageUrls;
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!editing);
  return (
    <View style={styles.container}>
      <Header>
        <View style={styles.toolbar}>
          {editable && (
            <View style={{ ...styles.buttonContainer, ...styles.leftButton }}>
              {editing && <Button title="Cancel" onPress={toggleEditing} />}
            </View>
          )}
          <View style={styles.headerContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          {editable && (
            <View style={{ ...styles.buttonContainer, ...styles.rightButton }}>
              <Button
                title={editing ? "Save" : "Edit"}
                onPress={toggleEditing}
              />
            </View>
          )}
        </View>
      </Header>
      <StyledImage url={featuredImage} />
      <InfoPane {...profile} />
      {imageUrls.map((url, i) => (
        <StyledImage key={i} url={url} />
      ))}
    </View>
  );
};

export default compose(
  withSafeScroll,
  withStyles({
    container: {
      flex: 1
    },
    toolbar: {
      width: "100%",
      height: 45,
      display: "flex",
      flexDirection: "row",
      marginRight: 12,
      justifyContent: "center"
    },
    headerContent: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row"
    },
    name: {
      fontSize: 22,
      marginRight: 6
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    rightButton: {
      justifyContent: "flex-end"
    },
    leftButton: {
      justifyContent: "flex-start"
    },
    rating: {
      fontSize: 12
    }
  })
)(UserProfile);
