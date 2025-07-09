
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function BottomSheet({ visible, onClose, children, heightRatio = 0.4 }) {
  const bottomSheetHeight = height * heightRatio;
  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: height - bottomSheetHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return (
    <>
      {visible && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        style={[
          styles.sheet,
          {
            top: translateY,
            height: bottomSheetHeight,
          },
        ]}
      >
        <View style={styles.handle} />
        {children}
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    elevation: 10,
    zIndex : 100,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
