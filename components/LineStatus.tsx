import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LineStatus({ line }: any) {
  const getBorderColor = () => {
    switch (line.name) {
      case 'Bakerloo':
        return 'darkbrown';
      case 'Central':
        return 'red';
      case 'Circle':
        return 'yellow';
      case 'District':
        return 'green';
      case 'DLR':
        return 'turquoise';
      case 'Hammersmith & City':
        return 'pink';
      case 'Jubilee':
        return 'gray';
      case 'Metropolitan':
        return 'magenta';
      case 'Northern':
        return 'black';
      case 'Piccadilly':
        return 'darkblue';
      case 'Victoria':
        return 'blue';
      case 'Waterloo & City':
        return 'turquoise';
    }
  };

  const lineBorderColor = getBorderColor();

  const styles = StyleSheet.create({
    lineContainer: {
      flex: 1,
      borderColor: lineBorderColor,
      padding: 10,
      marginBottom: 10,
      borderWidth: 5,
      borderRadius: 20
    }
  })

  return (
    <View style={styles.lineContainer}>
      <Text>{line.name}</Text>
      {line.disruptions.length > 0 ? (
        line.disruptions.map((disruption: any) => (
          <Text key={disruption.category}>
            {disruption.description}
          </Text>
        ))
      ) : (
        <Text>Status OK</Text>
      )}
    </View>
  );
}
