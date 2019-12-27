import React, { useState } from "react";
import { View, Button } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../../HOCs";
import { StyledImage, ContentBox } from "../../components";
import FeaturedPane from "./FeaturedPane";
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
      {editable && (
        <ContentBox>
          <View
            style={{ ...styles.toolbar, ...(editing ? styles.editing : {}) }}
          >
            {editing && (
              <>
                <Button title="Cancel" onPress={toggleEditing} />
                <Button title="Save" onPress={toggleEditing} />
              </>
            )}
            {!editing && <Button title="Edit" onPress={toggleEditing} />}
          </View>
        </ContentBox>
      )}
      <FeaturedPane name={name} rating={rating} url={featuredImage} />
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
      justifyContent: "flex-end"
    },
    editing: {
      justifyContent: "space-between"
    }
  })
)(UserProfile);
