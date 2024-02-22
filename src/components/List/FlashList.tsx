import React, { useContext } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import Container from "@components/Containers/Container";
import Text from "@components/Text/Text";
// import { ThemeContext } from "@context/ThemeContext";
import { FlashList as RNFlashList } from "@shopify/flash-list";
import { Colors, Spacings } from "@themes/index";

interface ListProps {
  /**
   * sets the label of the list
   */
  title?: string;

  /**
   * contains the data of the list
   */
  data: object[];

  /**
   * function that returns an element to be rendered by the list
   */
  renderItem: (item: any) => Element | React.JSX.Element;

  /**
   * Sets the orientation of the list
   */
  horizontal?: boolean;

  /**
   * Sets the estimatedItemSize for FlashList
   */
  estimatedItemSize?: number;
  listEmptyComponent?: any;
  onRefresh?: () => void;
  refreshing?: boolean;
}

/**
 * A custom list component that uses FlashList.
 *
 * @param props - ListProps
 * @type {Component}
 * @returns {React.FC}
 */
const FlashList = ({
  title,
  data,
  renderItem,
  horizontal = true,
  estimatedItemSize = 50,
  listEmptyComponent,
  onRefresh,
  refreshing,
}: ListProps) => {
  // const { colorTheme } = useContext(ThemeContext);

  return (
    <Container>
      {title && (
        <Text size="xxl" style={[styles.listTitle, { color: Colors.black }]}>
          {title}
        </Text>
      )}

      <RNFlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        estimatedItemSize={estimatedItemSize}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={listEmptyComponent}
        // onRefresh={onRefresh}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Container>
  );
};

export default FlashList;

const styles = StyleSheet.create({
  listTitle: {
    ...Spacings.marginHorizontal10,
    ...Spacings.marginVertical20,
    fontWeight: "bold",
  },
});
